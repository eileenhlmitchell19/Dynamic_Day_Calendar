var businessHours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var currentHour = moment().hour();

var timeDate = moment();

setCurrentTime();

startTimer();

// setAllSlotsColor();

// --- START TIMER FUNCTION -----------------
function startTimer() {
    // Update the count down every 1 second
        dateClock = setInterval(function() {
        setCurrentTime();
    }, 1000);
}
//-------------------------------------------


// --- SET CURRENT TIME ---------------------
function setCurrentTime() {
    var timeDate = moment();
    let clockEl = $("#currentDateElement");
    clockEl.text("Time & Date:" + timeDate.format('MMMM Do YYYY, h:mm:ss a'));
} 
//-------------------------------------------

function displayHours(){
    
    for( let index=0; index < businessHours.length; index++){
        
        
        let row = $("<div class='row'>");
        let col1 = $("<div class='col-sm-2'>");

        let workHours = businessHours[index]+ " A.M.";

        if(businessHours[index] >= 12){
            workHours = businessHours[index] + " P.M.";
            if(businessHours[index] >= 13){
                workHours = businessHours[index] - 12 + " P.M";
            }
        }
        col1.append(workHours)
    ///////columm 2

    let col2 = $("<div class='col-sm-8'>");

        let savedText = localStorage.getItem("textarea"+index );
     
        let textArea = $("<textarea>");
        textArea.attr('id', 'textarea' + index);
        textArea.addClass('form-control');
        textArea.text(savedText)


        if(currentHour > businessHours[index]){
            textArea.addClass("past");

        textArea.attr("readonly", "")
        } else if(currentHour < businessHours[index]){
            textArea.addClass("future")
        } else if(currentHour == businessHours[index]){
            textArea.addClass("present")
        }

        col2.append(textArea);


        let button = $("<button>");
        button.addClass("saveBtn");
        button.text("Save");
        

        ///// column 3
        let col3 = $("<div class='col-sm-2'>");
        col3.append(button);

        row.append(col1, col2, col3)
        $("#planner").append(row);
    }


}

// text area read only class

displayHours();

$(".saveBtn").on("click", function(){
    for(let i = 0; i < businessHours.length; i++){
        let getTxtArea = $("#textarea" + i).val()
        localStorage.setItem("textarea"+i, getTxtArea);
    }
})