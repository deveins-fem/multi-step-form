import { planInputs, planLabels, billingTypeToggle, planPriceElements, planOfferElements } from '../dom.js';
import { formData, prices } from "../state.js";
import { initAddonSelection } from "./step3.js";

export function initPlanSelection() {
    planInputs.forEach(input => {
        input.addEventListener('change', () => {
            planLabels.forEach(label => label.classList.remove('multi-step-form__plan--selected'));

            const selectedLabel = input.closest('.multi-step-form__plan');
            if (selectedLabel) {
                selectedLabel.classList.add('multi-step-form__plan--selected');
            }

            formData.plan.name = input.value;
        });
    });

    billingTypeToggle.addEventListener('change', () => {
        formData.plan.duration = billingTypeToggle.checked ? 'yearly' : 'monthly';
        initAddonSelection();

        planPriceElements.forEach(priceElement => {
            const plan = priceElement.dataset.plan;
            const duration = formData.plan.duration;
            const price = prices.plans[plan][duration];
            priceElement.textContent = `$${price}/${duration === 'monthly' ? 'mo' : 'yr'}`;
        });

        if (formData.plan.name && prices.plans[formData.plan.name]) {
            formData.plan.price = prices.plans[formData.plan.name][formData.plan.duration];
        }

        if (formData.plan.duration === 'yearly') {
            planOfferElements.forEach(offer => offer.removeAttribute('hidden'));
        } else {
            planOfferElements.forEach(offer => offer.setAttribute('hidden', ''));
        }
        
    })

    const selectedPlan = formData.plan.name;
    const selectedDuration = formData.plan.duration;

    if (selectedPlan && prices.plans[selectedPlan]) {
        formData.plan.price = prices.plans[selectedPlan][selectedDuration];
    }
}