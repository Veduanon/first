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
var storage = firebase.storage();

// general
function gener(){
  firebase.database().ref("news/main").get().then((snapshot) => {
      const data = snapshot.val();
      document.getElementById("nameSite").innerHTML += `
      ${data.name_Site}
      `
      document.querySelector(".header_content").innerHTML+=`
      <h1 id="header1" class="header_text_1">
      ${data.header}     
      </h1>
      <div id="textarea" class="header_text_2">
      ${data.text}     
      </div>
      `
  });
  firebase.database().ref("news/main/photo/logo").get().then((snapshot) => {
    if (snapshot.exists()) {
      loggo1.src = snapshot.val().LogoUrl;
      }
    });

    firebase.database().ref("news/service").get().then((snapshot) => {
        const data = snapshot.val();
        document.querySelector(".squares_2").innerHTML+=`
        <div class="square_2">
                        <div>
                            <h2 id="header_servis1">
                            ${data.header1}
                            </h2>
                            <span id="text_servis1">
                            ${data.text1}
                            </span>
                        </div>
                        
                        <button class="button">Посчитать цену</button>
                    </div>
                    <div class="square_2">
                        <div>
                            <h2 id="header_servis2">
                            ${data.header2}
                            </h2>
                            <span id="text_servis2">
                            ${data.text2}
                            </span>
                        </div>

                        <button class="button_test">Посчитать цену</button>
                    </div>

                    <div class="square_2">
                        <div>
                            <h2 id="header_servis3">
                            ${data.header3}
                            </h2>
                            <span id="text_servis3">
                            ${data.text3}
                            </span>
                        </div>
                        

                        <button class="button_test">Посчитать цену</button>
                    </div>

                    <div class="square_2">
                        <div>
                            <h2 id="header_servis4">
                            ${data.header4}
                            </h2>
                            <span id="text_servis4">
                            ${data.text4}
                            </span>
                        </div>
                        

                        <button class="button_test">Посчитать цену</button>
                    </div>
                    <div class="square_2">
                        <div>
                            <h2 id="header_servis5">
                            ${data.header5}
                            </h2>
                            <span id="text_servis5">
                            ${data.text5}
                            </span>
                        </div>
                        
                        <button class="button_test">Посчитать цену</button>
                    </div>
                    <div class="square_2">
                        <div>
                            <h2 id="header_servis6">
                            ${data.header6}
                            </h2>
                            <span id="text_servis6">
                            ${data.text6}
                            </span>
                        </div>

                        <button class="button_test">Посчитать цену</button>
                    </div>
        `
    })
        firebase.database().ref("news/Aboutcompany/logo_aboutcompany").get().then((snapshot) => {
            logo_okomp.src = snapshot.val().LogoUrl;
          })

          firebase.database().ref("news/Portfolio").once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              var childKey = childSnapshot.key;
                var starCountRef = firebase.database().ref('news/Portfolio/' + childKey );
                starCountRef.on('value', (snapshot) => {
                  const data = snapshot.val();
                  var ele = `
                  <div id=slide_2 class="slide_2">
                      <div>
                          <img style="width:100%; height:100%;" src="${data.PhotoURL}" alt="">
                      </div>
                  </div> `
                  $('.slider_2').slick('slickAdd', ele);
                });
            })
          });
          
          firebase.database().ref("news/Contact").get().then((snapshot) => {
            const data = snapshot.val();
            document.querySelector(".section_6").innerHTML+=`
            <div class="section_6_1">
                    <div id="square footer_square_1" class="square footer_square_1">
                        <h3 id="indexHeader_contact1">${data.header_1}</h3>
                        <img id="IconContact1" src="${data.IconURL1}" alt="" style="height: 50px; width: 50px;">
                        <a id="makeHref1">
                            <span id="indexText_contact1" class="section_6_span1">${data.text_1}</span>
                        </a>
                        <a id="makeHref4">
                            <span id="indexText_contact1_2" class="section_6_span1">${data.text_Dopolnenie1}</span>
                        </a>
                    </div>
                    <div class="square footer_square_1">
                        <img id="IconContact2" src="${data.IconURL2}" alt="" style="height: 50px; width: 50px;">
                        <h3 id="indexHeader_contact2">${data.header_2}</h3>
                        <a id="makeHref2">
                            <span id="indexText_contact2" class="section_6_span3">${data.text_2}</span>
                        </a>
                        <a id="makeHref5">
                            <span id="indexText_contact2_1" class="section_6_span3">${data.text_Dopolnenie2}</span>
                        </a>
                    </div>
                    <div class="square footer_square">
                        <h3 id="indexHeader_contact3">${data.header_3}</h3>
                        <img id="IconContact3" src="${data.IconURL3}" alt="" style="height: 50px; width: 50px;">
                        <a id="makeHref3">
                            <span id="indexText_contact3">${data.text_3}</span>
                        </a>
                        <a id="makeHref6">
                            <span id="indexText_contact3_1" class="section_6_span1">${data.text_Dopolnenie3}</span>
                        </a>
                    </div> 
                </div>
            `
            
              for(let i = (0+1); i<=6; i++){
                if(data["boolean"+i]=="true"){
                  document.getElementById("makeHref"+i).setAttribute("href", data["text_Ssilka"+i])
                }
              }
               
              });
              
              firebase.database().ref("news/Aboutcompany").get().then((snapshot) => {
                if (snapshot.exists()) {
                  const data = snapshot.val();
                  document.querySelector(".section_3").innerHTML+=`
                  <div class="container">
                  <div class="section_3_1">
                  <h2 id="indexHeader_attraction">${data.header}</h2>
                  <span id="indexText_attraction">${data.text}</span>
                  </div>
                  </div>
            `
                }
                })
            firebase.database().ref("news/Aboutcompany").get().then((snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.val();
                document.getElementById("header_company").innerHTML += `
                ${data.title}
                `
                document.getElementById("textarea_company").innerHTML += `
                ${data.text}
                `
                document.getElementById("indexHeader_aboutcomp1").innerHTML += `
                ${data.title1}
                `
                document.getElementById("indexText_aboutcomp1").innerHTML += `
                ${data.text1}
                `
                document.getElementById("indexHeader_aboutcomp2").innerHTML += `
                ${data.title2}
                `
                document.getElementById("indexText_aboutcomp2").innerHTML += `
                ${data.text2}
                `
                document.getElementById("indexHeader_aboutcomp3").innerHTML += `
                ${data.title3}
                `
                document.getElementById("indexText_aboutcomp3").innerHTML += `
                ${data.text3}
                `
              }
            });
            firebase.database().ref("news/Aboutcompany/ICONS").once('value', (snapshot) => {
              var mas = []
              snapshot.forEach(snapshot => {
                var dataa = snapshot.val();
                mas=[dataa]
                
              });
              console.log(mas[0])
              aboutcomp_icon1.src = snapshot.val().ICON1Url+mas[0];
              aboutcomp_icon2.src = snapshot.val().ICON2Url+mas[1];
              aboutcomp_icon3.src = snapshot.val().ICON3Url+mas[2];
            })
          
          firebase.database().ref("news/Review").once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              var childKey = childSnapshot.key;
              try{
              if (snapshot.exists()) {
                var starCountRef = firebase.database().ref('news/Review/' + childKey );
                starCountRef.on('value', (snapshot) => {
                  const data = snapshot.val();
                  var ele = `

                  <div id="slide1" class="slide">
                    <div>
                        <img src="${data.PhotoURL}" alt="">
                        <h3>${data.name}</h3>
                        <p>${data.comment}</p>
                    </div>
                  </div>`
                  $('.slider').slick('slickAdd',ele);
                });
              }
            }catch(e){}
          });
          });
        }
