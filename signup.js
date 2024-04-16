const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	var abc = 0;
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
		abc++;
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Enter a valid Email');
	} else {
		setSuccessFor(email);
		abc++;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}else if(passwordValue.length < '6') {
		setErrorFor(password, 'Password must be atleast 6 characters');
	}
     else {
		setSuccessFor(password);
		abc++;
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'This cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
		abc++;
	}
	if (abc == "4") {
		window.location.href="index1.html";
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/*
This code is used for validating a form that has four input fields: username, email, password, and confirm password.

It listens for the submit event on the form element and prevents the default behavior of the event. Then, it calls the checkInputs() function that does the validation.

The checkInputs() function retrieves the values of each input field and checks if they are empty or have the correct format. It also checks if the password and confirm password fields match. If any of the conditions are not met, it calls the setErrorFor() function, which adds the 'error' class to the input's parent element and displays an error message. If all conditions are met, it calls the setSuccessFor() function, which adds the 'success' class to the input's parent element. It also increments the abc variable for every input field that has a successful validation.

Finally, if all input fields have been successfully validated, the abc variable will have a value of 4, and it will redirect to the index1.html page using window.location.href.

The isEmail() function is a regular expression function that validates the email field's format using a regular expression pattern.
*/