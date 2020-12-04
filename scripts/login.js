// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// var uiConfig = {
//     callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//             // User successfully signed in.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             //------------------------------------------------------------------------------------------
//             // The code below is modified from default snippet provided by the FB documentation.
//             //
//             // If the user is a "brand new" user, then create a new "user" in your own database.
//             // Assign this user with the name and email provided.
//             // Before this works, you must enable "Firestore" from the firebase console.
//             // The Firestore rules must allow the user to write.
//             //------------------------------------------------------------------------------------------
//             var user = authResult.user;
//             if (authResult.additionalUserInfo.isNewUser) {
//                 db.collection("users").doc(user.uid).set({
//                         name: user.displayName,
//                         email: user.email
//                     }).then(function () {
//                         console.log("New user added to firestore");
//                         window.location.assign("index.html");
//                     })
//                     .catch(function (error) {
//                         console.log("Error adding new user: " + error);
//                     });
//             } else {
//                 return true;
//             }
//             return false;
//         },
//         uiShown: function () {
//             // The widget is rendered.
//             // Hide the loader.
//             document.getElementById('loader').style.display = 'none';
//         }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: 'index.html',
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         //firebase.auth.GithubAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         //firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     tosUrl: 'index.html',
//     // Privacy policy url.
//     privacyPolicyUrl: 'index.html',
//     accountChooserEnabled: false
// };
// // The start method will wait until the DOM is loaded.
// // Inject the login interface into the HTML
// ui.start('#firebaseui-auth-container', uiConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            var user = authResult.user;
            if (authResult.additionalUserInfo.isNewUser) {
                db.collection("users")
                    .doc(user.uid)
                    .set({
                        name: user.displayName,
                        email: user.email,
                    })
                    .then(function () {
                        console.log("New user added to firestore");
                        window.location.assign("index2.html");
                    })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });
            } else {
                return true;
            }
            return false;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById("loader").style.display = "none";
        },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: "popup",
    signInSuccessUrl: "index2.html",
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: "<your-tos-url>",
    // Privacy policy url.
    privacyPolicyUrl: "<your-privacy-policy-url>",
};
// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);

//         //-----------------------------------------------------
// // This function adds a listener to the form
// // When form is submitted, the values are extracted
// // and written into the database
// //------------------------------------------------------
// function addNameListener() {
//     console.log("def");
//     document.getElementById("save_a").addEventListener("click", function () {
//         // disable default form handling
//         // e.preventDefault();

//         // console.log("abc");
//         // grab what user typed
//         var firstname = document.getElementById("firstname").value;
//         var lastname = document.getElementById("lastname").value;
//         console.log(firstname);

//         db.collection("Users_info")
//             .add({ //using the add() function, auto-generated doc ID
//                 "firstname": firstname,
//                 "lastname": lastname
//             });
//     });
// }
// addNameListener();
