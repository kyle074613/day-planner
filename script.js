$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

var currentTime = moment().format('HH');
console.log(currentTime);

for (var i = 0; i < 9; i++) {
    var rowTime = i + 9;
    var formattedTime;
    var currentClass;

    //Formats the time for current row into 12-hour time
    if (rowTime === 12)
        formattedTime = rowTime + "PM";
    else if (rowTime > 12)
        formattedTime = (rowTime - 12) + "PM";
    else
        formattedTime = rowTime + "AM";

    //Determines if current time block is in the past, present, or future
    if (rowTime < currentTime)
        currentClass = 'past';
    else if (rowTime == currentTime)
        currentClass = 'present';
    else
        currentClass = 'future';

    //Generates a row for each work hour
    var newRow = $("<div class = 'row'>" +
        "<div class='col-2 py-2 hour'>" + formattedTime + "</div>" +
        "<div class='col-8 p-0 description " + currentClass + "'><textarea class='w-100 h-100'></textarea></div>" +
        "<div class='col-2 p-0 save-btn'><button class='saveBtn w-100 h-100'><i class='fas fa-save fa-2x'></i></button></div>" +
        "</div>");

    //Appends the new row to the page
    $(".container").append(newRow);
}