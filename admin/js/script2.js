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


function sendEmail(){
  
  const email=document.getElementById('typeEmail').value;
  firebase.auth().sendPasswordResetEmail(email)
  
  .then((userCredential)=>{
    alert('email sent!')
  }).catch((error)=>{
    alert("error!")
  });
}
