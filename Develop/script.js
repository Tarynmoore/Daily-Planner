// Adds current date 
var today = moment();
$('#currentDay').text(today.format ("MMM Do, YYYY"));

// Sets past,present and future classes to the time. 
function timeIndicator() {
var currentTime = moment().hour() 
var timeBlock = $('.time-block')

timeBlock.each(function() {
    var hour = parseInt($(this).attr("id"));

    if (hour === currentTime) {
        $(this).addClass("present");
    } else if (hour < currentTime) {
        $(this).addClass("past");
    } else {
        $(this).addClass("future");
    }
 })
}
timeIndicator()

$(".saveBtn").on('click', function (event) {
    event.preventDefault();
    var userText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, userText);
})

$("#9am textarea").val(localStorage.getItem("9am"));
$("#10am textarea").val(localStorage.getItem("10am"));
$("#11am textarea").val(localStorage.getItem("11am"));
$("#12pm textarea").val(localStorage.getItem("12pm"));
$("#13pm textarea").val(localStorage.getItem("13pm"));
$("#14pm textarea").val(localStorage.getItem("14pm"));
$("#15pm textarea").val(localStorage.getItem("15pm"));
$("#16pm textarea").val(localStorage.getItem("16pm"));
$("#17pm textarea").val(localStorage.getItem("17pm"));