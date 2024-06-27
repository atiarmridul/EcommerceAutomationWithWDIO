export const config = {

    runner: 'local',

    specs: [
        // './test/specs/**/test.reg.js'
        // './test/specs/**/test.login.js'
         './test/specs/**/test.product_purchase.js',
        //  './test/specs/**/test.surfing.js',
    ],
    

    suites: {

        registration: [
            './test/specs/**/test.reg.js',
        ],

        login: [
            './test/specs/**/test.login.js',
            
        ],

        purchase: [
            './test/specs/**/test.product_purchase.js',
            
        ],

        surfing: [
            './test/specs/**/test.surfing.js',
            
        ],

        regression: [
            './test/specs/**/test.reg.js',
            './test/specs/**/test.login.js',
            './test/specs/**/test.product_purchase.js',
        ]
    },



    exclude: [
        // 'path/to/excluded/files'
    ],

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },

    maxInstances: 10,
    logLevel: 'error',
    bail: 0,
    capabilities: [{
        browserName: 'chrome'
    }],
    waitforTimeout: 40000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],

    framework: 'mocha',

    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    baseUrl: 'http://localhost'
}
