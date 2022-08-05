var todyasDate = moment().format("MMMM Do YYYY"); // showing today's date 
$("#currentDay").text(todyasDate); // showing in the id

var TimeSchedule = $(".hour");
var now = parseInt(moment().format("H"));//making sure the hour will be compared not counting the minutes 


$.each(TimeSchedule, function () { // comparing  hours 
  var hourId = parseInt($(this).attr("id"));
  console.log(hourId,now)
  if (hourId === now) {
    $(this).next().addClass("present");
  } else if (hourId < now) {
    $(this).next().addClass("past");
  } else if (hourId > now) {
    $(this).next().addClass("future");
  }
});


$(".saveBtn").on("click", function (event) { // setting items to local storage once the click button event is called 
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});

$(document).ready(function () { // saving on the local storage and checking if its something there 
  if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
    var Local9 = $("<p>" + localStorage["9am"] + "</p>");
    $("#Local9").append(Local9[0].innerText);
  } else {
    ("");
  }
  if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
    var Local10 = $("<p>" + localStorage["10am"] + "</p>");
    $("#Local10").append(Local10[0].innerText);
  } else {
    ("");
  }
  if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
    var Local11 = $("<p>" + localStorage["11am"] + "</p>");
    $("#Local11").append(Local11[0].innerText);
  } else {
    ("");
  }
  if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
    var Local12 = $("<p>" + localStorage["12pm"] + "</p>");
    $("#Local12").append(Local12[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
    var Local1 = $("<p>" + localStorage["1pm"] + "</p>");
    $("#Local1").append(Local1[0].innerText);
  } else {
    ("");
  }
  if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
    var Local2 = $("<p>" + localStorage["2pm"] + "</p>");
    $("#Local2").append(Local2[0].innerText);
  } else {
    ("");
  }
  if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
    var Local3 = $("<p>" + localStorage["3pm"] + "</p>");
    $("#Local3").append(Local3[0].innerText);
  } else {
    ("");
  }
  if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
    var Local4 = $("<p>" + localStorage["4pm"] + "</p>");
    $("#Local4").append(Local4[0].innerText);
  } else {
    ("");
  }
  if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
    var Local5 = $("<p>" + localStorage["5pm"] + "</p>");
    $("#Local5").append(Local5[0].innerText);
  } else {
    ("");
  }
});

function deleteItems() {
  // Clear localStorage items 
  localStorage.clear();

}