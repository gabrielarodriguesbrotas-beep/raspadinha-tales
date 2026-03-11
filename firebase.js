const firebaseConfig = {
  apiKey: "AIzaSyDlpMDEW_yXvjc5TSmdv7_reVcXDPE_VpQ",
  authDomain: "raspadinha-tales.firebaseapp.com",
  projectId: "raspadinha-tales",
  storageBucket: "raspadinha-tales.firebasestorage.app",
  messagingSenderId: "699091694734",
  appId: "1:699091694734:web:00a5d4a87482a5a87b05df",
  measurementId: "G-RRQY24GR04"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
