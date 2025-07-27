export const nameInput = document.getElementById('name');
export const emailInput = document.getElementById('email');
export const phoneInput = document.getElementById('phone');

export const nameErrorEl = document.getElementById('name-error');
export const emailErrorEl = document.getElementById('email-error');
export const phoneErrorEl = document.getElementById('phone-error');

export const planInputs = document.querySelectorAll('input[name="plan"]');
export const planLabels = document.querySelectorAll('.multi-step-form__plan');
export const billingTypeToggle = document.getElementById('toggle');
export const planPriceElements = document.querySelectorAll('.multi-step-form__plan-price');
export const planOfferElements = document.querySelectorAll('.multi-step-form__plan-offer');

export const addonsInputs = document.querySelectorAll('.multi-step-form__addon-input');
export const addonsLabels = document.querySelectorAll('.multi-step-form__addon');
export const addonPriceElements = document.querySelectorAll('.multi-step-form__addon-price');

export const summaryPlanName = document.querySelector('.multi-step-form__summary-plan-name');
export const summaryPlanPrice = document.querySelector('.multi-step-form__summary-price');
export const summaryAddonsContainer = document.querySelector('.multi-step-form__summary-addons');
export const summaryTotalLabel = document.querySelector('.multi-step-form__summary-total-label');
export const summaryTotalPrice = document.querySelector('.multi-step-form__summary-total-price');

export const panels = document.querySelectorAll('.multi-step-form__panel');
export const stepIndicators = document.querySelectorAll('[data-step-index]');
export const nextButtons = document.querySelectorAll('[data-action="next"]');
export const backButtons = document.querySelectorAll('[data-action="back"]');
export const changePlanButton = document.querySelector('[data-action="change-plan"]');