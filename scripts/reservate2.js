function addSubmitListener() {
    document.getElementById("submit").addEventListener("click", function () {
        // disable default form handling
        // e.preventDefault();

        // console.log("abc");
        // grab what user typed
        var name = document.getElementById("name").value;
        //console.log(comment);
        // get pointers to the checkboxes
        // var rating = document.getElementById("rating").value;
        // write the values into new database document
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phoneNumber").value;
        var N_people = document.getElementById("numberOfPeople").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;
        db.collection("Reservation").add({
            //using the add() function, auto-generated doc ID
            Name: name,
            Email: email,
            Phone: phone,
            Number_People: N_people,
            date: date,
            time: time,
        });
    });
}
addSubmitListener();
