import { panels, stepIndicators, nextButtons, backButtons, changePlanButton } from "./dom.js";
import { validateStep1 } from './steps/step1.js';
import { saveSelectedAddons } from "./steps/step3.js";
import { initSummary } from "./steps/step4.js";

let currentStep = 1;

export function getCurrentStep() {
    return currentStep;
}

export function goToStep(n) {
    panels.forEach(panel => panel.classList.remove('show-panel'));

    panels.forEach(panel => {
        if (parseInt(panel.dataset.step) === n) {
            panel.classList.add('show-panel');
        }
    })

    currentStep = n;

    stepIndicators.forEach(indicator => {
        const step = parseInt(indicator.dataset.stepIndex);
        if (n <= stepIndicators.length) {
            indicator.classList.toggle('multi-step-form__step-indicator--active', step === n);
        }
    })
}

export function nextStep() {
    if (currentStep < panels.length) {
        goToStep(currentStep + 1);
    }
}

export function prevStep() {
    if (currentStep > 1) {
        goToStep(currentStep - 1);
    }
}

export function initNavigation() {
    nextButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            if (currentStep === 1 && !validateStep1()) return;
            if (currentStep === 3) saveSelectedAddons();

            nextStep();

            if (currentStep === 4) initSummary();
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            prevStep();
        });
    });

    changePlanButton.addEventListener('click', () => {
        goToStep(2);
    });
}
