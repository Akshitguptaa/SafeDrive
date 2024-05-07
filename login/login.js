import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

const signinEmailButton = document.getElementById('signin_email');
const signInGoogleButton = document.getElementById('sign_in_google');

signinEmailButton.addEventListener('click', (e) => {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            const dt = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: dt.getTime(),
            });

            window.location.href = `../user/user.html?displayName=${user.displayName}`;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

signInGoogleButton.addEventListener('click', (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            window.location.href = `../user/user.html?displayName=${user.displayName}`;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(errorMessage);
        });
});

function goBack() {
    window.location.href = '../index.html';
}
