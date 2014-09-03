$("#home .shows a").on("click", function(e) {
  var tag = $(this).attr('data-show-tag');

  $('#show h1').text('#' + tag);
});