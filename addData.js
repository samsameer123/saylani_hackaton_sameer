var selectedFile;
var dishName;
var restName;
var dishPrice


const foorm =document.getElementById('foorm')
foorm.addEventListener('submit', (e)=>{
    e.preventDefault()

     dishName = foorm['dish_name'].value;
     restName = foorm['rest_name'].value;
     dishPrice = foorm['dish_price'].value;
   
})
document.getElementById("file").addEventListener('change',(e)=>{
    
    selectedFile= e.target.files[0];
   console.log(selectedFile)
});
function uploadFile(){
    var filename= selectedFile.name;

    var storageRef = firebase.storage().ref('/food/' + filename);
    var uploadTask = storageRef.put(selectedFile);
    console.log(uploadTask)
    

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      firebase.auth().onAuthStateChanged((user) => {
        var uid;
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
          uid = 001
        }
       
        
        
        
       
        var postKey = firebase.database().ref('posts/').push().key
        var updates={}
        var postData = {
            url:downloadURL,
            name: dishName,
            rest: restName,
            price:dishPrice,
            user:uid
        };
        updates['/posts/'+postKey]=postData;
        firebase.database().ref().update(updates)
        
      });
      setTimeout(function(){ 
          
        alert('Upload Successfully')
      window.location= 'ordernow.html';
     }, 3000);
    });


  }
);

}
