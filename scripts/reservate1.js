$(document).ready(function () {
    $("button#park").on("click", function () {
        var country = $("#input1").val().trim();
        var city = $("#input2").val().trim();

        db.collection("ParkLocation").add({
            country: country,
            city: city,
        });
        return false;
    });

    const parkName = document.querySelector("#user");

    function renderName(doc) {
        let li = document.createElement("li");

        let country = document.createElement("span");
        let city = document.createElement("span");
        let blank = document.createTextNode(" ");

        li.setAttribute("data-id", doc.id);
        country.textContent = doc.data().country;
        city.textContent = doc.data().city;

        li.appendChild(country);
        li.appendChild(blank);
        li.appendChild(city);

        parkName.appendChild(li);
    }

    db.collection("ParkLocation")
        .get()
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                renderName(doc);
            });
        });
});
