const headerhtmllogout ='<a class="button active" href="login.html">Create Account</a><a class="button" href="signin.html">Sign In</a>'
const headerhtmllogin = '  <button class="button" onclick="logout()" >Logout</button>'

// check user
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.email;
        console.log(uid)
  
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
   document.getElementById('listing').innerHTML= headerhtmllogin
   document.getElementById('username').innerText = 'Hi '+ uid

     
      // ...
    } else {
      // User is signed out
      // ...
   document.getElementById('listing').innerHTML= headerhtmllogout
    }
  });
  
    
function logout(){
    alert('byebye')
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        alert('Logout successfully')
         window.location= 'login.html';
      }).catch((error) => {
        // An error happened.
      });
   
 

}
