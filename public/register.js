import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import firebaseConfig from "./firebaseConfig.js";


const app = initializeApp(firebaseConfig);

const auth = getAuth();

const submit = document.getElementById('reg');

submit.addEventListener('click', register);

function register (){
  event.preventDefault();

let user = document.getElementById('user').value;

/*Since Firebase does not have default user + password login
 as specifications want i'm using this as a work around */

let email = `${user}@u-link-6b5b0.web.app`;

let password = document.getElementById('password').value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    console.log("registration successful");
    
    window.location.href="index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
}