$(document).ready(function() {
  var flavors = ["chocolate", "vanilla", "peach"];
  flavors.forEach(function(flavor) {
    $("#flavors").text(flavors);
  });
});
