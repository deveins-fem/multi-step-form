import { nameInput, nameErrorEl, emailInput, emailErrorEl, phoneInput, phoneErrorEl, nextButtons } from "../dom.js";
import { nameValidator, emailValidator, phoneValidator } from "../utils.js";
import { formData } from "../state.js";

export function validateStep1() {
    let isValid = true;

    // Name validation
    const nameError = nameValidator(nameInput.value);
    if (nameError) {
        nameErrorEl.textContent = nameError;
        nameErrorEl.classList.add("is-error");
        nameInput.classList.add("is-invalid");
        isValid = false;
    } 

    else {
        nameErrorEl.textContent = "";
        nameErrorEl.classList.remove("is-error");
        nameInput.classList.remove("is-invalid");
    }

    // Email validation
    const emailError = emailValidator(emailInput.value);
    if (emailError) {
        emailErrorEl.textContent = emailError;
        emailErrorEl.classList.add("is-error");
        emailInput.classList.add("is-invalid");
        isValid = false;
    } 

    else {
        emailErrorEl.textContent = "";
        emailErrorEl.classList.remove("is-error");
        emailInput.classList.remove("is-invalid");
    }

    // Phone validation
    const phoneError = phoneValidator(phoneInput.value);
    if (phoneError) {
        phoneErrorEl.textContent = phoneError;
        phoneErrorEl.classList.add("is-error");
        phoneInput.classList.add("is-invalid");
        isValid = false;
    } 
    
    else {
        phoneErrorEl.textContent = "";
        phoneErrorEl.classList.remove("is-error");
        phoneInput.classList.remove("is-invalid");
    }

    if (isValid) {
        formData.personalInfo.name = nameInput.value.trim();
        formData.personalInfo.email = emailInput.value.trim();
        formData.personalInfo.phone = phoneInput.value.trim();
    }

    return isValid;
}