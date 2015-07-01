// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// find_or_create the item

// this should be the actual form for the item name

var bindForm = function(e){
  e.on('click', function(){
    e.preventDefault();
    addItem();
  })
}

bindForm($('some-submit-css'));

function addItem(el){
  var item = $(el).serialize()
  var category = args.category
  var description =
  var name = 
  $.ajax({
    url: "/items",
    type: "POST",
    data: {"name": $name, "description": $description, "category": $category}
  })
  .done(function(response){
  })
}


