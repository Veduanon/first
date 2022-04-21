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

const auth = firebase.auth();
function sendEmail(){
    const email=document.getElementById('typeEmail').value;
    alert(email)
}
