const form = document.querySelector("#cardForm");
const cardNo = document.querySelector("#cardNumber");
const month = document.querySelector("#cardMonth");
const year = document.querySelector("#cardYear");
const submit = document.querySelector("#submit");

console.log(form.elements);

cardNo.addEventListener("input", validateNumber)

function validateNumber() {
    console.log("validateNumber");
    if (cardNo.value.length > 15) {
        parseInt(cardNo.value);
        month.focus();
    } 
    month.addEventListener("input", validateMonth);
}

function validateMonth() {
    console.log("validateDate");
    if (month.value.length > 1) {
        parseInt(month.value);
        year.focus();
    }
    year.addEventListener("input", validateYear); 
}

function validateYear() {
    console.log("validateYear");
    if (year.value.length > 1) {
        parseInt(year.value);
        submit.focus();
    }
}