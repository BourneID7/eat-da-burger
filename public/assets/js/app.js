// put request function to change eaten value to true when "devour it" button clicked
$("#devour").on("click", function() {
    var id = $(this).attr("data-id");

    // send put request
    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(function(){
        console.log("Burger was eaten");
    });
    // reload page
    location.reload();
});

// post request function to add a new burger
$("#submit").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_type: $("#burg-type").val().trim()
    };

    // send post request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log(newBurger.burger_type + " added!");
    });
    // reload page
    location.reload();
});