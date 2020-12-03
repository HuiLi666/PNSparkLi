var name, number, email, feedback, rate;

$("#submit").on("click", function () {
    name = $("#name-input").val().trim();
    number = $("#number-input").val().trim();
    email = $("#email-input").val().trim();
    feedback = $("#feedback-input").val().trim();
    rate = $("#rate-input").val().trim();

    db.collection("Feedback_of_app/").add({
        Name: name,
        Phone_Number: number,
        Email: email,
        Feedback: feedback,
        Rate: rate,
    });
    return false;
});

function getQuotesIntoCards() {
    db.collection("Feedback_of_app")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var m = doc.data().message;
                //console.log(m);
                var d1 = $("#quotes-go-here").append(
                    "<div class='card' style='width: 18rem;'>" +
                        "<img class='card-img-top' src='images/blah.jpg' alt='Card image cap'>" +
                        "<div class='card-body'>" +
                        "<h5 class='card-title'>" +
                        m +
                        "</h5>" +
                        "<p class='card-text'>Some quick example text.</p>" +
                        "<a href='#' class='btn btn-primary'>Go somewhere</a>" +
                        "</div>" +
                        "</div)"
                );
            });
        });
}
getQuotesIntoCards();