// Get a admin's profile

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      const email = user.email;
      document.getElementById("name").innerHTML += `
         <h5>${user.email}</h5>
         <h5>Admin</h5>
         `
  }
});
// write Data main
function writeDataMain(header, text) {
  header=document.getElementById('header_admin');
  text=document.getElementById('text'); 
  header=header.value;
  text=text.value;
  firebase.database().ref("news/main").update({
    header: header,
    text: text
  });
}
firebase.database().ref("news/main").on('value', (sanpshot) => {

  header = sanpshot.val().header;

  text = sanpshot.val().text;

  document.getElementById("header_admin").setAttribute("value", header)

  
  document.getElementById("text").innerHTML=text


})
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
    firebase.database().ref("news/main/photo/logo").get().then((snapshot) => {
      if (snapshot.exists()) {
        var dataa = snapshot.val();
        document.getElementById("noneLogo").innerHTML=
        `<img style="max-width:50px;" src="${dataa.LogoUrl}">`
        }
      });
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
firebase.database().ref("news/main/photo/logo").get().then((snapshot) => {
  if (snapshot.exists()) {
    LogoShow.src = snapshot.val().LogoUrl;
    }
  });
function deleteLogo(){
  firebase.database().ref("news/main/photo/logo").remove()
  document.getElementById("noneLogo").innerHTML=''
  }
