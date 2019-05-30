var firebaseConfig = {
    apiKey: "AIzaSyDDbJBz5RY5so4UoYNBIqr2nQob1ROnrKs",
    authDomain: "firmwares.github.io",
    projectId: "firmwares-github",
    appId: "1:753178353480:web:f3e862d355bd6e38"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().signInAnonymously().catch(error => {
    console.log(error)
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // User is signed in.
        var uid = user.uid;
        grecaptcha.ready(function () {
            grecaptcha.execute('6LflPKYUAAAAABzbRgT1-SC8lVMJaQzT6_iNh-sQ', { action: 'validate' }).then((token) => {
                const render = firebase.functions().httpsCallable('render')
                render({token: token}).then(result => {
                    console.log(result)
                })
            });
        });
    } else {
        // User is signed out.
        // ...
    }
});