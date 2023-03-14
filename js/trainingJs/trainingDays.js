let excerciseCondition = ["", true, true, true, true, true, true, true];

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

	for(i=1; i<=7; i++){
		let x = (i) =>{
			document.getElementById(`excercise${i}`).addEventListener("touchstart", () =>{buttonPressed(i)});
		}
		x(i);
	}

//--------//

//------------------------------------------------------excercise button call touchend function

	for(i=1; i<=7; i++){
		let y = (i) =>{
			document.getElementById(`excercise${i}`).addEventListener("touchend", () =>{buttonUnpressed(i), excerciseCondition[i]=excerciseConditionFunc(excerciseCondition[i], i)});
		}
		y(i);
	}


//--------//
};

function excerciseConditionFunc(excerciseCondition, number){
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
	console.log(buttonId);
	document.getElementById(`excercise${buttonId}`).style.cssText = "background:#000; border-color:#fff;color:#fff;";
};
//--------//
