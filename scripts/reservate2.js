       var firebaseConfig = {

            // Your API stuff goes here;  get it from firebase console
            apiKey: "AIzaSyCo2yktlgaexHr0-4k_3yjuzP9ScFnzQaA",
            authDomain: "mango-lili.firebaseapp.com",
            databaseURL: "https://mango-lili.firebaseio.com",
            projectId: "mango-lili",
            storageBucket: "mango-lili.appspot.com",
            messagingSenderId: "361883915212",
            appId: "1:361883915212:web:0cdc68dfb1d4d4f8184369",
            measurementId: "G-H4MB8KDM41"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        var database = firebase.database();
        // Create the Firestore database object
        // Henceforce, any reference to the database can be made with "db"
        const db = firebase.firestore();




    <!-- Your own JavaScript functions included here    -->


     

        $(document).ready(function() {


            $("div.main").on("submit", function(e) {
                e.preventDefault();

                alert("Your registration was successful");

            });




        });

