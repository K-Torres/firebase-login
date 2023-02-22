import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-zh6-OVxzSMWGnbqUMAVUmD2styGEVhY",
  authDomain: "auth-cc253.firebaseapp.com",
  databaseURL: "https://auth-cc253-default-rtdb.firebaseio.com",
  projectId: "auth-cc253",
  storageBucket: "auth-cc253.appspot.com",
  messagingSenderId: "543995773129",
  appId: "1:543995773129:web:71bf8206b3d3bff55acd18",
  measurementId: "G-RBBSL5FX4L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(app);
const gitHubProvider = new GithubAuthProvider();

googleLogin.addEventListener('click', (e) => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      alert("Logged in: " + user.displayName);

    }).catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

githubLogin.addEventListener('click', (e) => {
  signInWithPopup(auth, gitHubProvider)
    .then((result) => {
      const user = result.user;
      alert("Logged in: " + user.displayName);

    }).catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});