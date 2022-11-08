import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC7qhKp5KIuPvYtCHMc5hZPvvpKr8D1GiA",
    authDomain: "mybvcks.firebaseapp.com",
    projectId: "mybvcks",
    storageBucket: "mybvcks.appspot.com",
    messagingSenderId: "12939397931",
    appId: "1:12939397931:web:dd3a5a6dfe386cce94136e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;