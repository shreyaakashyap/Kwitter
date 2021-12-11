
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAWl0xOEFuVnF9-9nwNtGWABoHk-9hkTe8",
      authDomain: "classtest-24702.firebaseapp.com",
      databaseURL: "https://classtest-24702-default-rtdb.firebaseio.com",
      projectId: "classtest-24702",
      storageBucket: "classtest-24702.appspot.com",
      messagingSenderId: "196644566543",
      appId: "1:196644566543:web:972c2d39f675d98824157a"
    };
  
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function logout(params) {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";  
}

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpouse: "adding room name"
    }) 
    localStorage.setItem("room_name",room_name);
    
    window.location = "kwitter_page.html";
      
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -", + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectTRN(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectTRN(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}