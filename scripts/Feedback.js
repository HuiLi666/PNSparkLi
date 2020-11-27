
       var firebaseConfig = {

            // Your API stuff goes here;  get it from firebase console
            apiKey: "AIzaSyASwCvqj3_Y7kchBbwF_RNTlfqsPh8wx4s",
            authDomain: "pnsparkli.firebaseapp.com",
            databaseURL: "https://pnsparkli.firebaseio.com",
            projectId: "pnsparkli",
            storageBucket: "pnsparkli.appspot.com",
            messagingSenderId: "976943858986",
            appId: "1:976943858986:web:e9ecdca5178a4c6a6d0a53",
            measurementId: "G-0W1HFPTQHV"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        var database = firebase.database();
        // Create the Firestore database object
        // Henceforce, any reference to the database can be made with "db"
        const db = firebase.firestore();





        $(document).ready(function() {
            var name, number, email, feedback, rate;

            $("#submit").on("click", function() {
                name = $("#name-input").val().trim();
                number = $("#number-input").val().trim();
                email = $("#email-input").val().trim();
                feedback = $("#feedback-input").val().trim();
                rate = $("#rate-input").val().trim();

                db.collection('Feedback_of_app/').add({
                    Name: name,
                    Phone_Number: number,
                    Email: email,
                    Feedback: feedback,
                    Rate: rate

                });
                return false;
            });



        });
 