// Service
firebase.database().ref("news/service").on('value', (sanpshot) => {
  header1 = sanpshot.val().header1;
  header2 = sanpshot.val().header2;
  header3 = sanpshot.val().header3;
  header4 = sanpshot.val().header4;
  header5 = sanpshot.val().header5;
  header6 = sanpshot.val().header6;

  text1 = sanpshot.val().text1;
  text2 = sanpshot.val().text2;
  text3 = sanpshot.val().text3;
  text4 = sanpshot.val().text4;
  text5 = sanpshot.val().text5;
  text6 = sanpshot.val().text6;

  document.getElementById("header_Servis1").setAttribute("value", header1)
  document.getElementById("header_Servis2").setAttribute("value", header2)
  document.getElementById("header_Servis3").setAttribute("value", header3)
  document.getElementById("header_Servis4").setAttribute("value", header4)
  document.getElementById("header_Servis5").setAttribute("value", header5)
  document.getElementById("header_Servis6").setAttribute("value", header6)
  
  document.getElementById("text_Servis1").innerHTML=text1
  document.getElementById("text_Servis2").innerHTML=text2
  document.getElementById("text_Servis3").innerHTML=text3
  document.getElementById("text_Servis4").innerHTML=text4
  document.getElementById("text_Servis5").innerHTML=text5
  document.getElementById("text_Servis6").innerHTML=text6

})
function writeDataServis() {
  hheader=document.getElementById('header_Servis1');
  ttext=document.getElementById('text_Servis1'); 


  var header1 = document.getElementById("header_Servis1").value;
  var text1 = document.getElementById("text_Servis1").value;

  var header2 = document.getElementById("header_Servis2").value;
  var text2 = document.getElementById("text_Servis2").value;

  var header3 = document.getElementById("header_Servis3").value;
  var text3 = document.getElementById("text_Servis3").value;

  var header4 = document.getElementById("header_Servis4").value;
  var text4 = document.getElementById("text_Servis4").value;

  var header5 = document.getElementById("header_Servis5").value;
  var text5 = document.getElementById("text_Servis5").value;
  
  var header6 = document.getElementById("header_Servis6").value;
  var text6 = document.getElementById("text_Servis6").value;

      var updates = { header1: header1, header2: header2, header3: header3, header4: header4, header5: header5, header6: header6 };
      firebase.database().ref("news/service").update(updates);

      var updates = { text1: text1, text2: text2, text3: text3, text4: text4, text5: text5, text6: text6 };
      firebase.database().ref("news/service").update(updates);
  alert("Updated!")
}


