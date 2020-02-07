import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyBFnWKhYEyRVDWQCMgxuA-wa928aUyMc-Q",
        authDomain: "react-quiz-da56b.firebaseapp.com",
        databaseURL: "https://react-quiz-da56b.firebaseio.com",
        projectId: "react-quiz-da56b",
        storageBucket: "react-quiz-da56b.appspot.com",
        messagingSenderId: "913123145518",
        appId: "1:913123145518:web:6cb0e689b453342231ecbf"
    })
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
