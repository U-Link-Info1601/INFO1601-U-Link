import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import firebaseConfig from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const logout = document.getElementById('logoutBtn');

if (logout) {
  logout.addEventListener('click', signout);
}

function signout() {
  // Clear Bob's special login if present
  localStorage.removeItem('u-link-user');
  
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("User signed out successfully");
    window.location.href = "login.html";
  }).catch((error) => {
    // An error happened.
    console.error("Error signing out:", error);
  });
}

// Check for Bob's special login
const isBobLoggedIn = localStorage.getItem('u-link-user') === 'bob';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log("User is signed in:", uid);
    
    // Here you can update UI elements based on the user
    updateUIForAuthenticatedUser(user);
    
  } else if (isBobLoggedIn) {
    // Special case for Bob
    console.log("Special user Bob is logged in");
    
    // Update UI for Bob
    updateUIForBob();
    
  } else {
    // No user is signed in (neither Firebase nor Bob)
    console.log("No user is signed in, redirecting to login");
    window.location.href = "login.html";
  }
});

// Function to update UI elements for regular authenticated users
function updateUIForAuthenticatedUser(user) {
  // Extract username from email
  const username = user.email.split('@')[0];
  
  // Update any UI elements that should display user info
  const userDisplayElement = document.getElementById('user-display-name');
  const sideUser = document.getElementById('sidebar-user-name');
  if (userDisplayElement) {
    userDisplayElement.innerHTML = username;
    sideUser.innerHTML = username;
  }
  
  // You can update other UI elements as needed
}

// Function to update UI elements for Bob
function updateUIForBob() {
  // Update any UI elements that should display Bob's info
  const userDisplayElement = document.getElementById('user-display');
  if (userDisplayElement) {
    userDisplayElement.textContent = "Bob";
  }
  
  // You can update other UI elements specific to Bob
}