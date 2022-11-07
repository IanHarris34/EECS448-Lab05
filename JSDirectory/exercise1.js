function validate(){
	pass0 = document.getElementById("pass0");
	pass1 = document.getElementById("pass1");
	
	value0 = pass0.value;
	value1 = pass1.value;
	
	if(value0 != value1){
		alert("Passwords do not match!");
	}
	else if(value0.length < 8){
		alert("Password needs to be at least 8 characters long!");
	}
	else{
		alert("Password Verified!");
	}
}