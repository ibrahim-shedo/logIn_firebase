  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCBpABODt3CdtUmPVrBwhGIJYe9AwrQwCU",
    authDomain: "logindata-6f3ad.firebaseapp.com",
    projectId: "logindata-6f3ad",
    storageBucket: "logindata-6f3ad.appspot.com",
    messagingSenderId: "229453181562",
    appId: "1:229453181562:web:fc9c9dc0d22813bdbec1c3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //get ref to database services
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){
   e.preventDefault();
   set(ref(db, 'user/' + document.getElementById("username").value),
   {

     username: document.getElementById("username").value,
     email: document.getElementById("email").value,
     PhoneNumber: document.getElementById("phone").value

   });
     alert("Login Sucessfull  !");
  })

