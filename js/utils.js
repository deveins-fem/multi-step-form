export function nameValidator(name) {
    const trimmed = name.trim();
    if (trimmed === '') {
        return 'This field is required';
    }
    if (trimmed.length <= 1) {
        return 'Name must be at least 2 characters';
    }
    return '';
}

export function emailValidator(email) {
    const trimmed = email.trim();
    if (trimmed === '') {
        return 'This field is required';
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(trimmed)) {
        return 'Please enter a valid email address';
    }
    return '';
}

export function phoneValidator(phone) {
    const trimmed = phone.trim();
    if (trimmed === '') {
        return 'This field is required';
    }

    const phonePattern = /^\d{7,15}$/;
    if (!phonePattern.test(trimmed)) {
        return 'Please enter a valid phone number';
    }
    return '';
}

export function formatName(str) {
    return str[0].toUpperCase() + str.slice(1);
}