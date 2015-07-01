$(document).ready(function() {
  var ref = new Firebase("https://sdg.firebaseio.com");
  ref.authWithOAuthPopup("google", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      debugger
      console.log("Authenticated successfully with payload:", authData)

      $auth_id = authData.uid;
      $user_name = authData.google.displayName;
      

      $.ajax({
        type: "POST",
        dataType: "JSON",
        url: '/create',
        data: { "auth_id": $auth_id, "name": $user_name }
      })
    }
  });
});