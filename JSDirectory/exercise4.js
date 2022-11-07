function changeBorder(){
	red = document.getElementById("redBorder");
	green = document.getElementById("greenBorder");
	blue = document.getElementById("blueBorder");
	width = document.getElementById("widthBorder");
	
	body = document.getElementById("main");
	
	body.style.borderColor = `#${red.value}${green.value}${blue.value}`;
	
	if( width.value < 300 ){
		body.style.width = "50%";
	}
	else{
		body.style.width = `${width.value}px`;
	}
}

function changeBackground(){
	red = document.getElementById("redBG");
	green = document.getElementById("greenBG");
	blue = document.getElementById("blueBG");
	
	html = document.getElementsByTagName("html");
	
	html[0].style.backgroundColor = `#${red.value}${green.value}${blue.value}`;
}