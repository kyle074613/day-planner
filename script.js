$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

var currentTime = moment().format('HH');
console.log(currentTime);

var storedData = ["", "", "", "", "", "", "", "", ""];

renderStoredData();

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
        "<div class='col-8 p-0 description " + currentClass + "'><textarea class='w-100 h-100 user-input'></textarea></div>" +
        "<div class='col-2 p-0 save-btn'><button class='saveBtn w-100 h-100'><i class='fas fa-save fa-2x'></i></button></div>" +
        "</div>");

    // var newRow = $("<div class='row'>");
    // var col1 = $("<div class = 'col-2 hour>'");
    // col1.text(formattedTime);
    // var col2 = $("<div class = 'col-8 description>");
    // col2.attr('class', currentClass);
    // var col3 = $("<div class='col-2 save-btn'>")
    // newRow.append(col1, col2, col3);

    newRow.attr('id', i);

    //Appends the new row to the page
    $(".container").append(newRow);


}

//
function renderStoredData() {
    if (storedData === ["", "", "", "", "", "", "", "", ""]) {
        localStorage.setItem("userCalendar", storedData);
    }
    else
        storedData = localStorage.getItem("userCalendar");
}
//

$(".save-btn").on("click", function () {
    var currentRow = parseInt($(this).parent().attr('id'));

    console.log(currentRow);

    var textInputVal = $(this).parent().children(".description").children(".user-input").val();
    console.log(textInputVal);

    //storedData[currentRow] = $(this).parent().children(".description").children(".user-input").val();


    if (textInputVal === "")
        storedData[currentRow] = textInputVal;
    else
        localStorage.setItem("userCalendar", storedData[currentRow]);


    console.log(storedData);
});