var firebaseConfig = {
  apiKey: "AIzaSyAL7zQeKCnLDwmnc4uccGby--s-87dITKM",
  authDomain: "lets-chat-web-app-a99f5.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-a99f5-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-a99f5",
  storageBucket: "lets-chat-web-app-a99f5.appspot.com",
  messagingSenderId: "542581719888",
  appId: "1:542581719888:web:32297cdace69c04a18e255"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"


function addRoom()
{
   room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
       purpose: "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html"
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location("index.html");

}


