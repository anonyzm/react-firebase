// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyAdySlaAvQ8hw5N6F0GTXAHW7ZAxrcnpkA",
    authDomain: "adamastest-642d3.firebaseapp.com",
    projectId: "adamastest-642d3",
    storageBucket: "adamastest-642d3.appspot.com",
    messagingSenderId: "917923313784",
    appId: "1:917923313784:web:84fd6bcc49c99268e9958d",
    measurementId: "G-KCZQJ4F884"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});