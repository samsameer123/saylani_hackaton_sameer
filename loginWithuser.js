///Sign in with user

const formlogin = document.querySelector('#form_login');
formlogin.addEventListener('submit',(e)=>{
  e.preventDefault()

  const email = formlogin['mail'].value;
  const password = formlogin['password'].value;


  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert('signin successfully')
    window.location= 'dashboard.html';
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
})

