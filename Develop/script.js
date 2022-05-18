// Adds current date 
var today = moment();
$('#currentDay').text(today.format ("MMM Do, YYYY"));

//Save the user text into local storage
$(".saveBtn").on('click', function (event) {
    event.preventDefault();
    var userText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, userText);
})

// Sets past,present and future classes to the time. 
function timeIndicator() {
var currentTime = moment().hour() 
var timeBlock = $('.time-block')

timeBlock.each(function() {
    var hour = parseInt($(this).attr("id"));
    
    var time = $(this).attr("id")
    console.log("#"+ time + " textarea");
    $("#"+ time + " textarea").val(localStorage.getItem(time))
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


