
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAWl0xOEFuVnF9-9nwNtGWABoHk-9hkTe8",
      authDomain: "classtest-24702.firebaseapp.com",
      databaseURL: "https://classtest-24702-default-rtdb.firebaseio.com",
      projectId: "classtest-24702",
      storageBucket: "classtest-24702.appspot.com",
      messagingSenderId: "196644566543",
      appId: "1:196644566543:web:972c2d39f675d98824157a"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
