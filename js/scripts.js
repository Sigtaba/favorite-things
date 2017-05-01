// Backend Logic //




$(document).ready(function() {
  $("form#favs").submit(function(event) {
      event.preventDefault();

      var animal = $("#animal").val();
      var iceCream = $("#ice-cream").val();
      var movie = $("#movie").val();
      var color = $("#color").val();
      var band = $("#band").val();

      var favoriteThings = [animal, iceCream, movie, color, band];

      $("#output").append("<li>" + favoriteThings[0] + "</li><li>" + favoriteThings[1] + "</li><li>" + favoriteThings[2] + "</li><li>" + favoriteThings[3] + "</li><li>" + favoriteThings[4]);


      // var favoriteThings = [animal, iceCream, movie, color, band];
      // console.log(favoriteThings);


 });
});
