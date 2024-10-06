import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity, Platform, KeyboardAvoidingView, Alert } from 'react-native';

import { getAuth, signInAnonymously } from "firebase/auth";

const image = require('../img/BackgroundImage.png');

const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

  const changeBackgroundColor = (newColor) => {
    setBackgroundColor(newColor);
  };

  const auth = getAuth();
  const signInUser = () => {
    signInAnonymously(auth)
      .then(result => {
        // navigate to shoppingLists page
        navigation.navigate("Chat", { userID: result.user.uid, name: name, backgroundColor: backgroundColor });
        Alert.alert("Signed in Successfully!");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      })
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.welcomeText}>Hello! Let's CHAT!!!</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder='Type your user name here'
        />
        <Text style={styles.centralText}>Choose Background Color.</Text>
        <View style={styles.colorContainer}>
          {colors.map(color => (
            <TouchableOpacity
              key={color}
              style={[styles.colorButton, { backgroundColor: color }]}
              onPress={() => changeBackgroundColor(color)}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.chatButton}
          onPress={signInUser}
        >
          <Text style={styles.chatButtonText}>Go to CHAT!!!</Text>
        </TouchableOpacity>

        {/* use the KeyboardAvoidingView to adjust the layout */}
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 20,
  },
  centralText: {
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 0.5,
    width: "88%",
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20, // let the colors seperate
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
  },
  chatButton: {
    backgroundColor: '#757083',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chatButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 1,
    textAlign: 'center',
  }
});

export default Start;
