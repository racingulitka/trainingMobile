window.onload = () =>{

	document.getElementById("day1").addEventListener("touchstart", () =>{
		document.getElementById("day1Button").style.cssText = "color:#000; background:#fff; border:4px solid #000; box-shadow:0px 0px 30px #fff;"
	});
	document.getElementById("day1").addEventListener("touchend", () =>{
		document.getElementById("day1Button").style.cssText = "color:#fff; background:#000;"
		window.location.href="trainingDay1Page.html";
	});



	document.getElementById("day2").addEventListener("touchstart", () =>{
		document.getElementById("day2Button").style.cssText = "color:#000; background:#fff; border:4px solid #000; box-shadow:0px 0px 30px #fff;"
	});
	document.getElementById("day2").addEventListener("touchend", () =>{
		document.getElementById("day2Button").style.cssText = "color:#fff; background:#000;"
		window.location.href="trainingDay2Page.html";
	});



	document.getElementById("day3").addEventListener("touchstart", () =>{
		document.getElementById("day3Button").style.cssText = "color:#000; background:#fff; border:4px solid #000; box-shadow:0px 0px 30px #fff;"
	});
	document.getElementById("day3").addEventListener("touchend", () =>{
		document.getElementById("day3Button").style.cssText = "color:#fff; background:#000;"
		window.location.href="trainingDay3Page.html";
	});
};