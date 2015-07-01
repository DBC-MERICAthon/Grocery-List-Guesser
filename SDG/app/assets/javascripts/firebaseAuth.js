$(document).ready(function(){
  $('#login-button').on('click', function(e) {

    e.preventDefault();
    console.log("prevent this shit");
    bindForm();

    googleAuth().then(function(aData){
      $auth_id = aData.uid;
      $user_name = aData.google.displayName;

      $.ajax({
        type: "POST",
        url: '/create',
        data: { "auth_id": $auth_id, "name": $user_name },
      }).done(function(resp){
        // $("#card").css("display", "block")

        $("body").append(resp)
        console.log(resp)

        $("#index-salmon").empty()
        $("#index-bowl").empty()
        $("#index-onion").empty()
        $(".cycle-circles").empty()
        $("header").css("background-color", "green")
        $("footer").css("background-color", "green")
        $("body").css("background-image", "url()")
      })
    })
  });
})

var bindForm = function(){
  $(document).on('click', ':submit#addButton', function(e){
    e.preventDefault();
    addItem(e);
  })
}

// bindForm($('some-submit-css'));

function addItem(event){
  var form = $('#addForm');
  var data = form.serialize();
  console.log(data);
  // var category = args.category
  // var description =
  // var name = 
  $.ajax({
    url: "/items",
    type: "POST",
    data: data//{"name": $name, "description": $description, "category": $category}
  })
  .done(function(response){
    console.log(response);
    $('.item-cards-list').append(response)
  })
}

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







