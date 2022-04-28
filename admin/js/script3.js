const firebaseConfig = {
  apiKey: "AIzaSyDE6cFF7klfN0XeUsLT6wstMQzfnG5uxTY",
  authDomain: "vnfdin-b8954.firebaseapp.com",
  databaseURL: "https://vnfdin-b8954-default-rtdb.firebaseio.com",
  projectId: "vnfdin-b8954",
  storageBucket: "vnfdin-b8954.appspot.com",
  messagingSenderId: "1084761966152",
  appId: "1:1084761966152:web:e6fddc1644ab9c841afa7d",
  measurementId: "G-VWPRTXX3KG"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// add 
function writeNewsData(header, text) {
  hheader=document.getElementById('text1');
  ttext=document.getElementById('text2');
  pphoto=document.getElementById("file"); 
  header=hheader.value;
  text=ttext.value;
  photo=pphoto.value;
  firebase.database().ref('news/').push({
    header: header,
    text: text,
    photo: photo
  });
  alert("Sent!")
}

//get
var firebaseRef = firebase.database().ref("news/");
firebaseRef.on('value', (snapshot) => {
  snapshot.forEach(snap => {
    var data = snap.val();
    document.getElementById("issuesList").innerHTML += `
          <h3>"Data:"${data.header}</h3>
          `
        })
      })
