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
  var firebaseRef = firebase.database().ref();
  const storageRef = firebase.storage().ref();

// Get a admin's profile
function adminProfile(){
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      const email = user.email;
      document.getElementById("name").innerHTML += `
         <h5>${user.email}</h5>
         <h5>Admin</h5>
         `
  }
});
}

// update Data
function writeDataMain(header, text) {
  header=document.getElementById('header_admin');
  text=document.getElementById('text'); 
  header=header.value;
  text=text.value;
  firebase.database().ref("/news/main").update({
    header: header,
    text: text
  });
  document.querySelector('.alert').style.display = 'block';
}
// Main
function readDataMain(){
  firebase.database().ref("news/main").get().then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById("header1").innerHTML += `
        ${data.header}
        `
        document.getElementById("textarea").innerHTML += `
        ${data.text}
        `
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}
// Upload logo
function uploadLogo(url) {
  var ref = firebase.storage().ref();
  var file1 = document.querySelector("#upLogo").files[0];
  var name1 = +new Date() + "-" + file1.name;
  const metadata = {
    contentType: file1.type
  };
  const task = ref.child(name1).put(file1, metadata);
  console.log(name1)
  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(downloadURL => {
    console.log(downloadURL);
    LogoSaveURLtoRealtimDB(downloadURL)
    alert("Uploaded")
  });

  task.on('state-changed', (snapshot)=>{
    var progess = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    LogoProglab.innerHTML = "Upload"+ progess +"%";
  })
}

function LogoSaveURLtoRealtimDB(URL){
  firebase.database().ref("news/main/photo/logo").update({
    LogoUrl: URL
  })
};
function LogoGetUrlfromRealtimDB(){ 
  firebase.database().ref("news/main/photo/logo").get().then((snapshot) => {
    if (snapshot.exists()) {
      loggo.src = snapshot.val().LogoUrl;
      }
    })
  }

// Service

function writeDataServis() {
  hheader=document.getElementById('header_Servis1');
  ttext=document.getElementById('text_Servis1'); 
  header1=hheader.value;
  text1=ttext.value;

  hheader=document.getElementById('header_Servis2');
  ttext=document.getElementById('text_Servis2'); 
  header2=hheader.value;
  text2=ttext.value;

  hheader=document.getElementById('header_Servis3');
  ttext=document.getElementById('text_Servis3'); 
  header3=hheader.value;
  text3=ttext.value;

  hheader=document.getElementById('header_Servis4');
  ttext=document.getElementById('text_Servis4'); 
  header4=hheader.value;
  text4=ttext.value;

  hheader=document.getElementById('header_Servis5');
  ttext=document.getElementById('text_Servis5'); 
  header5=hheader.value;
  text5=ttext.value;

  hheader=document.getElementById('header_Servis6');
  ttext=document.getElementById('text_Servis6'); 
  header6=hheader.value;
  text6=ttext.value;

  firebase.database().ref("news/service").update({
    header_Servis1: header1,
    text_Servis1: text1,
    header_Servis2: header2,
    text_Servis2: text2,
    header_Servis3: header3,
    text_Servis3: text3,
    header_Servis4: header4,
    text_Servis4: text4,
    header_Servis5: header5,
    text_Servis5: text5,
    header_Servis6: header6,
    text_Servis6: text6,
  });
  alert("Updated!")
}

