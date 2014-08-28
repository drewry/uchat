# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
# hidden elements

#it should include jquery in every file because we've included it 

$(".loginORsignup").hide()
$(".jumbotron").hide()
$(".randbomButton button").hide()

# old; can be deleted soon    
$(".jumbotron").mouseover ->
  $(this).css "background-color", "pink"

$(".jumbotron").mouseout ->
  $(this).css "background-color", "#ecf0f1"

$(".randbomButton button").on "click", ->
  $(".jumbotron").toggle "slow"


#/////////////////////////////////////////////////////////////////// 
$("#LoginBtn").on "click", ->
  $(".loginORsignup").fadeToggle "slow"