let myVar = "bar";
document.getElementById("dog").style.display = "none";

function alert() {
	alert(myVar);
}

function prompt() {
	myVar = prompt(myVar);
}

let toggle = true;
function diplay() {  
	document.getElementById("dog").style.display = toggle ? "initial" : "none";
	document.getElementById("dog2").style.display = toggle ? "none" : "initial";
	toggle = !toggle;

}
