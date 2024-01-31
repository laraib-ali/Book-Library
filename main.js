function toggleForm(formId) {
    document.getElementById('loginForm').style.display = formId === 'loginForm' ? 'block' : 'none';
    document.getElementById('signupForm').style.display = formId === 'signupForm' ? 'block' : 'none';
  }

// cdn--setup--code
const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyATHQqK_YITONp5vqXiU5VXInET-QwMXk4",
  authDomain: "my-booklibrary.firebaseapp.com",
  projectId: "my-booklibrary",
  storageBucket: "my-booklibrary.appspot.com",
  messagingSenderId: "624743123271",
  appId: "1:624743123271:web:d89c7092e3da5c5e302462",
  measurementId: "G-7ZWF6M86ZJ"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();


document.getElementById('loginForm').addEventListener("submit",(event)=>{
    event.preventDefault()
})


  function login() {
    // Perform login logic (you would need to implement this)
    // alert('Login functionality to be implemented.');
    window.location.replace('dasboard.html')
    const email= document.getElementById("loginEmail").value
    const password= document.getElementById("loginPassword").value
    firebase.auth().signInWithEmailAndPassword(email, password)
  }

  function signup() {
    window.location.replace('dasboard.html')
    const email= document.getElementById("loginEmail").value
    const password= document.getElementById("loginPassword").value
    // alert('Signup functionality to be implemented.');
    // firebase code------
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  
  }