function readDataServis(){
  firebase.database().ref("news/service").get().then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById("header_servis1").innerHTML += `
        ${data.header_Servis1}
        `
        document.getElementById("text_servis1").innerHTML += `
        ${data.text_Servis1}
        `
      document.getElementById("header_servis2").innerHTML += `
        ${data.header_Servis2}
        `
        document.getElementById("text_servis2").innerHTML += `
        ${data.text_Servis2}
        `
      document.getElementById("header_servis3").innerHTML += `
        ${data.header_Servis3}
        `
        document.getElementById("text_servis3").innerHTML += `
        ${data.text_Servis3}
        `
      document.getElementById("header_servis4").innerHTML += `
        ${data.header_Servis4}
        `
        document.getElementById("text_servis4").innerHTML += `
        ${data.text_Servis4}
        `
      document.getElementById("header_servis5").innerHTML += `
        ${data.header_Servis5}
        `
        document.getElementById("text_servis5").innerHTML += `
        ${data.text_Servis5}
        `
      document.getElementById("header_servis6").innerHTML += `
        ${data.header_Servis6}
        `
        document.getElementById("text_servis6").innerHTML += `
        ${data.text_Servis6}
        `
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function writeDataNavbar() {
  name1=document.getElementById('editNameite');
  nameSite=name1.value;

  firebase.database().ref("news/main").update({
    name_Site: nameSite,
  });
  alert("Updated!")
}

function readDataNavbar(){
  firebase.database().ref("news/main").get().then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById("nameSite").innerHTML += `
        ${data.name_Site}
        `
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

// About company: show/upload image, icons. Change text, headers
function uploadImageAndIcons(url) {
  ref = firebase.storage().ref();
  file1 = document.querySelector("#okomp_file").files[0];
  name1 = +new Date() + "-" + file1.name;
  const metadata = {
    contentType: file1.type
  };
  const task = ref.child(name1).put(file1, metadata);
  alert("Uploaded")
  console.log(name1)
  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(downloadURL => {
    console.log(downloadURL);
    OkompSaveURLtoRealtimDB(downloadURL)
  });

  task.on('state-changed', (snapshot)=>{
    var progess = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    OcompProglab.innerHTML = "Upload"+ progess +"%";
  })
}

function OkompSaveURLtoRealtimDB(URL){
  firebase.database().ref("news/Aboutcompany/logo_aboutcompany").update({
      LogoUrl: URL
  });
};
function OkompGetUrlfromRealtimDB(){ 
  firebase.database().ref("news/Aboutcompany/logo_aboutcompany").get().then((snapshot) => {
    if (snapshot.exists()) {
      logo_okomp.src = snapshot.val().LogoUrl;
      }
    })
  }
  function writeDataAboutcomp() {

    header=document.getElementById('header_company');
    header=header.value;
    hheader=document.getElementById('header_aboutcomp1');
    hheader_1=hheader.value;
    hheader=document.getElementById('header_aboutcomp2');
    hheader_2=hheader.value;
    hheader=document.getElementById('header_aboutcomp3');
    hheader_3=hheader.value;
  
    text=document.getElementById('text_company');
    text=text.value;
    ttext=document.getElementById('text_aboutcomp1');
    ttext_1=ttext.value;
    ttext=document.getElementById('text_aboutcomp2');
    ttext_2=ttext.value;
    ttext=document.getElementById('text_aboutcomp3');
    ttext_3=ttext.value;
  
    firebase.database().ref("news/Aboutcompany").update({
      header: header,
      text: text,
      header_1: hheader_1,
      text_1: ttext_1,
      header_2: hheader_2,
      text_2: ttext_2,
      header_3: hheader_3,
      text_3: ttext_3

    });
    alert("Updated!")
  }
  function readDataAboutcomp(){
    firebase.database().ref("news/Aboutcompany").get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        document.getElementById("header_company").innerHTML += `
        ${data.header}
        `
        document.getElementById("textarea_company").innerHTML += `
        ${data.text}
        `
        document.getElementById("indexHeader_aboutcomp1").innerHTML += `
        ${data.header_1}
        `
        document.getElementById("indexText_aboutcomp1").innerHTML += `
        ${data.text_1}
        `
        document.getElementById("indexHeader_aboutcomp2").innerHTML += `
        ${data.header_2}
        `
        document.getElementById("indexText_aboutcomp2").innerHTML += `
        ${data.text_2}
        `
        document.getElementById("indexHeader_aboutcomp3").innerHTML += `
        ${data.header_3}
        `
        document.getElementById("indexText_aboutcomp3").innerHTML += `
        ${data.text_3}
        `
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  function uploadIcons1(url) {
    ref = firebase.storage().ref();
    file1 = document.querySelector("#uploadIcon1_company").files[0];
    name1 = +new Date() + "-" + file1.name;
    const metadata = {
      contentType: file1.type
    };
    const task = ref.child(name1).put(file1, metadata);
    alert("Uploaded")
    console.log(name1)
    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(downloadURL => {
      console.log(downloadURL);
      Icon1SaveURLtoRealtimDB(downloadURL)
    });
  
    task.on('state-changed', (snapshot)=>{
      var progess = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
      progress_icon1.innerHTML = "Upload"+ progess +"%";
    })
  }
  function Icon1SaveURLtoRealtimDB(URL){
    firebase.database().ref("news/Aboutcompany/ICONS").update({
        ICON1Url: URL
    });
  };
  function Icon1GetUrlfromRealtimDB(){ 
    firebase.database().ref("news/Aboutcompany/ICONS").get().then((snapshot) => {
      if (snapshot.exists()) {
        aboutcomp_icon1.src = snapshot.val().ICON1Url;
        }
      })
    }
  function uploadIcons2(url) {
    ref = firebase.storage().ref();
    file1 = document.querySelector("#uploadIcon2_company").files[0];
    name1 = +new Date() + "-" + file1.name;
    const metadata = {
      contentType: file1.type
    };
    const task = ref.child(name1).put(file1, metadata);
    alert("Uploaded")
    console.log(name1)
    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(downloadURL => {
      console.log(downloadURL);
      Icon2SaveURLtoRealtimDB(downloadURL)
    });
  
    task.on('state-changed', (snapshot)=>{
      var progess = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
      progress_icon2.innerHTML = "Upload "+ progess +"%";
    })
  }
  
  function Icon2SaveURLtoRealtimDB(URL){
    firebase.database().ref("news/Aboutcompany/ICONS").update({
        ICON2Url: URL
    });
  };
  function Icon2GetUrlfromRealtimDB(){ 
    firebase.database().ref("news/Aboutcompany/ICONS").get().then((snapshot) => {
      if (snapshot.exists()) {
        aboutcomp_icon2.src = snapshot.val().ICON2Url;
        }
      })
    }

    function uploadIcons3(url) {
      ref = firebase.storage().ref();
      file1 = document.querySelector("#uploadIcon3_company").files[0];
      name1 = +new Date() + "-" + file1.name;
      const metadata = {
        contentType: file1.type
      };
      const task = ref.child(name1).put(file1, metadata);
      alert("Uploaded")
      console.log(name1)
      task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(downloadURL => {
        console.log(downloadURL);
        Icon3SaveURLtoRealtimDB(downloadURL)
      });
    
      task.on('state-changed', (snapshot)=>{
        var progess = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        progress_icon3.innerHTML = "Upload "+ progess +"%";
      })
    }
    
    function Icon3SaveURLtoRealtimDB(URL){
      firebase.database().ref("news/Aboutcompany/ICONS").update({
          ICON3Url: URL
      });
    };
    function Icon3GetUrlfromRealtimDB(){ 
      firebase.database().ref("news/Aboutcompany/ICONS").get().then((snapshot) => {
        if (snapshot.exists()) {
          aboutcomp_icon3.src = snapshot.val().ICON3Url;
          }
        })
      }

//                                                      attraction block
function readDataAttraction(){
  firebase.database().ref("news/Attraction").get().then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById("indexHeader_attraction").innerHTML += `
      ${data.header}
      `
      document.getElementById("indexText_attraction").innerHTML += `
      ${data.text}
      `
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}
function writeDataAttraction() {
  
  header=document.getElementById('header_attract');
  header=header.value;


  text=document.getElementById('text_attract');
  text=text.value;


  firebase.database().ref("news/Attraction").update({
    header: header,
    text: text

  });
  alert("Updated!")
}
// contacts block
function writeDataContact() {

  hheader=document.getElementById('header_contact1');
  hheader_1=hheader.value;
  hheader=document.getElementById('header_contact2');
  hheader_2=hheader.value;
  hheader=document.getElementById('header_contact3');
  hheader_3=hheader.value;

  ttext=document.getElementById('text_contact1');
  ttext_1=ttext.value;

  textAdd1=document.getElementById('text_contactAdditional1');
  textDopolnenine1=textAdd1.value;

  ttext=document.getElementById('text_contact2');
  ttext_2=ttext.value;

  ttext=document.getElementById('text_contact3');
  ttext_3=ttext.value;

  textAdd2=document.getElementById('text_contactAdditional2');
  textDopolnenine2=textAdd2.value;


  firebase.database().ref("news/Contact").update({
    header_1: hheader_1,

    text_1: ttext_1,

    text1_2: textDopolnenine1,

    header_2: hheader_2,

    text_2: ttext_2,

    header_3: hheader_3,

    text_3: ttext_3,

    text3_3: textDopolnenine2

  });
  alert("Updated!")
}

function readDataContact1(){
  firebase.database().ref("news/Contact").get().then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById("indexHeader_contact1").innerHTML += `
      ${data.header_1}
      `
      document.getElementById("indexText_contact1").innerHTML += `
      ${data.text_1}
      `
      document.getElementById("indexText_contact1_2").innerHTML += `
      ${data.text1_2}
      `
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function readDataContact2(){
  firebase.database().ref("news/Contact").get().then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById("indexHeader_contact2").innerHTML += `
      ${data.header_2}
      `
      document.getElementById("indexText_contact2").innerHTML += `
      ${data.text_2}
      `
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}
function readDataContact3(){
  firebase.database().ref("news/Contact").get().then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById("indexHeader_contact3").innerHTML += `
      ${data.header_3}
      `
      document.getElementById("indexText_contact3").innerHTML += `
      ${data.text_3}
      `
      document.getElementById("indexText_contact3_1").innerHTML += `
      ${data.text3_3}
      `
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function uploadIconContact1(url) {
  ref = firebase.storage().ref();
  file1 = document.querySelector("#icon_contact1").files[0];
  name1 = +new Date() + "-" + file1.name;
  const metadata = {
    contentType: file1.type
  };
  const task = ref.child(name1).put(file1, metadata);
  alert("Uploaded")
  console.log(name1)
  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(downloadURL => {
    console.log(downloadURL);
    Contact1SaveURLtoRealtimDB(downloadURL)
  });

  task.on('state-changed', (snapshot)=>{
    var progess = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    progress_review.innerHTML = "Upload "+ progess +"%";
  })
}

function Contact1SaveURLtoRealtimDB(URL){
  firebase.database().ref("news/Contact").update({
    IconURL1: URL
  });
};
function Contact1GetUrlfromRealtimDB(){ 
  firebase.database().ref("news/Contact").get().then((snapshot) => {
    if (snapshot.exists()) {
      IconContact1.src = snapshot.val().IconURL1;
    }
  })
}
function uploadIconContact2(url) {
  ref = firebase.storage().ref();
  file1 = document.querySelector("#icon_contact2").files[0];
  name1 = +new Date() + "-" + file1.name;
  const metadata = {
    contentType: file1.type
  };
  const task = ref.child(name1).put(file1, metadata);
  alert("Uploaded")
  console.log(name1)
  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(downloadURL => {
    console.log(downloadURL);
    Contact2SaveURLtoRealtimDB(downloadURL)
  });
  
  task.on('state-changed', (snapshot)=>{
    var progess = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    progress_review.innerHTML = "Upload "+ progess +"%";
  })
}

function Contact2SaveURLtoRealtimDB(URL){
  firebase.database().ref("news/Contact").update({
    IconURL2: URL
  });
};
function Contact2GetUrlfromRealtimDB(){ 
  firebase.database().ref("news/Contact").get().then((snapshot) => {
    if (snapshot.exists()) {
      IconContact2.src = snapshot.val().IconURL2;
    }
  })
}
function uploadIconContact3(url) {
  ref = firebase.storage().ref();
  file1 = document.querySelector("#icon_contact3").files[0];
  name1 = +new Date() + "-" + file1.name;
  const metadata = {
    contentType: file1.type
  };
  const task = ref.child(name1).put(file1, metadata);
  alert("Uploaded")
  console.log(name1)
  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(downloadURL => {
    console.log(downloadURL);
    Contact3SaveURLtoRealtimDB(downloadURL)
  });
  
  task.on('state-changed', (snapshot)=>{
    var progess = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    progress_review.innerHTML = "Upload "+ progess +"%";
  })
}

function Contact3SaveURLtoRealtimDB(URL){
  firebase.database().ref("news/Contact").update({
    IconURL3: URL
  });
};
function Contact3GetUrlfromRealtimDB(){ 
  firebase.database().ref("news/Contact").get().then((snapshot) => {
    if (snapshot.exists()) {
      IconContact3.src = snapshot.val().IconURL3;
    }
  })
}
//                                                          portfolio
function uploadPhotoSlider() {
  ref = firebase.storage().ref();
  file1 = document.querySelector("#portoflios").files[0];
  name1 = +new Date() + "-" + file1.name;
  const metadata = {
    contentType: file1.type
  };
  const task = ref.child(name1).put(file1, metadata);
  alert("Uploaded")
  console.log(name1)
  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(downloadURL => {
    console.log(downloadURL);
    PortfolioSaveURLtoRealtimDB(downloadURL)
  });
  
  task.on('state-changed', (snapshot)=>{
    var progess = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    progress_review.innerHTML = "Upload "+ progess +"%";
  })
}

function PortfolioSaveURLtoRealtimDB(URL){
  
  firebase.database().ref("news/Portfolio").push({
    PhotoURL: URL
  });
};



function readSlider(){
  firebase.database().ref("news/Portfolio").once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      var childKey = childSnapshot.key;
      if (snapshot.exists()) {
        var starCountRef = firebase.database().ref('news/Portfolio/' + childKey );
        starCountRef.on('value', (snapshot) => {
          const data = snapshot.val();
          var ele = `
          <div class="slide_2">
              <div>
                  <img style="width:100%; height:100%;" src="${data.PhotoURL}" alt="">
              </div>
          </div> `
          $('.slider_2').slick('slickAdd', ele);
        });
      }else {
        console.log("No data available");
      }
    });
  });
}
function deleteSlide(){
  firebase.database().ref("news/Portfolio/").once('value', (snapshot) => {
    var mas = []
    snapshot.forEach((childSnapshot) => {
      var childKey = childSnapshot.key
      mas=[childKey]
    })
    firebase.database().ref("news/Portfolio/").child(mas[0]).remove()
    $('.slider_2').slick('slickRemove', 0);
    alert('Deleted!')
  })
}

//                                               review block
function uploadReview(url) {
  ref = firebase.storage().ref();
  file1 = document.querySelector("#photo_review").files[0];
  name1 = +new Date() + "-" + file1.name;
  const metadata = {
    contentType: file1.type
  };
  const task = ref.child(name1).put(file1, metadata);
  alert("Uploaded")
  console.log(name1)
  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(downloadURL => {
    console.log(downloadURL);
    ReviewSaveURLtoRealtimDB(downloadURL)
  });

  header=document.getElementById('name_review');
  header=header.value;


  text=document.getElementById('comment_review');
  text=text.value;

  task.on('state-changed', (snapshot)=>{
    var progess = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    progress_review.innerHTML = "Upload "+ progess +"%";
  })
}

function ReviewSaveURLtoRealtimDB(URL){
  firebase.database().ref("news/Review").push({
      name: header,
      comment: text,
      PhotoURL: URL
  });
};

function writeDataReview() {

  header=document.getElementById('name_review');
  header=header.value;


  text=document.getElementById('comment_review');
  text=text.value;


  firebase.database().ref("news/Review").push({
    name: header,
    comment: text

  });
  alert("Updated!")
}
function readSliderReview(){
  firebase.database().ref("news/Review").once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      var childKey = childSnapshot.key;
      if (snapshot.exists()) {
        var starCountRef = firebase.database().ref('news/Review/' + childKey );
        starCountRef.on('value', (snapshot) => {
          const data = snapshot.val();
          var ele = `
          <div class="slide">
                            <div>
                                <img src="${data.PhotoURL}" alt="">
                                <h3>${data.name}</h3>
                                <h4>${data.comment}</h4>
                            </div>
                        </div>`
          $('.slider').slick('slickAdd',ele);
        });
      }else {
        console.log("No data available");
      }
    });
  });
}
