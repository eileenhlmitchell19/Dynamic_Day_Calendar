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
    let clockEl = $("#DateTime");
    clockEl.text(timeDate.format('MMMM Do YYYY, h:mm:ss a'));
} 
//-------------------------------------------