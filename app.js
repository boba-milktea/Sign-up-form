const submit = document.querySelector('#btn');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const formBox = document.querySelector('#formBox');

submit.addEventListener("click", function (e) {
    e.preventDefault();
    runValidation();
})


const showError = (element, msg) => {
    const inputControl = element.parentElement;
    const showMessage = inputControl.querySelector(".errDisplay");
    showMessage.innerText = msg;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const showMessage = inputControl.querySelector(".errDisplay");
    showMessage.innerText = "";
    inputControl.classList.remove("error");
    inputControl.classList.add("success");
}

function runValidation() {
    const firstnameV = firstname.value.trim();
    const lastnameV = lastname.value.trim();
    const emailV = email.value.trim();
    const passwordV = password.value;
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!firstnameV) {
        showError(firstname, "Firstname cannot be empty");
        formBox.classList.add("extend");
        firstname.placeholder = "";

    } else {
        setSuccess(firstname);
    }
    if (!lastnameV) {
        showError(lastname, "lastname cannot be empty");
        formBox.classList.add("extend");
        lastname.placeholder = "";
    } else {
        setSuccess(lastname);
    }
    if (!emailV) {
        showError(email, "email cannot be empty");
        formBox.classList.add("extend");
        email.placeholder = "";
    } else if (!emailV.match(mailFormat)) {
        showError(email, "Looks like this is not an email");
        email.value = "email@example/com";
        email.classList.add("emailMsg");
    } else {
        setSuccess(email);
    }
    if (!passwordV) {
        showError(password, "Password cannot be empty");
        formBox.classList.add("extend");
        password.placeholder = "";
    } else if (passwordV.length < 5) {
        showError(password, "Password is too short");
        formBox.classList.add("extend");
        password.placeholder = "";
    } else {
        setSuccess(password);
    }

}

