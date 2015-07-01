$(document).ready(function(){
  $('#login-button').on('click', function(e) {

    e.preventDefault();
    console.log("prevent this shit");

    googleAuth().then(function(aData){
      $auth_id = aData.uid;
      $user_name = aData.google.displayName;

      $.ajax({
        type: "POST",
        url: '/create',
        data: { "auth_id": $auth_id, "name": $user_name },
      }).done(function(resp){
        $("#card").css("display", "block")
        $(".item-cards-list").append(resp)
        $("#index-salmon").empty()
        $("#index-bowl").empty()
        $("#index-onion").empty()
        $(".cycle-circles").empty()
        $("#login-button").empty()
        $("#login-button").css("background-color", "transparent")
        $("header").css("background-color", "#43A047")
        $("footer").css("background-color", "#43A047")
        $("body").css("background-image", "url()")
      })
    })
  });
})


function googleAuth(){
  var promise = new Promise(function(resolve, reject){
    var ref = new Firebase("https://sdg.firebaseio.com");
    ref.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        reject(error)
      } else {
        resolve(authData)
      };
    })

  })
  return promise;
}







