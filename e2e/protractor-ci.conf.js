    const config = require('./protractor.conf').config;

    const HtmlReporter = require('protractor-html-screenshot-reporter');
    const reporter = new HtmlReporter({
       baseDirectory: './protractor-result', // a location to store screen shots.
       docTitle: 'Protractor Demo Reporter',
       docName: 'protractor-demo-tests-report.html'
    });

    config.capabilities = {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--no-sandbox']
        },
    };

    config.onPrepare = function() {
      jasmine.getEnv().addReporter(reporter);
    }

    exports.config = config;