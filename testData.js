export const testData = {
    urls: {
        root: 'https://www.saucedemo.com',
        inventory: 'inventory',
        checkoutOne: 'checkout-step-one',
        checkoutTwo: 'checkout-step-two',
        cart: 'cart'
    },
    users: {
        standard: { username: 'standard_user', password: 'secret_sauce' },
        locked_out: { username: 'locked_out_user', password: 'secret_sauce' },
        problem: { username: 'problem_user', password: 'secret_sauce' },
        performance_glitch: { username: 'performance_glitch_user', password: 'secret_sauce' },
        error: { username: 'error_user', password: 'secret_sauce' },
        visual: { username: 'visual_user', password: 'secret_sauce' }
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