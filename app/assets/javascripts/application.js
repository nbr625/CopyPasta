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
//= require jquery-hotkeys
//= require_tree .



       //  Copy  //

$('document').on('keydown', 'up+Ctrl+Alt+Shift', function(){
  $.ajax({
    url: "models/clip.rb/copy_1",
    type: 'PUT'
  });
})



$('document').on('keydown', 'left+Ctrl', function(){
  $.ajax({
    url: "/db/test/copy_2",
    type: 'PUT'
  });
})


$('document').on('keydown', 'left+3', function(){
  $.ajax({
    url: "/db/test/copy_3",
    type: 'PUT'~
  });
})

$('document').on('keydown', 'left+4', function(){
  $.ajax({
    url: "/db/test/copy_4",
    type: 'PUT'
  });
})

$('document').on('keydown', 'left+5', function(){
  $.ajax({
    url: "/db/test/copy_5",
    type: 'PUT'
  });
})


      //  Pasta  //


$('document').on('keydown', 'down+Ctrl+Alt+Shift', function(){
  $.ajax({
    url: "models/clip.rb/copy_1",
    type: 'PUT'
  });
})

$('document').on('keydown', 'right+2', function(){
  $.ajax({
    url: "/db/test/pasta_2",
    type: 'PUT'
  });
})

$('document').on('keydown', 'right+3', function(){
  $.ajax({
    url: "/db/test/pasta_3",
    type: 'PUT'
  });
})

$('document').on('keydown', 'right+4', function(){
  $.ajax({
    url: "/db/test/pasta_4",
    type: 'PUT'
  });
})
$('document').on('keydown', 'right+5', function(){
  $.ajax({
    url: "/db/test/pasta_5",
    type: 'PUT'
  });
})

