import { formData, prices } from "../state.js";
import { addonsInputs, addonsLabels, addonPriceElements } from "../dom.js";

export function initAddonSelection() {

    addonPriceElements.forEach(priceElement => {
        const addon = priceElement.dataset.addon;
        const duration = formData.plan.duration;

        if (addon && prices.addons[addon]) {
            priceElement.textContent = `+$${prices.addons[addon][duration]}/${duration === 'monthly' ? 'mo' : 'yr'}`;
        }
    });

    addonsInputs.forEach(input => {
        input.addEventListener('change', () => {
            const selectedLabel = input.closest('.multi-step-form__addon');

            if (selectedLabel) {
                selectedLabel.classList.toggle('multi-step-form__addon-is-checked', input.checked);
            }
        });
    });
}

export function saveSelectedAddons() {
    const duration = formData.plan.duration;
    formData.addons = [];
  
    addonsInputs.forEach(input => {
        if (input.checked) {
            const addonName = input.value;
            const price = prices.addons[addonName][duration];
  
            formData.addons.push({ name: addonName, price });
        }
    });
}