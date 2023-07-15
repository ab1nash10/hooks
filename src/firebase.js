import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

  
  const firebaseConfig = {
    apiKey: "AIzaSyCYVEmJBzLfJEw_7bWEWwapvlW-yhbtfmI",
    authDomain: "react-hooks-blog-8e9d4.firebaseapp.com",
    projectId: "react-hooks-blog-8e9d4",
    storageBucket: "react-hooks-blog-8e9d4.appspot.com",
    messagingSenderId: "1050893105828",
    appId: "1:1050893105828:web:3a8f6d31c3653a02ce8431"
  };

  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;