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

            $("button#park").on("click", function() {
                var country = $("#input1").val().trim();
                var city = $("#input2").val().trim();

                db.collection("ParkLocation").add({
                    country: country,
                    city: city

                });
                return false;
            });

            const parkName = document.querySelector('#user');

            function renderName(doc) {
                let li = document.createElement('li');
                let country = document.createElement('span');
                let city = document.createElement('span');

                li.setAttribute("data-id", doc.id);
                country.textContent = doc.data().country;
                city.textContent = doc.data().city;
                

                li.appendChild(country);
                li.appendChild(city);
                
                parkName.appendChild(li);
            }

            db.collection("ParkLocation").get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    renderName(doc);
                })
            })






        });
