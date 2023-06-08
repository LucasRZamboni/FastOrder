const firebaseConfig = {
    apiKey: "AIzaSyD72KPnzxLw-rPrPVQFhRYnQK65nusBgZg",
    authDomain: "fastorder-53d70.firebaseapp.com",
    projectId: "fastorder-53d70",
    storageBucket: "fastorder-53d70.appspot.com",
    messagingSenderId: "1039038440883",
    appId: "1:1039038440883:web:8517c7546e76e7a6c5d7c6",
    measurementId: "G-D446JF838M"
};

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
// Crie uma referência para o Realtime Database do Firebase
const database = firebase.database();
// Crie uma referência para o armazenamento do Firebase
const storageRef = firebase.storage().ref();
