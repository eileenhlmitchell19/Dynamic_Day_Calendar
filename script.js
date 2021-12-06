// --- VARIABLES ----------------------------
var businessHours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var currentHour = moment().hour();

var timeDate = moment();

setCurrentTime();

startTimer();
//-------------------------------------------





// --- SET CURRENT TIME ---------------------
function setCurrentTime() {
    var timeDate = moment();
    let clockEl = $("#currentDateElement");
    clockEl.text("Time & Date:" + timeDate.format('MMMM Do YYYY, h:mm:ss a'));
} 
//-------------------------------------------

// --- START TIMER FUNCTION -----------------
function startTimer() {
    // Update the count down every 1 second
        dateClock = setInterval(function() {
        setCurrentTime();
    }, 1000);
}
//-------------------------------------------


// -------------------------------------------------------------------------
// --- FUNCTION TO DISPLAY ALL CURRENT HOURS IN COLUMN ---------------------
function displayHours(){
    //for loops for all business hours
    for( let index=0; index < businessHours.length; index++){
        
        //creating all rows and columns on the page
        let row = $("<div class='row'>");
        // --- COLUMN 1 ---------------------
        let col1 = $("<div class='col-sm-1'>");

        //creating text in the column to diplay AM and PM
        let workHours = businessHours[index]+ " A.M.";

        //helps to determine that hours up until noon will display as such but after noon will need to be subtracted by 12 to come up with "non military time"
        if(businessHours[index] >= 12){
            workHours = businessHours[index] + " P.M.";
            if(businessHours[index] >= 13){
                workHours = businessHours[index] - 12 + " P.M";
            }
        }
        col1.append(workHours)
         //-----------------------------------
    
    // --- COLUMN 2 --------------------------
    let col2 = $("<div class='col-sm-9'>");
        //saving the text to local storage using appropriate syntax "localStorage.getItem"
        let savedText = localStorage.getItem("textarea"+index );
     
        let textArea = $("<textarea>");
        textArea.attr('id', 'textarea' + index);
        textArea.addClass('form-control');
        textArea.text(savedText)

        // --- PAST PRESENT FUTURE CLASSES AND ATTRIBUTES -----------------
        if(currentHour > businessHours[index]){
            textArea.addClass("past");
        //if the text area is in the past then it is a readonly area
        textArea.attr("readonly", "")
        } else if(currentHour < businessHours[index]){
            textArea.addClass("future")
        } else {
            textArea.addClass("present")
        }

        col2.append(textArea);

        //adding class data and text to button
        let button = $("<button>");
        button.addClass("saveBtn");
        button.text("Save");
        //-----------------------------------

        // --- COLUMN 3 ---------------------
        let col3 = $("<div class='col-sm-2'>");
        col3.append(button);

        row.append(col1, col2, col3)
        $("#planner").append(row);
         //-----------------------------------
    }
}
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// text area read only class

displayHours();

// --- SAVES BUTTON ON CLICK -----------------
$(".saveBtn").on("click", function(){
    for(let i = 0; i < businessHours.length; i++){
        let getTxtArea = $("#textarea" + i).val()
        localStorage.setItem("textarea"+i, getTxtArea);
    }
})
//-------------------------------------------