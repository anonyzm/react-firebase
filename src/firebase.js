// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
//import {getAnalytics} from "firebase/analytics";
import {getMessaging, getToken, onMessage} from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAdySlaAvQ8hw5N6F0GTXAHW7ZAxrcnpkA",
    authDomain: "adamastest-642d3.firebaseapp.com", // не обязательно
    projectId: "adamastest-642d3",
    storageBucket: "adamastest-642d3.appspot.com",
    messagingSenderId: "917923313784",
    appId: "1:917923313784:web:84fd6bcc49c99268e9958d",
    measurementId: "G-KCZQJ4F884" // не обязательный параметр
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export const requestForToken = () => {
    return getToken(messaging, {vapidKey: 'BKIeMKFxOLnJjDRrdPsTJET2OmNpCH7iKjqdqrubLjI0Vtl6g3O7tPHTzH61i1Cwbss-4o1CUy_SRJFM53u5Q0k'})
        .then((currentToken) => {
            if (currentToken) {
                console.log('current token for client: ', currentToken);
                // Perform any other neccessary action with the token
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("payload", payload)
            resolve(payload);
        });
    });