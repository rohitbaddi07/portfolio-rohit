// MOUSE EVENTS 
// Onmousedown and Onmouseup
function onmousedown1(){
   document.getElementById("demo").style.color="red";
}

function onmouseup1(){
    document.getElementById("demo").style.color="black";
}
//mouseover and mouseout
function onbig(){
    document.getElementById("name").style.fontSize="3rem";
}
function onnormal(){
    document.getElementById("name").style.fontSize="2.25rem";
}

// onclick
function myFunction() {
    document.getElementById("demo").style.color="red";
}

// ondblclick
function ondblclick1(){
    document.getElementById("daa").style.color="green";
}



// FORMEVENTS
// onfocus
function onfocus1(x){
    x.style.background="pink";
}

// onblur
function onblur1(r){
    r.value=r.value.toUpperCase();
    r.style.background="";
}

// onreset
function onreset1(){
    alert("reset successfully");
}
function onselect1(){
    alert("you selected some text.")
}



// VALIDATION
function validateForm() {
	// Name Validation
	var regName = /\d+$/g;
	var name = document.getElementById('name').value;
	if (name == '' || regName.test(name)) {
		window.alert('Please enter your name properly.');
		name.focus();
		return false;
	}

	// Email Validation
	// var regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/g;
	var email = document.getElementById('email').value;
	if (email == '' || !regEmail.test(email)) {
		window.alert('Please enter a valid e-mail address.');
		email.focus();
		return false;
	}

	// Phone Validation
	var regPhone = /^\d{10}$/;
	var phone = document.getElementById('mobile').value;
	if (phone == '' || !regPhone.test(phone)) {
		window.alert('Please enter valid phone number.');
		phone.focus();
		return false;
	}


}
