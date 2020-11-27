      var firebaseConfig = {
            apiKey: "AIzaSyAetRwL1G2t4zoYq0fjVL1ZY3dVrM_Lw1M",
            authDomain: "pnsparkli-66.firebaseapp.com",
            databaseURL: "https://pnsparkli-66.firebaseio.com",
            projectId: "pnsparkli-66",
            storageBucket: "pnsparkli-66.appspot.com",
            messagingSenderId: "1037794143098",
            appId: "1:1037794143098:web:1f2b36cec1a6143793c4c3"
        }; {
            /* Initialize Firebase */ }
        firebase.initializeApp(firebaseConfig);
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
