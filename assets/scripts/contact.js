function validateFormOnSubmit(contact) {
	reason = "";
	reason += validateName(contact.name);
	reason += validateSurname(contact.surname);
	reason += validateEmail(contact.email);
	reason += validatePhone(contact.phone);
	reason += validateReason(contact.contactReason);
	reason += validateDescription(contact.description);
	console.log(reason);
	if (reason.length > 0) {
		return false;
	} else {
		return false;
	}
}
// validate required fields
function validateName(name) {
	var error = "";
	if (name.value.length == 0) {
		name.style.background = '#FFCCCB';
		document.getElementById('name-error').innerHTML = "<div style='margin-left: 5px; margin-bottom: 10px'>Podaj swoje imię</div>";
		var error = "1";
	} else {
		name.style.background = 'White';
		document.getElementById('name-error').innerHTML = '';
	}
	return error;
}

function validateSurname(surname) {
	var error = "";
	if (surname.value.length == 0) {
		surname.style.background = '#FFCCCB';
		document.getElementById('surname-error').innerHTML = "<div style='margin-left: 5px; margin-bottom: 10px'>Podaj swoje nazwisko</div>";
		var error = "1";
	} else {
		surname.style.background = 'White';
		document.getElementById('surname-error').innerHTML = '';
	}
	return error;
}

function validateDescription(description) {
	if (description.value.length <= 30) {
		description.style.background = '#FFCCCB';
		document.getElementById('description-error').innerHTML = "<div style='margin-left: 5px; margin-bottom: 20px';>Podaj dłuższy opis</div>";
		var error = "1"
	} else {
		description.style.background = 'White';
		document.getElementById('surname-error').innerHTML = '';
	}
	return error
}

function validateReason(contactReason) {
	var error = "";
	var select = document.getElementById("contactReason");
	for (let i = 1; i < select.options.length; i++) {
		if (isSelected = select.options[i].selected) {
			contactReason.style.background = 'White';
			document.getElementById('reason-error').innerHTML = '';
		} else {
			contactReason.style.background = '#FFCCCB';
			document.getElementById('reason-error').innerHTML = "<div style='margin-left: 5px; margin-bottom: 10px'>Wybierz powód</div>";
			var error = "1"
		}
		return error
	}
}
// validate email as required field and format
function trim(s) {
	return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(email) {
	var error = "";
	var temail = trim(email.value); // value of field with whitespace trimmed off
	var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
	var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;
	if (email.value == "") {
		email.style.background = '#FFCCCB';
		document.getElementById('email-error').innerHTML = "<div style='margin-left: 5px; margin-bottom: 10px'>Podaj swój email</div>";
		var error = "2";
	} else if (!emailFilter.test(temail)) { //test email for illegal characters
		email.style.background = '#FFCCCB';
		document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
		var error = "3";
	} else if (email.value.match(illegalChars)) {
		email.style.background = '#FFCCCB';
		var error = "4";
		document.getElementById('email-error').innerHTML = "<div style='margin-left: 5px; margin-bottom: 10px'>Email contains invalid characters.</div>";
	} else {
		email.style.background = 'White';
		document.getElementById('email-error').innerHTML = '';
	}
	return error;
}
// validate phone for required and format
function validatePhone(phone) {
	var error = "";
	var stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');
	if (phone.value == "") {
		document.getElementById('test').innerHTML = "<div style='margin-left: 5px; margin-bottom: 10px'>Podaj numer telefonu</div>";
		phone.style.background = '#FFCCCB';
		var error = '6';
	} else if (isNaN(parseInt(stripped))) {
		var error = "5";
		document.getElementById('test').innerHTML = "<div style='margin-left: 5px; margin-bottom: 10px'>Numer telefonu zawiera niedozwolone znaki</div>";
		phone.style.background = '#FFCCCB';
	} else if (stripped.length < 9) {
		var error = "6";
		document.getElementById('test').innerHTML = "<div style='margin-left: 5px; margin-bottom: 10px'>Sprawdź długość numeru</div>";
		phone.style.background = '#FFCCCB';
	} else {
		phone.style.background = 'White';
		document.getElementById('test').innerHTML = '';
	}
	return error;
}