var numToGuess = 0;
var red = 0; 
var green = 0; 
var yellow = 0; 
var blue = 0; 
var playerCounter = 0;
var wins = 0; 
var losses = 0; 

// Randomly generates the number to guess as well as all of the crystal values. 
// Publishes the number to guess to the html
function generateNumbers(){ 
	while(numToGuess<19){
		numToGuess = Math.ceil(Math.random()*120);
	}
	while(red==0)red = Math.ceil(Math.random()*12);
	while(green==red || green==0)green = Math.ceil(Math.random()*12);
	while(yellow ==red || yellow==green || yellow==0)yellow = Math.ceil(Math.random()*12);
	while(blue==red || blue==green || blue==yellow || blue==0)blue = Math.ceil(Math.random()*12);
	$("#randomNumber").html(numToGuess); 
	$("[data-color='red']").val(red); 
	$("[data-color='green']").val(green);
	$("[data-color='yellow']").val(yellow);
	$("[data-color='blue']").val(blue);
}

//Adds the crystal value to the player's counter
function addValue(){
	playerCounter += parseInt($(this).val()); 
	$("#currentCounter").html(playerCounter); 
	checkWinLoss(); 
}

//Checks to see if the player has won or lost after adding a new value to the counter
//If either is true, increments the win/loss counter and resets the game
function checkWinLoss(){
	if(playerCounter==numToGuess){
		wins++; 
		$("#wins").html(wins); 
		resetNumbers(); 
		generateNumbers(); 
	}else if(playerCounter>numToGuess){
		losses++; 
		$("#losses").html(losses); 
		resetNumbers(); 
		generateNumbers(); 
	}
}

//Resets the randomly generated variables to zero 
//(this function should be run prior to generating new randoms)
function resetNumbers(){
	numToGuess = 0;
	red = 0; 
	yellow = 0; 
	green = 0; 
	blue = 0; 
	playerCounter = 0; 
	$("#currentCounter").html(playerCounter); 
}

//initiates gameplay
generateNumbers();
$("button").on("click", addValue); 
