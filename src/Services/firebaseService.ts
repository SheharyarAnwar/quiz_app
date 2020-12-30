import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB2spqzhmd3KPrh-RlxWcBa20MEcCq7RpM",
  authDomain: "quizicaly.firebaseapp.com",
  databaseURL: "https://quizicaly.firebaseio.com",
  projectId: "quizicaly",
  storageBucket: "quizicaly.appspot.com",
  messagingSenderId: "216155037524",
  appId: "1:216155037524:web:e0ccc931371834428e72c1",
  measurementId: "G-CCD9Y9KZQT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const configureNotifications = (): void => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      messaging
        .getToken({
          vapidKey:
            "BNyMqaoNkh6wl9MfR9-0UUrbMetkI4CfL3FtQI9j_zG1jz8672TjbWX_vQvd0qygv_9j-RCTOwwDl_EZmNWvuLs",
        })
        .then((currentToken) => {
          if (currentToken) {
            console.log("current_token:", currentToken);
          } else {
            // Show permission request.
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    } else {
      console.log("Unable to get permission to notify.");
    }
  });
  // [END request_permission]
};
