 // Import the functions you need from the SDKs you need
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDE6cFF7klfN0XeUsLT6wstMQzfnG5uxTY",
   authDomain: "vnfdin-b8954.firebaseapp.com",
   projectId: "vnfdin-b8954",
   storageBucket: "vnfdin-b8954.appspot.com",
   messagingSenderId: "1084761966152",
   appId: "1:1084761966152:web:e6fddc1644ab9c841afa7d",
   measurementId: "G-VWPRTXX3KG"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function signIn()
 {
    em=document.getElementById('email');
    ps = document.getElementById('password');

    email=em.value;
    password = ps.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    document.getElementById('myBtn').onclick = function() {
      window.location.href = 'adminpanel.html';
    };
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
 }
 // reset passwords
 document.getElementById('resetPassword').onclick = function() {
   window.location.href = 'passwordReset.html';
  };