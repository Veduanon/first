var auth = firebase.auth();
function sendEmail(){
    email=document.getElementById('typeEmail').value;
}
var emailAddress = "email";
auth.sendPasswordResetEmail(emailAddress)
.then(function() {  
    alert('email sent')
})
.catch(function(error) {
    alert("an error happend")
});