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
const functions = firebase.functions();
firebase.auth().signInAnonymously().catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        
        // ...
    } else {
        // User is signed out.
        // ...
    }
});

grecaptcha.ready(function () {
    grecaptcha.execute('6LflPKYUAAAAABzbRgT1-SC8lVMJaQzT6_iNh-sQ', { action: 'validate' }).then((token) => {
        var render = functions.httpsCallable('render');
        render({ token: token }).then(function (result) {
            console.log(result)
        });
    });
});
