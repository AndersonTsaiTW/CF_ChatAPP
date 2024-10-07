# React Native Chat App

## Project Overview
This is a mobile chat application developed using **React Native** and **Expo**, designed to provide users with an intuitive interface for exchanging messages. The app allows users to send text messages, images, and location data, even offering offline functionality. Conversations are stored both locally and in **Google Firestore**, while images are managed via **Firebase Cloud Storage**. The project demonstrates key skills in mobile app development, including user authentication, real-time communication, and offline data storage.

## Demonstration Image

<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/e69787e0-b8f0-4a1a-ab9a-b82b62880da2" alt="img01_start" height="600px">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/5f175b98-0679-4d47-9042-4ee3fa9b461b" alt="img02_chat" height="600px">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/5ed5b32d-7a4c-4b0d-b6f9-475cc6489303" alt="img03_actionsSheet" height="600px">
    </td>
  </tr>
  <tr>
    <td><strong>Figure 1:</strong> Start Screen - The start screen where users can enter their name and choose a background color for the chat screen.</td>
    <td><strong>Figure 2:</strong> Chat Interface - The main chat screen where users can exchange messages in real-time.</td>
    <td><strong>Figure 3:</strong> Action Sheet - The action sheet allows users to perform actions like sending their location or selecting an image.</td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/4af8263d-973d-4281-bb56-e9399b8a018d" alt="img04_choosePhoto" height="600px">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/0a3da247-b0d8-4a41-ace7-b6eb97c17d75" alt="img06_offLineModeAlert" height="600px">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/2159af79-f5bd-48df-9739-516b0acc39a4" alt="img07_offLineModeChat" height="600px">
    </td>
  </tr>
  <tr>
    <td><strong>Figure 4:</strong> Choosing a Photo - Users can choose a photo from their gallery or take a new one using the camera.</td>
    <td><strong>Figure 5:</strong> Offline Mode Alert - A pop-up alert informing the user that the app is currently in offline mode.</td>
    <td><strong>Figure 6:</strong> Offline Mode Chat Screen - This screen shows the chat interface when the app is in offline mode, allowing users to view previous messages.</td>
  </tr>
</table>

## Features
- **User Authentication**: Users are authenticated anonymously through **Google Firebase**.
- **Real-time Messaging**: Users can exchange messages in real-time, stored in **Google Firestore**.
- **Send Images**: Users can send images by selecting from their gallery or using the device's camera.
- **Location Sharing**: Users can share their current location using map data.
- **Offline Mode**: Messages can be read offline, and chats are saved locally using **asyncStorage**.
- **Customizable Chat Screen**: Users can enter their name and select a chat screen background color.
- **Accessibility**: The app is compatible with screen readers, enhancing usability for users with visual impairments.

## Technology Stack
- **React Native** with **Expo** for mobile app development.
- **Firebase** for anonymous authentication, Firestore database, and Cloud Storage.
- **Gifted Chat** library for creating the chat interface.
- **asyncStorage** for local message storage.
- **Google Maps API** for location sharing.

## Setup and Installation
To run this app locally, follow these steps:

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 14 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- A **Firebase** project setup for authentication and database services

### Installation Steps
1. **Clone the repository** to your local machine:
    
        git clone https://github.com/yourusername/your-repository.git
        cd your-repository

2. **Install the dependencies**:

        npm install

3. **Set up Firebase**:
   Create a Firebase project and enable Firestore Database and anonymous authentication. Replace the Firebase config in `firebase.js` with your own Firebase credentials:

        const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID"
        };

4. **Start the Expo development server**:
   Once the setup is complete, run the following command to start the app:

        expo start

   The project will open in your browser, and you can scan the QR code using the **Expo Go** app on your mobile device.

### Running on a Physical Device
To run the app on your mobile phone:
1. Download the **Expo Go** app from [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US) or [Apple's App Store](https://apps.apple.com/us/app/expo-go/id982107779).
2. Use **Expo Go** to scan the QR code generated when you run `expo start`.
3. The app will open and run on your phone.

### Running on an Emulator/Simulator
1. If you want to run the app on an emulator, ensure that you have installed [Android Studio](https://developer.android.com/studio) or Xcode (for iOS).
2. Start the emulator or simulator and then run:

        expo start

   Choose the appropriate option for running on iOS or Android.

## How to Use
1. **Start Screen**: Enter your name and choose a background color for the chat screen.
2. **Chat Screen**: You can send text messages, images from your gallery or camera, and your location to other users.
3. **Offline Mode**: You can view previous messages even when offline, and they will sync once the device is online again.

## Project Deliverables
This app demonstrates the following features and skills:
- **Setting up development environments** with React Native and Expo.
- **Real-time messaging** and data storage using Firebase Firestore.
- **Offline data storage** and message synchronization.
- **Sending images and location data** in a chat interface.
- **Implementing accessibility features** for visually impaired users.

## Acknowledgments
This project was developed as part of the Full-Stack Immersion course, demonstrating practical skills in mobile development using React Native, Firebase, and Expo.
