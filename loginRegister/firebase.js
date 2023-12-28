// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// // Hassan Firebase configuration
// const firebaseConfig = {
// const firebaseConfig = {
//     apiKey: "AIzaSyCc3-wg2QDfafZlvwEA9GfLlnW8mWswET0",
//     authDomain: "iti-javsascript-r2-python.firebaseapp.com",
//     databaseURL: "https://iti-javsascript-r2-python-default-rtdb.firebaseio.com",
//     projectId: "iti-javsascript-r2-python",
//     storageBucket: "iti-javsascript-r2-python.appspot.com",
//     messagingSenderId: "1031672503736",
//     appId: "1:1031672503736:web:d64162faaf749114ec834d",
//     measurementId: "G-S8C7MPDDKH"
//     };

// https://firebase.google.com/docs/web/setup#available-libraries
// Mahmoud Amr Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYDdUx3ZZNAzWL84Ar60fGH7wL_uyd71M",
  authDomain: "formal-folder-376913.firebaseapp.com",
  databaseURL: "https://formal-folder-376913-default-rtdb.firebaseio.com",
  projectId: "formal-folder-376913",
  storageBucket: "formal-folder-376913.appspot.com",
  messagingSenderId: "975600999814",
  appId: "1:975600999814:web:4c0f872050c5c05cc82007",
};

// // Production configuration
// const firebaseConfig = {
// apiKey: "YOUR_API_KEY",
// authDomain: "YOUR_AUTH_DOMAIN",
// databaseURL: "YOUR_DATABASE_URL",
// projectId: "YOUR_PROJECT_ID",
// storageBucket: "YOUR_STORAGE_BUCKET",
// messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
// appId: "YOUR_APP_ID"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize database
const db = getDatabase();
const dbref = ref(db);

// Firebase Auth
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Get Elements (References)
// Button References
const btnShowLoginForm = document.getElementById("id-btn-show-login-form");
const btnShowRegForm = document.getElementById("id-btn-show-reg-form");
const btnLoginMail = document.getElementById("id-btn-login-mail");
const btnRegMail = document.getElementById("id-btn-reg-mail");
const btnLoginRegGoogle1 = document.getElementById("id-btn-login-reg-google1");
const btnSignout1 = document.getElementById("id-btn-signout1");
const btnLoginRegGoogle2 = document.getElementById("id-btn-login-reg-google2");
const btnSignout2 = document.getElementById("id-btn-signout2");

// Inputs References
const inpRegName = document.getElementById("id-reg-name");
const inpRegMail = document.getElementById("id-reg-email");
const inpRegPass = document.getElementById("id-reg-pass");
const inpLoginMail = document.getElementById("id-login-email");
const inpLoginPass = document.getElementById("id-login-pass");

// Message References
const messageLogin = document.getElementById("id-p-message");
const userName = document.getElementById("id-span-username");
const userEmail = document.getElementById("id-span-useremail");

// Div References
const signInContainer = document.getElementById("id-div-login-container");
const signUpContainer = document.getElementById("id-div-reg-container");
const signInForm = document.getElementById("id-div-login-overlay-left");
const signUpForm = document.getElementById("id-div-reg-overlay-right");

// Login/Register using Google
const loginRegGoogle = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      console.log("User logged in successfully");
      window.location.href = "/home/homepage.html";
    })
    .catch((error) => {
      console.log(`${error.code}: ${error.message}`);
    });
};

// Login using Email/Password
const loginMail = (evt) => {
  evt.preventDefault();
  signInWithEmailAndPassword(auth, inpLoginMail.value, inpLoginPass.value)
    .then((credentials) => {
      console.log(credentials);
      console.log("User Signed in successfully");
      get(child(dbref, "UserAuthList/" + credentials.user.uid)).then(
        (snapshot) => {
          if (snapshot.exist) {
            sessionStorage.setItem(
              "user-info",
              JSON.stringify({
                username: snapshot.val().username,
              })
            );
            sessionStorage.setItem(
              "user-info",
              JSON.stringify(credentials.user)
            );
            window.location.href = "/home/homepage.html";
          }
        }
      );
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.code);
      console.log(error.message);
    });
};

// Register using Email/Password
const regMail = async () => {
  createUserWithEmailAndPassword(auth, inpRegMail.value, inpRegPass.value)
    .then((credentials) => {
      console.log(credentials);
      console.log("User Registered successfully");
      set(ref(db, "UserAuthList/" + credentials.user.uid), {
        username: inpRegName.value,
      });
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.code);
      console.log(error.message);
    });
};

// Logout user
const signOutUser = async () => {
  signOut(auth)
    .then(() => {
      console.log("User logged out successfully");
    })
    .catch((error) => {
      console.log(`${error.code}: ${error.message}`);
    });
};

// Switch between login and registration forms
function showRegForm() {
  signUpContainer.style.display = "flex";
  signInContainer.style.display = "none";
  signInForm.style.display = "none";
  signUpForm.style.display = "flex";
  console.log("WorkingReg");
}

function showLoginForm() {
  signUpContainer.style.display = "none";
  signInContainer.style.display = "flex";
  signInForm.style.display = "flex";
  signUpForm.style.display = "none";
  console.log("WorkingForm");
}
// Auth state change listener
onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    btnLoginRegGoogle1.style.display = "none";
    btnSignout1.style.display = "block";
    messageLogin.style.display = "block";
    btnLoginRegGoogle2.style.display = "none";
    btnSignout2.style.display = "block";
    userName.innerHTML = user.displayName;
    userEmail.innerHTML = user.email;
  } else {
    btnLoginRegGoogle1.style.display = "block";
    btnSignout1.style.display = "none";
    messageLogin.style.display = "none";
    btnLoginRegGoogle2.style.display = "block";
    btnSignout2.style.display = "none";
  }
});

// Event Listeners
btnLoginMail.addEventListener("click", loginMail);
btnRegMail.addEventListener("click", regMail);
btnLoginRegGoogle1.addEventListener("click", loginRegGoogle);
btnSignout1.addEventListener("click", signOutUser);
btnLoginRegGoogle2.addEventListener("click", loginRegGoogle);
btnSignout2.addEventListener("click", signOutUser);
btnShowLoginForm.addEventListener("click", () => showLoginForm());
btnShowRegForm.addEventListener("click", () => showRegForm());
