var firebaseConfig = {
      apiKey: "AIzaSyDOkIYKvTUEV_Sq_h0Ix4Xz2ZNZP0nt5SY",
      authDomain: "c93-practice-activity.firebaseapp.com",
      databaseURL: "https://c93-practice-activity-default-rtdb.firebaseio.com",
      projectId: "c93-practice-activity",
      storageBucket: "c93-practice-activity.appspot.com",
      messagingSenderId: "289393497916",
      appId: "1:289393497916:web:69250bc1a393a0866ab039"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}