import { initNavigation, goToStep } from './navigation.js';
import { initPlanSelection } from './steps/step2.js';
import { initAddonSelection } from './steps/step3.js';

document.addEventListener('DOMContentLoaded', () => {
  goToStep(1);
  initNavigation();
  initPlanSelection();
  initAddonSelection();
});