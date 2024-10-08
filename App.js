// App.js
if (typeof global === 'undefined') {
  window.global = window;
}

import { useEffect } from "react";
import { StyleSheet, Alert } from 'react-native';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import firebaseConfig from './firebaseConfig.js';

import { getStorage } from "firebase/storage";

import { useNetInfo } from "@react-native-community/netinfo";

// import the screens
import Start from './components/Start';
import Chat from './components/Chat';


const App = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const storage = getStorage(app);

  const connectionStatus = useNetInfo();
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      // prevent to call firestore when there is no internet
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const ChatScreen = (props) => {
    return <Chat
      isConnected={connectionStatus.isConnected}
      db={db}
      storage={storage}
      {...props} />;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;