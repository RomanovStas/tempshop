var menu = document.getElementById('burger-menu');﻿
menu.onclick = function myFunction(){
	var x = document.getElementById("myTopnav")

	if(x.className === "head-bar__topnav") {
		x.className += " adaptive";
	} else {
		x.className = "head-bar__topnav";
	}
}
