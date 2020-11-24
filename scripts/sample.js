
//--------------------------------------------------------
// This function reads the "shops" collection from database
// Then cycles thru the collection to
//   - create a DOM element
//   - put name of shop inside DOM
//   - attach this DOM to the display area for shops (id = "shops")
//---------------------------------------------------------
function displayShops() {
    db.collection("shops") //go to the shops collection
        .get() //get whole collection
        .then(function (snap) {
            snap.forEach(function (doc) { //cycle thru collection to get docs

                var n = doc.data().name; //extract the name field
                //console.log (n);

                //create a new div, with name field, attach it to the right slot
                item = document.createElement("div");
                item.innerText = n;
                $("#shops").append(item);

            });
        })
}
displayShops();

//--------------------------------------------------
// This function gets the collection of documents from the "quotes" collection,
// cycles through each document, and creates a "div" that contains the "message"
// field inside, and appends it to the display area of the document labelled by id.
//---------------------------------------------------
function getQuotes() {
    db.collection("quotes")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var m = doc.data().message;
                var id = doc.id;
                //console.log(m);
                //console.log(id);
                $("#quotes-go-here").append("<div id='" + id + "'>" + m + "</div>");
            })
        })
}
//getQuotes();

//--------------------------------------------------
// This function gets the collection of documents from the "quotes" collection,
// cycles through each document, and creates a card. 
// 
// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class='card-body'>
//      <h5 class='card-title'>Card title</h5>
//      <p class='card-text'>Some quick example text.</p>
//      <a href='#' class='btn btn-primary'>Go somewhere</a>
//   </div>
// </div>
//
//---------------------------------------------------
function getQuotesIntoCards() {
    db.collection("quotes")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var m = doc.data().message;
                //console.log(m);
                var d1 = $("#quotes-go-here").append(
                    "<div class='card' style='width: 18rem;'>" +
                    "<img class='card-img-top' src='images/blah.jpg' alt='Card image cap'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>" + m + "</h5>" +
                    "<p class='card-text'>Some quick example text.</p>" +
                    "<a href='#' class='btn btn-primary'>Go somewhere</a>" +
                    "</div>" +
                    "</div)");
            })
        })
}
//getQuotesIntoCards();

//---------------------------------------------------
// This function checks to see if the user is sign in.
// If so, then you can go to the "users" collection,
// look for this person's document id (which would be authentication 
// object ("user")'s uid, and get that document.
// Now you can grab the name, or give a personalized greeting :)
//----------------------------------------------------
function getUser() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //console.log("user is signed in");
            db.collection("users")
                .doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    //console.log(n);
                    $("#username").text(n);
                })
        } else {
            console.log("no user is signed in");
        }
    })
}
getUser();

//---------------------------------------------------------------
// This function will check if the user is signed in.
// If yes, then 
//     1) the "login" text will change to "logout"
//     2) and, the href will go to "index.html" where any logged in 
//        users will be logged out.
//----------------------------------------------------------------
function disableLoginLink() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //console.log("change it to logout");
            document.getElementById("loginlink").href = "index.html";
            document.getElementById("loginlink").innerHTML = "Logout";
        }
    })
}
disableLoginLink();

//------------------------------------------------
// Call this function at the begining of index.html
// to logout any users before you do anything else
//-------------------------------------------------
function logout() {
    console.log("logging out user");
    FirebaseAuth.getInstance().signOut();
}

//-------------------------------------------------
// This function gets 2 user inputs 
// grabs those values, and passes it to the next page,
// using two different methods
//-------------------------------------------------
function saveFruitsFromUser() {
    document.getElementById("myBtn").addEventListener('click', function () {
        var item1 = document.getElementById("fruit1").value;
        var item2 = document.getElementById("fruit2").value;

        // Method1:  pass via URL string
        window.location.href = "fruits.html?" + item1;

        // Method2:  pass in localStorage 
        // this is an object that can be accessed from next page
        // The format is key-value pair.
        localStorage.setItem("item2", item2);
    });
}
//saveFruitsFromUser();
