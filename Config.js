import * as firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDiGZu3iNdMTgnImS89BnPj3nPSANntYVI',
  authDomain: 'story-hub-417f4.firebaseapp.com',
  projectId: 'story-hub-417f4',
  storageBucket: 'story-hub-417f4.appspot.com',
  messagingSenderId: '274392183709',
  appId: '1:274392183709:web:9437c434a2228545caf574',
  measurementId: 'G-W4NC1F3G3R',
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
