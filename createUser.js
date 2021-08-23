// authentication Create User
const signupForm = document.querySelector('#form_signup');
signupForm.addEventListener('submit',(e)=>{
  e.preventDefault()

  const email = signupForm['email'].value;
  const password = signupForm['password'].value;
  console.log(email, password)
  firebase.auth().createUserWithEmailAndPassword(email,password )

  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert('thanks')
    // console.log(user)
    window.location= 'signin.html';
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  console.log(user)

})

