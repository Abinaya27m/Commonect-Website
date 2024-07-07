const firebaseConfig = {
    apiKey: "AIzaSyClv0BVcxQ7ZidzdeR0yyQ5Wq0eJlhAaMo",
    authDomain: "commonect-2b932.firebaseapp.com",
    projectId: "commonect-2b932",
    storageBucket: "commonect-2b932.appspot.com",
    messagingSenderId: "444726613816",
    appId: "1:444726613816:web:3d8d2531f629224abfd3cd",
    measurementId: "G-9NV7E3ET4T"
  };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    const auth = firebase.auth();
    
    // Function to handle user registration
    function UserRegister(e) {
        e.preventDefault();
        const email = document.getElementById('eemail').value;
        const password = document.getElementById('lpassword').value;
    
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Successfully Signed Up");
                window.open("index1.html", "_self");
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    
    // Function to handle user sign-in
    function SignIn(e) {
        e.preventDefault();
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;
    
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Successfully Logged In");
                window.open("index1.html", "_self");
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    
    // Event listener for sign-up form submission
    document.getElementById('signupForm').addEventListener('submit', UserRegister);
    
    // Event listener for sign-in form submission
    document.getElementById('signinForm').addEventListener('submit', SignIn);
    
    // Function to toggle forms
    function toggleForm() {
        const content01 = document.getElementById('content01');
        const content02 = document.getElementById('content02');
        content01.classList.toggle('display');
        content02.classList.toggle('display');
    }
    
    // Event listeners for toggling between sign-up and sign-in forms
    document.getElementById('login').addEventListener('click', function(e) {
        e.preventDefault();
        toggleForm();
    });
    document.getElementById('sign-up').addEventListener('click', function(e) {
        e.preventDefault();
        toggleForm();
    });