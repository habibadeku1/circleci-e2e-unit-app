    const config = require('./protractor.conf').config;

    config.capabilities = {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--no-sandbox','--disable-gpu']
        },
        chromeDriver:"./node_modules/webdriver-manager/selenium/chromedriver_84.0.4147.30"
    };

    exports.config = config;