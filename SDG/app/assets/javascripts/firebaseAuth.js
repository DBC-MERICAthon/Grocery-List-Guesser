$(document).ready(function() {
  var ref = new Firebase("https://sdg.firebaseio.com");
  ref.authWithOAuthPopup("google", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
});