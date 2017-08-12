import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCu323hZiriAV0AGNOBlhb7jD_0lDHLxig",
  authDomain: "react-address-book.firebaseapp.com",
  databaseURL: "https://react-address-book.firebaseio.com",
  projectId: "react-address-book",
  storageBucket: "react-address-book.appspot.com",
  messagingSenderId: "1018810249739"
};

firebase.initializeApp(config);
export default firebase;