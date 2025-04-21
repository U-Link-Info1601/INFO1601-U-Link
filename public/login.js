import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import firebaseConfig from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Check if user is already logged in to avoid unnecessary login attempts
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is already signed in:", user.uid);
    // If already logged in, redirect to index
    window.location.href = "index.html";
  }
});

// Get login button and add event listener
const logbtn = document.getElementById('loginbtn');
if (logbtn) {
  logbtn.addEventListener('click', login);
  console.log("Login button event listener added");
} else {
  console.error("Login button not found in the document");
}

// Login function
async function login(event) {
  // Prevent form submission
  event.preventDefault();
  console.log("Login function entered");

  // Get user inputs
  const userInput = document.getElementById('userlog');
  const passwordInput = document.getElementById('passwordlog');
  
  if (!userInput || !passwordInput) {
    console.error("Username or password input elements not found");
    return;
  }
  
  const user = userInput.value;
  const password = passwordInput.value;
  
  console.log("User attempting to login:", user);
  
  // Clear any previous error messages
  const usernameError = document.getElementById('usernameError');
  if (usernameError) {
    usernameError.style.display = "none";
  }
  
  // Check for empty fields
  if (!user || !password) {
    if (usernameError) {
      usernameError.textContent = "Username and password are required";
      usernameError.style.display = "block";
    }
    return;
  }
  
  // Special case for Bob
  if (user === "bob" && password === "bobpass") {
    console.log("Special login for Bob");
    
    // Store something in localStorage to maintain Bob's session
    localStorage.setItem('u-link-user', 'bob');
    
    // Redirect to Bob's page
    window.location.href = "index.html";
    return;
  }

  try {
    // Set persistence to LOCAL to keep the user logged in across browser sessions
    await setPersistence(auth, browserLocalPersistence);
    
    // For other users, use Firebase authentication
    // Using the format from your original login.js
    const email = `${user}@u-link-6b5b0.web.app`;
    
    // Attempt sign in
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // If successful
    console.log("Login successful:", userCredential.user.uid);
    
    // Redirect to main page
    window.location.href = "index.html";
    
  } catch (error) {
    console.error("Login error:", error.code, error.message);
    
    // Display appropriate error message
    if (usernameError) {
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        usernameError.textContent = "Invalid username or password";
      } else if (error.code === 'auth/too-many-requests') {
        usernameError.textContent = "Too many failed attempts. Try again later";
      } else {
        usernameError.textContent = "Login failed. Please try again";
      }
      usernameError.style.display = "block";
    }
  }
}