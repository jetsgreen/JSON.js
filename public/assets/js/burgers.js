$(document).ready(function() {
    $.ajax("/burgers", {
        type: "GET"
      }).then(function(data) {
          console.log(data);
        var burgers = data.burgers;
        var len = burgers.length;
    
        var burgers_elem = $("#burgersList");
        for (var i = 0; i < len; i++) {
          burgers_elem.append("<li><h6>" + burgers[i].id + "." +  burgers[i].burger_name + 
          " <button data-burgerid='" + burgers[i].id + "' class='devBurger'>Devour Burger!</button></h6></li>"); 
        }
      });
      
});

$("#addBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
   
    alert("works")
    // var newBurger = $("#burger_name").val().trim();

    // newBurger.append("<li><h6>" + burgers[i].id + "." +  burgers[i].burger_name + 
    // " <button data-burgerid='" + burgers[i].id + "' class='devBurger'>Devour Burger!</button></h6></li>");

   
  });

