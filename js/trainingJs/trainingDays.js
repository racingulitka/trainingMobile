

window.onload = () =>{

//------------------------------------------------------header
	document.getElementById("header").addEventListener("touchstart", () =>{
		document.getElementById("header1").style.cssText = "background:rgba(255, 0, 255, 1);"
	});
	document.getElementById("header").addEventListener("touchend", () =>{
		document.getElementById("header1").style.cssText = "background:rgba(255, 255, 255, 1);"
		window.location.href="trainingMainPage.html";
	});

//--------//

//------------------------------------------------------excercise button call touchstart function

	document.getElementById("excercise1").addEventListener("touchstart", () =>{buttonPressed(1)});
	document.getElementById("excercise2").addEventListener("touchstart", () =>{buttonPressed(2)});
	document.getElementById("excercise3").addEventListener("touchstart", () =>{buttonPressed(3)});
	document.getElementById("excercise4").addEventListener("touchstart", () =>{buttonPressed(4)});
	document.getElementById("excercise5").addEventListener("touchstart", () =>{buttonPressed(5)});
	document.getElementById("excercise6").addEventListener("touchstart", () =>{buttonPressed(6)});
	document.getElementById("excercise7").addEventListener("touchstart", () =>{buttonPressed(7)});
//--------//

//------------------------------------------------------excercise button call touchend function

	document.getElementById("excercise1").addEventListener("touchend", () =>{buttonUnpressed(1), excercise1Condition=excerciseCondition(excercise1Condition, 1)});
	document.getElementById("excercise2").addEventListener("touchend", () =>{buttonUnpressed(2), excercise2Condition=excerciseCondition(excercise2Condition, 2)});
	document.getElementById("excercise3").addEventListener("touchend", () =>{buttonUnpressed(3), excercise3Condition=excerciseCondition(excercise3Condition, 3)});
	document.getElementById("excercise4").addEventListener("touchend", () =>{buttonUnpressed(4), excercise4Condition=excerciseCondition(excercise4Condition, 4)});
	document.getElementById("excercise5").addEventListener("touchend", () =>{buttonUnpressed(5), excercise5Condition=excerciseCondition(excercise5Condition, 5)});
	document.getElementById("excercise6").addEventListener("touchend", () =>{buttonUnpressed(6), excercise6Condition=excerciseCondition(excercise6Condition, 6)});
	document.getElementById("excercise7").addEventListener("touchend", () =>{buttonUnpressed(7), excercise7Condition=excerciseCondition(excercise7Condition, 7)});
//--------//
};

let excercise1Condition = true;
let excercise2Condition = true;
let excercise3Condition = true;
let excercise4Condition = true;
let excercise5Condition = true;
let excercise6Condition = true;
let excercise7Condition = true;

function excerciseCondition(excerciseCondition, number){
	console.log(excerciseCondition);
	if (excerciseCondition == true){
		document.getElementById(`listNumbers${number}`).style.cssText = "height:282px;transition:1s;";
		return false;
	} else {
		document.getElementById(`listNumbers${number}`).style.cssText = "height:0px;transition:1s;";
		return true;
};

}
//------------------------------------------------button call touchstart function
function buttonPressed(buttonId){ 
	document.getElementById(`excercise${buttonId}`).style.cssText = "background:#fff; border-color:#000;color:#000;";

};
//------------//

//-----------------------------------------------button call touchend function
function buttonUnpressed(buttonId){
	document.getElementById(`excercise${buttonId}`).style.cssText = "background:#000; border-color:#fff;color:#fff;";
};
//--------//
