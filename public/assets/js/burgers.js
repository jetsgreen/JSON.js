$(document).ready(function () {
  $.ajax("/burgers", {
    type: "GET"
  }).then(function (data) {
    console.log(data);

    var burgerList = $("#burgersList");
    var burgerDevoured = $("#burgersEaten");

    var burgers = data.burgers;
    var len = burgers.length;

    // var burgers_elem = $("#burgersList");
    for (var i = 0; i < len; i++) {
      var devourBtn ="<li><h6>" + burgers[i].id + "." + burgers[i].burger_name +
        " <button data-burgerid='" + burgers[i].id + "' class='devBurger'>Devour Burger!</button></h6></li>";
        
        if (!burgers[i].devoured) {
          burgerList.append(devourBtn);
      }

      devourBtn += "</button></div></li>";

      var deleteBtn =
          "<li>" + burgers[i].burger_name + "<button class='delBurger' data-id='" + burgers[i].id + "'>Delete"

      if (burgers[i].devoured) {
        burgerDevoured.append(deleteBtn);
      }

      "</button></li>";
    }
  });

  $("#addBurger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger =  {
      burgers: $("#burger_name").val().trim(),
      devoured: false
    }

    $.ajax("/burgers", {
      type: "POST",
      data: JSON.stringify(newBurger),
      dataType: "json",
      contentType: "application/json"
    }).then(function () {
      console.log("added new burger");
      // Reload the page to get the updated list
      location.reload();
    });

  });

  $(document).on("click", ".devBurger", function(event) {
    event.preventDefault();

    // This is going to target the selected ID
    console.log($(this))
    var burgerId = $(this).attr("data-burgerid");
    var devouredBurger = $(this).data("devour") === true;

    var newDevoured = {
        devoured: devouredBurger
    };

    // Send the PUT request.
    $.ajax("/burgers/update/" + burgerId, {
        type: "PUT",
        data: JSON.stringify(newDevoured),
        dataType: "json",
        contentType: "application/json"
    }).then(function() {
        console.log("changed burger to", devouredBurger);
        // Reload the page to get the updated list
        location.reload();
    });
});
$(document).on("click", ".delBurger", function(event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/burgers/" + id, {
    type: "DELETE"
  }).then(function() {
    console.log("deleted Burgers", id);
    // Reload the page to get the updated list
    location.reload();
  });
});
  

});




