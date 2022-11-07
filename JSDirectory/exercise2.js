let num = 0

function next(){
	previmg = newimg = document.getElementById(`img${num+1}`);
	num = (num + 1) % 5;
	newimg = document.getElementById(`img${num+1}`);
	
	previmg.setAttribute("hidden", "hidden");
	newimg.removeAttribute("hidden");
}

function previous(){
	previmg = newimg = document.getElementById(`img${num+1}`);
	num = (num - 1) + ((num <= 0) * 5);
	newimg = document.getElementById(`img${num+1}`);
	
	previmg.setAttribute("hidden", "hidden");
	newimg.removeAttribute("hidden");
}