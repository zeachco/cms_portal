import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyCo_sR1ZoDLqZnvZkRmQjEK7uxG6oSPNlk',
    authDomain: 'nodium-zeachco.firebaseapp.com',
    databaseURL: 'https://nodium-zeachco.firebaseio.com',
    projectId: 'nodium-zeachco',
    storageBucket: 'nodium-zeachco.appspot.com',
    messagingSenderId: '711980122576',
};

export default firebase.initializeApp(config);
