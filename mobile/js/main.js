$("#home .shows a").on("vclick", function(e) {
  var tag = $(this).attr('data-show-tag');

  $('#show h1').text('#' + tag);
});