//from Carly afternoon-tea-master Demo
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
                    $("#Uname").text(n);
                })
        } else {
            console.log("no user is signed in");
        }
    })
}
getUser();

//--------------------------------------------------
// This function gets the collection of documents from the "quotes" collection,
// cycles through each document, and creates a "div" that contains the "message"
// field inside, and appends it to the display area of the document labelled by id.
//---------------------------------------------------
function getQuotes() {
    db.collection("Reviews")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var review_readDB = doc.data().textmessage;
                var id = doc.id;
                //console.log(m);
                //console.log(id);
                $("#quotes-go-here").append("<div id='" + id + "'>" + m + "</div>");
            })
        })
}
//getQuotes();

{/* <div class="review" >
<div class="blog_card">
    <div class="inner_card">
        <label for="" class="img">
            <img src="images/face4.jpeg">
        </label>
        <div class="content">
            <span class="name">Kitty Nai</span>
           
            <div class="title"> 
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star grey"></span>
                <span class="light_time_past">2 weeks ago</span>
            </div>
            <div class="text">Quisque hendrerit rutrum. 
                sagittis orci.</div>
            <!-- <a class="btn btn-primary" href="#" role="button">Read More</a> -->
        </div>
    </div>
</div> */}
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
function getReviewsIntoCards() {
    db.collection("Reviews")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var m = doc.data().textmessage;
                var r = doc.data().ratings;
                    //console.log(n);
             
                //console.log(m);
                $("#reviews-go-here").append(
                    "<div class='review' >" +
                    "<div class='blog_card'>" + 
                    "<div class='inner_card'>" +
                    "<label for='' class='img'>" +
                    "<img src='images/face4.jpeg'>" +
                    "</label>" +
                    "<div class='content'>" +
                    "<span class='name' id='Uname'>" + 
                    //n +
                    "</span>" +
                    "<div class='title'>" +
                    "<span>" + r + "</span>" +
                    "</div>" +
                    "<div cass='text'>" + m +
                    "</div>" + "</div>" + "</div>" + "</div>" + "</div>");

            })
        })
}
getReviewsIntoCards();

//        <div class="blog_card">
{/* <div class="inner_card">
<label for="" class="img">
    <img src="images/face1.jpg">
</label>
<div class="content">
    <span class="name">Kitty Nai</span>
   
    <div class="title"> 
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star grey"></span>
        <span class="light_time_past">2 weeks ago</span>
    </div>
    <div class="text">Quisque hendrerit rutrum. 
        sagittis orci.</div>
    <!-- <a class="btn btn-primary" href="#" role="button">Read More</a> -->
</div>
</div>
</div> */}