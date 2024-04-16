const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	var abcd = 0;

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
		abcd++;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}else if(passwordValue.length < '6') {
		setErrorFor(password, 'Password must be atleast 6 characters');
	}
     else {
		setSuccessFor(password);
		abcd++;
	}
	if (abcd == "2") {
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


/*
This is a JavaScript code for form validation that checks if the username and password fields are filled out correctly before submitting the form.

The code starts by selecting the form element and the username and password input fields using their IDs. Then, an event listener is added to the form to prevent it from submitting by default and call the checkInputs function.

The checkInputs function then checks if the username and password fields have values or not. If the username is empty, an error message is displayed; otherwise, the success message is displayed, and a counter is incremented. Similarly, if the password is empty or less than six characters, an error message is displayed. If both fields are valid, the counter is incremented to two, and the user is redirected to the next page.

The setErrorFor and setSuccessFor functions are helper functions that set the classes for the input and display the error/success messages.
*/