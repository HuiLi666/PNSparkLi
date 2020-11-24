//-----------------------------------------------------
// This function adds a listener to the form
// When form is submitted, the values are extracted
// and written into the database
//------------------------------------------------------
function addListener() {
    document.getElementById("myform").addEventListener("submit", function (e) {
        // disable default form handling
        e.preventDefault();

        // grab what user typed
        var name = document.getElementById("name").value;
        var neighbourhood = document.getElementById("hood").value;
        var reason = document.getElementById("reason").value;

        // get pointers to the checkboxes
        var check1 = document.getElementById("check1");
        var check2 = document.getElementById("check2");

        //console.log(name);
        //console.log(neighbourhood);
        //console.log(check1.checked);
        //console.log(check2.checked);

        // write the values into new database document
        db.collection("shops")
            .add({ //using the add() function, auto-generated doc ID
                "name": name,
                "hood": neighbourhood,
                "reason": reason,
                "open-window": check1.checked, //boolean value
                "patio-seating": check2.checked //true if checked
            })
    })
}
//addListener();

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
getQuotes();


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
                var d1 = $("#quotes-go-here").append("<div class='card' style='width: 18rem;'>")
                var i = d1.append("<img class='card-img-top' src='...' alt='Card image cap'>");
                var d2 = d1.append("<div class='card-body'>")
                d2.append("<h5 class='card-title'>" + m + "</h5>");
                d2.append("<p class='card-text'>Some quick example text.</p>");
                d2.append("<a href='#' class='btn btn-primary'>Go somewhere</a>");
            })
        })
}
getQuotesIntoCards();

