
//-----------------------------------------------------
// This function adds a listener to the form
// When form is submitted, the values are extracted
// and written into the database
//------------------------------------------------------
function addSubmitListener() {
    console.log("def");
    document.getElementById("submitRW").addEventListener("click", function () {
        // disable default form handling
        // e.preventDefault();
      
        // console.log("abc");
        // grab what user typed
        var comment = document.getElementById("Comment1").value;
        console.log(comment);
// get pointers to the checkboxes
        // var rating = document.getElementById("rating").value;
  // write the values into new database document
        var rating= document.getElementById("Comment2").value;
        db.collection("Reviews")
            .add({ //using the add() function, auto-generated doc ID
                "textmessage": comment,
                "ratings": rating
            });
    });
}
addSubmitListener();

//   function displayForms() {
//     console.log("abcde");
//       db.collection("Reviews") //go to the shops collection
//           .get() //get whole collection
//           .then(function (snap) {
//               snap.forEach(function (doc) { //cycle thru collection to get docs

//                   var n = doc.data().firstname; //extract the name field
//                  // console.log (n);

//                   var n = doc.data().firstname;
//                   //create a new div, with name field, attach it to the right slot
//   //                item = document.createElement("div");
//   //                item.innerText = n;
//   //                $("#myform").append(item);

//               });
//           })
//   }
//   displayForms();






{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
/*<![CDATA[*/ }
    $(document).ready(function () {
        $("#s1").click(function () {
            $(".fa-star").css("color", "grey");
            $("#s1").css("color", "green");
        })
        $("#s2").click(function () {
            $(".fa-star").css("color", "grey");
            $("#s1, #s2").css("color", "green");
        })
        $("#s3").click(function () {
            $(".fa-star").css("color", "grey");
            $("#s1, #s2, #s3").css("color", "green");
        })
        $("#s4").click(function () {
            $(".fa-star").css("color", "grey");
            $("#s1, #s2, #s3, #s4").css("color", "green");
        })
        $("#s5").click(function () {
            $(".fa-star").css("color", "grey");
            $("#s1, #s2, #s3,  #s4, #s5").css("color", "green");
        })

        //console.log("Document is now ready.");

    });

//     //console.log("Document is now ready.");

