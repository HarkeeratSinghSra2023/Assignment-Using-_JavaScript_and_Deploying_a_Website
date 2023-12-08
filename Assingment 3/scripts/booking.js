/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const calculatedcost = document.getElementById("calculated-cost");
const Mon = document.getElementById("monday");
const Tues = document.getElementById("tuesday");
const Wed = document.getElementById("wednesday");
const Thur = document.getElementById("thursday");
const Fri = document.getElementById("friday");

const cleardays = document.getElementById("clear-button");
const fullday = document.getElementById("full");
const halfday = document.getElementById("half");

var total_cost = 0;

var selecteddays = 0;
var dailyrate = 35;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function add_color()
{
    if(this.classList.contains('blue-hover') && !this.classList.contains('clicked'))
    {
        this.classList.add('clicked');
        selecteddays = selecteddays + 1;
        dailyrate = 35;
        
        recalculate();
    }
}

Mon.addEventListener('click', add_color);
Tues.addEventListener('click', add_color);
Wed.addEventListener('click', add_color);
Thur.addEventListener('click', add_color);
Fri.addEventListener('click', add_color);





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
cleardays.addEventListener("click", clearClicked);

function clearClicked() 
{
    Mon.classList.remove("clicked");
    Tues.classList.remove("clicked");
    Wed.classList.remove("clicked");
    Thur.classList.remove("clicked");
    Fri.classList.remove("clicked");

    total_cost = 0;
    selecteddays = 0;
    recalculate();
}





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfday.addEventListener('click', function()
{
    halfday.classList.add('clicked');
    fullday.classList.remove('clicked');
    dailyrate = 20;
    recalculate();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullday.addEventListener('click', function()
{
    fullday.classList.add('clicked');
    halfday.classList.remove('clicked');

    dailyrate = 35;
    recalculate();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
    let total_cost = dailyrate * selecteddays;
    calculatedcost.innerHTML = total_cost;
}

