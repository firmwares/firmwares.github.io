var firebaseConfig = {
    apiKey: "AIzaSyDDbJBz5RY5so4UoYNBIqr2nQob1ROnrKs",
    authDomain: "firmwares-github.firebaseapp.com",
    databaseURL: "https://firmwares-github.firebaseio.com",
    projectId: "firmwares-github",
    storageBucket: "firmwares-github.appspot.com",
    messagingSenderId: "753178353480",
    appId: "1:753178353480:web:f3e862d355bd6e38"
};
firebase.initializeApp(firebaseConfig);
/*
var app = functions.functions().httpsCallable('app');
app({ ok: true }).then(function (result) {
    console.log(result)
}).catch(function (error) {
    // Getting the Error details.
    var code = error.code;
    var message = error.message;
    var details = error.details;
    // ...
});
*/

firebase.auth().signInAnonymously().catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        // ...
    } else {
        // User is signed out.
        // ...
    }
    console.log(isAnonymous)
    console.log(uid)
});