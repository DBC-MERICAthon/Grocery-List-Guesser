$(document).ready(function(){
  $('#login-button').on('click', function(e) { 
    e.preventDefault();
    console.log("prevent this shit");

    var ref = new Firebase("https://sdg.firebaseio.com");
    ref.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        // debugger
        console.log("Authenticated successfully with payload:", authData)

        $auth_id = authData.uid;
        $user_name = authData.google.displayName;
        

        $.ajax({
          type: "POST",
          // dataType: "json",
          url: '/create',
          data: { "auth_id": $auth_id, "name": $user_name },
          success: function(resp){
            $('#target').append(resp)
          },

        }).fail(function(response){
          // debugger
          console.log('something wrong')
        })

        // .done(function(response){
        //   debugger
        //   console.log(response);
        // })
      }
    });
  });
})