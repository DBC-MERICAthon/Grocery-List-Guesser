$(document).on("page:change", function() {
  circleOneClick();
  circleTwoClick();
  circleThreeClick();
  // salmonToBowl();
  // salmonToOnion();
  // bowlToOnion();
  // bowlToSalmon();
  // onionToSalmon();
  // onionToBowl();
})

var circleOneClick = function() {
  $("#circle-1").on("click", function() {
    $("body").css("background-image", "url('/assets/salmon.jpg')");
    $("#index-salmon").css("display", "block");
    $("#index-bowl").css("display", "none");
    $("#index-onion").css("display", "none");
  })
}

var circleTwoClick = function() {
  $("#circle-2").on("click", function() {
    $("body").css("background-image", "url('/assets/bowl.jpg')")
    $("#index-salmon").css("display", "none")
    $("#index-bowl").css("display", "block")
    $("#index-onion").css("display", "none")
  })
}

var circleThreeClick = function() {
  $("#circle-3").on("click", function() {
    $("body").css("background-image", "url('/assets/onion.jpg')")
    $("#index-salmon").css("display", "none")
    $("#index-bowl").css("display", "none")
    $("#index-onion").css("display", "block")
  })
}

// var salmonToBowl = function() {
//   $("#right-arrow-salmon").on("click", function() {
//     $("body").css("background-image", "url('/assets/bowl.jpg')")
//     $("#index-salmon").css("display", "none")
//     $("#index-bowl").css("display", "block")
//     $("#index-onion").css("display", "none")
//   })
// }

// var salmonToOnion = function() {
//   $("#left-arrow-salmon").on("click", function() {
//     $("body").css("background-image", "url('/assets/onion.jpg')")
//     $("#index-salmon").css("display", "none")
//     $("#index-bowl").css("display", "none")
//     $("#index-onion").css("display", "block")
//   })
// }

// var bowlToOnion = function() {
//   $("#right-arrow-bowl").on("click", function() {
//     $("body").css("background-image", "url('/assets/onion.jpg')")
//     $("#index-salmon").css("display", "none")
//     $("#index-bowl").css("display", "none")
//     $("#index-onion").css("display", "block")
//   })
// }

// var bowlToSalmon = function() {
//   $("#left-arrow-bowl").on("click", function() {
//     $("body").css("background-image", "url('/assets/salmon.jpg')")
//     $("#index-salmon").css("display", "block")
//     $("#index-bowl").css("display", "none")
//     $("#index-onion").css("display", "none")
//   })
// }

// var onionToSalmon = function() {

// }

// var onionToBowl = function() {

// }