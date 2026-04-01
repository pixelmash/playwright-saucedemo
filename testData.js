export const testData = {
    urls: {
        root: 'https://www.saucedemo.com',
        inventory: 'inventory',
        checkoutOne: 'checkout-step-one',
        checkoutTwo: 'checkout-step-two',
        cart: 'cart'
    },

    users: {
        standard: { username: process.env.STANDARD_USERNAME, password: process.env.STANDARD_PASSWORD },
        locked_out: { username: process.env.LOCKED_OUT_USERNAME, password: process.env.LOCKED_OUT_PASSWORD },
        problem: { username: process.env.PROBLEM_USERNAME, password: process.env.PROBLEM_PASSWORD },
        performance_glitch: { username: process.env.PERFORMANCE_GLITCH_USERNAME, password: process.env.PERFORMANCE_GLITCH_PASSWORD },
        error: { username: process.env.ERROR_USERNAME, password: process.env.ERROR_PASSWORD },
        visual: { username: process.env.VISUAL_USERNAME, password: process.env.VISUAL_PASSWORD }
    },
    products: {
        backpack: { slug: 'sauce-labs-backpack', displayName: 'Sauce Labs Backpack' },
        bikeLight: { slug: 'sauce-labs-bike-light', displayName: 'Sauce Labs Bike Light' },
        boltTshirt: { slug: 'sauce-labs-bolt-t-shirt', displayName: 'Sauce Labs Bolt T-Shirt' },
        fleeceJacket: { slug: 'sauce-labs-fleece-jacket', displayName: 'Sauce Labs Fleece Jacket' },
        onesie: { slug: 'sauce-labs-onesie', displayName: 'Sauce Labs Onesie' },
        redTshirt: { slug: 'test.allthethings()-t-shirt-(red)', displayName: 'Test.allTheThings() T-Shirt (Red)' },
    },
    checkoutInfo: {
        valid: { firstName: 'Jack', lastName: 'Wilson', zip: '50505' },
        invalid: { firstName: '8e@fs', lastName: 'Z*#', zip: '6518918998' },
        empty: { firstName: '', lastName: '', zip: '' }
    }
};