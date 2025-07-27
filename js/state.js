export const formData = {
    personalInfo: {
        name: '',
        email: '',
        phone: '',
    },

    plan: {
        name: 'arcade',
        duration: 'monthly',
        price: 9,
    },

    addons: [],
};
  
export const prices = {
    plans: {
        arcade: { monthly: 9, yearly: 90 },
        advanced: { monthly: 12, yearly: 120 },
        pro: { monthly: 15, yearly: 150 },
    },

    addons: {
        'online-service': { monthly: 1, yearly: 10 },
        'larger-storage': { monthly: 2, yearly: 20 },
        'custom-profile': { monthly: 2, yearly: 20 },
    },
};