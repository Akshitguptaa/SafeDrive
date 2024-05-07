import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD27kAyt0pJ91cQIMCo37ryZeCWfoGa3OY",
  authDomain: "gps-data-f61e0.firebaseapp.com",
  databaseURL: "https://gps-data-f61e0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gps-data-f61e0",
  storageBucket: "gps-data-f61e0.appspot.com",
  messagingSenderId: "965540608739",
  appId: "1:965540608739:web:92b3d46a2cd78543ea63d6"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const signUpWithEmailButton = document.getElementById('sign_up_email');
const signUpWithGoogleButton = document.getElementById('sign_up_google');

signUpWithEmailButton.addEventListener('click', (e) => {
  e.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value; // Add this line
  var fullname = document.getElementById('fullname').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return; }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        fullname: fullname, 
        email: email,
        password: password,
      });
      alert('User created!');

      window.location.href = '../login/login.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

signUpWithGoogleButton.addEventListener('click', (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      const fullname = user.displayName;
      const email = user.email;

      set(ref(database, 'users/' + user.uid), {
        fullname: fullname,
        email: email,
      });
      alert('User created with Google!');

      window.location.href = '../location/login.html'; 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});