function writeDataNavbar() {
  name1=document.getElementById('editNameite');
  nameSite=name1.value;

  firebase.database().ref("news/main").update({
    name_Site: nameSite,
  });
  alert("Updated!")
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

firebase.database().ref("news/Aboutcompany").on('value', (sanpshot) => {

      title = sanpshot.val().title;
      title1 = sanpshot.val().title1;
      title2 = sanpshot.val().title2;
      title3 = sanpshot.val().title3;

      text = sanpshot.val().text;
      text1 = sanpshot.val().text1;
      text2 = sanpshot.val().text2;
      text3 = sanpshot.val().text3;
      document.getElementById("header_company").setAttribute("value", title)
      document.getElementById("header_aboutcomp1").setAttribute("value", title1)
      document.getElementById("header_aboutcomp2").setAttribute("value", title2)
      document.getElementById("header_aboutcomp3").setAttribute("value", title3)
      
      document.getElementById("text_company").innerHTML=text
      document.getElementById("text_aboutcomp1").setAttribute("value", text1)
      document.getElementById("text_aboutcomp2").setAttribute("value", text2)
      document.getElementById("text_aboutcomp3").setAttribute("value", text3)
  })
function writeDataAboutcomp() {

    var title = document.getElementById("header_company").value;
    var text = document.getElementById("text_company").value;

    var title1 = document.getElementById("header_aboutcomp1").value;
    var text1 = document.getElementById("text_aboutcomp1").value;

    var title2 = document.getElementById("header_aboutcomp2").value;
    var text2 = document.getElementById("text_aboutcomp2").value;

    var title3 = document.getElementById("header_aboutcomp3").value;
    var text3 = document.getElementById("text_aboutcomp3").value;

        var updates = { title: title, title1: title1, title2: title2, title3: title3 };
        firebase.database().ref("news/Aboutcompany").update(updates);

        var updates = { text: text, text1: text1, text2: text2, text3: text3 };
        firebase.database().ref("news/Aboutcompany").update(updates);
  };

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

// END!!! About company: show/upload image, icons. Change text, headers

//                                                      attraction block
firebase.database().ref("news/Attraction").on('value', (sanpshot) => {

  header = sanpshot.val().header;

  text = sanpshot.val().text;

  document.getElementById("header_attract").setAttribute("value", header)

  document.getElementById("text_attract").innerHTML=text
})
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
firebase.database().ref("news/Contact").on('value', (sanpshot) => {

  header_1 = sanpshot.val().header_1;
  header_2 = sanpshot.val().header_2;
  header_3 = sanpshot.val().header_3;

  text_1 = sanpshot.val().text_1;
  text_2 = sanpshot.val().text_2;
  text_3 = sanpshot.val().text_3;
  text_Dopolnenie1 = sanpshot.val().text_Dopolnenie1;
  text_Dopolnenie2 = sanpshot.val().text_Dopolnenie2;
  text_Dopolnenie3 = sanpshot.val().text_Dopolnenie3;

  text_contactSsilka1 = sanpshot.val().text_Ssilka1;
  text_contactSsilka2 = sanpshot.val().text_Ssilka2;
  text_contactSsilka3 = sanpshot.val().text_Ssilka3;
  text_contactSsilka4 = sanpshot.val().text_Ssilka4;
  text_contactSsilka5 = sanpshot.val().text_Ssilka5;
  text_contactSsilka6 = sanpshot.val().text_Ssilka6;

  document.getElementById("header_contact1").setAttribute("value", header_1)
  document.getElementById("header_contact2").setAttribute("value", header_2)
  document.getElementById("header_contact3").setAttribute("value", header_3)
  
  document.getElementById("text_contact1").setAttribute("value", text_1)
  document.getElementById("text_contact2").setAttribute("value", text_2)
  document.getElementById("text_contact3").setAttribute("value", text_3)
  document.getElementById("text_contactAdditional1").setAttribute("value", text_Dopolnenie1)
  document.getElementById("text_contactAdditional2").setAttribute("value", text_Dopolnenie2)
  document.getElementById("text_contactAdditional3").setAttribute("value", text_Dopolnenie3)
  
  
  document.getElementById("text_contactSsilka1").setAttribute("value", text_contactSsilka1)
  document.getElementById("text_contactSsilka2").setAttribute("value", text_contactSsilka2)
  document.getElementById("text_contactSsilka3").setAttribute("value", text_contactSsilka3)
  document.getElementById("text_contactSsilka4").setAttribute("value", text_contactSsilka4)
  document.getElementById("text_contactSsilka5").setAttribute("value", text_contactSsilka5)
  document.getElementById("text_contactSsilka6").setAttribute("value", text_contactSsilka6)
})
function writeDataContact() {


  var header_1 = document.getElementById("header_contact1").value;
  var text_1 = document.getElementById("text_contact1").value;
  var text_Dopolnenie1 = document.getElementById("text_contactAdditional1").value;
  var text_Ssilka1 = document.getElementById("text_contactSsilka1").value;
  var text_Ssilka4 = document.getElementById("text_contactSsilka4").value;
  
  
  var header_2 = document.getElementById("header_contact2").value;
  var text_2 = document.getElementById("text_contact2").value;
  var text_Dopolnenie2 = document.getElementById("text_contactAdditional2").value;
  var text_Ssilka2 = document.getElementById("text_contactSsilka2").value;
  var text_Ssilka5 = document.getElementById("text_contactSsilka5").value;
  
  var header_3 = document.getElementById("header_contact3").value;
  var text_3 = document.getElementById("text_contact3").value;
  var text_Dopolnenie3 = document.getElementById("text_contactAdditional3").value;
  var text_Ssilka3 = document.getElementById("text_contactSsilka3").value;
  var text_Ssilka6 = document.getElementById("text_contactSsilka6").value;


      var updates = { header_1: header_1, header_2: header_2, header_3: header_3};
      firebase.database().ref("news/Contact").update(updates);

      var updates = { text_1: text_1, text_2: text_2, text_3: text_3, text_Dopolnenie1: text_Dopolnenie1, text_Dopolnenie2:text_Dopolnenie2, text_Dopolnenie3:text_Dopolnenie3, text_Ssilka1:text_Ssilka1, text_Ssilka2:text_Ssilka2, text_Ssilka3:text_Ssilka3, text_Ssilka4:text_Ssilka4, text_Ssilka5:text_Ssilka5, text_Ssilka6:text_Ssilka6 };
      firebase.database().ref("news/Contact").update(updates);
  alert("Updated!")
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

  firebase.database().ref("news/Portfolio").once('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    var childKey = childSnapshot.key;
    var starCountRef = firebase.database().ref('news/Portfolio/' + childKey );
    starCountRef.on('value', (snapshot) => {
      const dataa = snapshot.val();
      document.getElementById("slider").innerHTML += `
      <div style="display: flex; align-items: flex-end; border: 2px solid #11101d;">
      <img style="width:300px; height:300px;" src="${dataa.PhotoURL}"><img>
      </div>
      <div style="display: flex;
      flex-direction: row;
      justify-content: flex-end;"">
        <img onclick="deleteSlide('` + childKey + `')" style="width:20px; height:20px;" src="/source/trash-can-solid.svg"></img>
      </div>
        `
    })
  })
});

