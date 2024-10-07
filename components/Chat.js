// components/Chat.js
import { useState, useEffect } from "react";
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat, InputToolbar } from "react-native-gifted-chat";

import { collection, addDoc, onSnapshot, query, where, orderBy } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

import MapView from 'react-native-maps';

import CustomActions from './CustomActions';

const Chat = ({ db, route, navigation, isConnected, storage }) => {
  const { userID, name, backgroundColor } = route.params;
  // Destructure parameters directly in the function argument

  const [messages, setMessages] = useState([]);

  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0])
  }

  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem("chatMessages") || [];
    setMessages(JSON.parse(cachedMessages));
  }

  const cacheMessages = async (messages) => {
    try {
      await AsyncStorage.setItem('chatMessages', JSON.stringify(messages));
    } catch (error) {
      console.log(error.message);
    }
  }

  let unsubMessages;
  useEffect(() => {

    if (isConnected === true) {
      if (unsubMessages) unsubMessages();
      unsubMessages = null;


      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      unsubMessages = onSnapshot(q, (documentsSnapshot) => {
        let newMessages = [];
        documentsSnapshot.forEach(doc => {
          const data = doc.data();
          newMessages.push({
            _id: doc.id,
            ...data,
            createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
          });
        });
        cacheMessages(newMessages);
        setMessages(newMessages);
      });
    } else loadCachedMessages();

    // Clean up code
    return () => {
      if (unsubMessages) unsubMessages();
    }
  }, [isConnected]);

  // style the chat bubble
  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }

  const renderInputToolbar = (props) => {
    if (isConnected) {
      return <InputToolbar {...props} />;
    } else {
      return null;  // Don't show InputToolbar when offline
    }
  }

  const renderCustomActions = (props) => {
    return <CustomActions userID={userID} storage={storage} onSend={messages => onSend(messages)} {...props} />;
  };

  const renderCustomView = (props) => {
    const { currentMessage } = props;
    if (currentMessage.location) {
      return (
        <MapView
          style={{
            width: 150,
            height: 100,
            borderRadius: 13,
            margin: 3
          }}
          region={{
            latitude: currentMessage.location.latitude,
            longitude: currentMessage.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }
    return null;
  }

  useEffect(() => {
    navigation.setOptions({ title: name })
  }, []);

  return (

    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        onSend={messages => onSend(messages)}
        renderActions={renderCustomActions}
        renderCustomView={renderCustomView}
        user={{
          _id: userID,
          name
        }}
      />
      {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Chat;