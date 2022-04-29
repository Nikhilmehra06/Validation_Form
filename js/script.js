var nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
  let name = document.getElementById('user-name').value;

  if (name.length == 0) {
    nameError.innerHTML = '*name is required';
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'enter full name';
    return false;
  }

  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById('user-phone').value;

  if (phone.length == 0) {
    phoneError.innerHTML = '*phone is required';
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = 'must be 10 digit';
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'enter valid phone number';
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById('user-email').value;

  if (email.length == 0) {
    emailError.innerHTML = '*email is required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML =
      'Email Invalid  <i class="fas fa-times-circle eicon"></i>';
    return false;
  }

  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateMsg() {
  let message = document.getElementById('user-message').value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = `${left} more character is required`;
    return false;
  }

  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateMsg() ||
    !validateEmail()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 2000);
    return false;
  }
}
