var menu = document.getElementById('burger-menu');﻿
menu.onclick = function myFunction(){
	var x = document.getElementById("myTopnav")

	if(x.className === "head-bar__topnav") {
		x.className += " adaptive";
	} else {
		x.className = "head-bar__topnav";
	}
}




var sel = document.getElementById('myArrivals');﻿
sel.onclick = function myFunction(){
	var y = document.getElementById("ggg")

	if(y.className === "arrivals-products__thing") {
		y.className += " selected";
	} else {
		y.className = "arrivals-products__thing";
	}
}