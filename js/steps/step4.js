import { formData } from "../state.js";
import { summaryPlanName, summaryPlanPrice, summaryAddonsContainer, summaryTotalLabel, summaryTotalPrice } from "../dom.js";
import { formatName } from "../utils.js";

export function initSummary() {
    summaryPlanName.textContent = `${formatName(formData.plan.name)} (${formatName(formData.plan.duration)})`;
    summaryPlanPrice.textContent = `$${formData.plan.price}/${formData.plan.duration === 'monthly' ? 'mo' : 'yr'}`;
    summaryAddonsContainer.innerHTML = '';

    const addons = formData.addons;
    addons.forEach(addon => {
        const addonElement = document.createElement('div');
        addonElement.classList.add('multi-step-form__summary-addon');
        addonElement.innerHTML = ` <span class="multi-step-form__summary-addon-name">${addon.name}</span>
        <span class="multi-step-form__summary-addon-price">+$${addon.price}/${formData.plan.duration === 'yearly' ? 'yr' : 'mo'}</span>`;

        summaryAddonsContainer.appendChild(addonElement);
    })

    const planPrice = formData.plan.price;
    const addonsTotal = formData.addons.reduce((sum, addon) => sum + addon.price, 0);
    const total = planPrice + addonsTotal;
    const duration = formData.plan.duration === 'yearly' ? 'yr' : 'mo';
    const durationFull = formData.plan.duration === 'yearly' ? 'year' : 'month';
    summaryTotalLabel.textContent = `Total (per ${durationFull})`;
    summaryTotalPrice.textContent = `$${total}/${duration}`;
}