firebase.database().ref("news/Review").once('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    var childKey = childSnapshot.key;
    var starCountRef = firebase.database().ref('news/Review/' + childKey );
    starCountRef.on('value', (snapshot) => {
      const dataa = snapshot.val();
      document.getElementById("sliderReview").innerHTML +=`
      <div style="border:3px solid">
      <div id="sliderRev">
        <p> ${dataa.name}</p>
        <p> ${dataa.comment} </p>
      </div>
      <img style="width:300px; height:300px;" src="${dataa.PhotoURL}"><img>
      <img onclick="deleteSlideReview('` + childKey + `')" style="width:20px; height:20px;" src="/source/trash-can-solid.svg"></img>
      </div>
      `
    })
  })
})


function deleteSlide(key) {

  firebase.database().ref('news/Portfolio/' + key).remove();
  alert("Deleted")
}
function deleteSlideReview(key) {
  firebase.database().ref('news/Review/' + key).remove();
  alert("Deleted")
}


var c1 = document.querySelector('#checkbox1');
var c2 = document.querySelector('#checkbox2');
var c3 = document.querySelector('#checkbox3');
var c4 = document.querySelector('#checkbox4');
var c5 = document.querySelector('#checkbox5');
var c6 = document.querySelector('#checkbox6');
c1.onclick = function() {
  if (c1.checked) {
    firebase.database().ref("news/Contact").update({
      boolean1:"true"
    });
    
 }
 else(firebase.database().ref("news/Contact/boolean1").remove())
}
c2.onclick = function() {
  if (c2.checked) {
    firebase.database().ref("news/Contact").update({
      boolean2:"true"
    });
 }
 else(firebase.database().ref("news/Contact/boolean2").remove())

}
c3.onclick = function() {
  if (c3.checked) {
    firebase.database().ref("news/Contact").update({
      boolean3:"true"
    });
 }
 else(firebase.database().ref("news/Contact/boolean3").remove())

}
c4.onclick = function() {
  if (c4.checked) {
    firebase.database().ref("news/Contact").update({
      boolean4:"true"
    });
 }
 else(firebase.database().ref("news/Contact/boolean4").remove())
}
c5.onclick = function() {
  if (c5.checked) {
    firebase.database().ref("news/Contact").update({
      boolean5:"true"
    });
 }
 else(firebase.database().ref("news/Contact/boolean5").remove())

}
c6.onclick = function() {
  if (c6.checked) {
    firebase.database().ref("news/Contact").update({
      boolean6:"true"
    });
 }
 else(firebase.database().ref("news/Contact/boolean6").remove())

}
firebase.database().ref("news/Contact").once('value', (snapshot) => {
  const data = snapshot.val();
  for(let i = (0+1); i<=6; i++){
    if(data['boolean' + i] == "true"){
      document.getElementById("checkbox"+i).checked = true;
    }
  }
})