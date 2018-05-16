var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
        '@tags': ['guineaPig'],
        'Guinea Pig Assert Title': function (browser) {
            browser
                .url('https://developers.google.com/')
                .waitForElementVisible('body', 10000)
                .assert.containsText('#gc-wrapper > div.devsite-main-content.clearfix > article > article > section.devsite-landing-row.devsite-landing-row-2-up.devsite-landing-row-cards.devsite-background.devsite-background-grey > div > div:nth-child(1) > div > div.devsite-landing-row-item-description-content p:first-of-type', "Hone your skills on the latest cloud technologies with Google experts at hundreds of breakout sessions and interactive on-demand hands-on labs and bootcamps. You'll have the opportunity to engage with the best minds in cloud technology on how your industry is adapting, innovating, and growing with cloud.")
                .click('#gc-wrapper > div.devsite-main-content.clearfix > article > article > section.devsite-landing-row.devsite-landing-row-2-up.devsite-landing-row-cards.devsite-background.devsite-background-grey > div > div:nth-child(1) > figure > a > img')
                .assert.title('Google Cloud Next ’18 | July 24–26 San Francisco') // Check to make sure the link was clicked
                .waitForElementPresent('body', 10000)
                .waitForElementPresent('#main > span > div:nth-child(2) > div > div > div.grid.text-row-module-content > div:nth-child(1) > div > div:nth-child(1) > div.title.typography.typography_headline.typography_headline_3.hasLargeTitle.headline-dark.headline-bold', 10000)
                .useXpath() // DOES NOT LIKE CSS SELECTOR FOR H3
                .assert.containsText('//*[@id="main"]/span/div[2]/div/div/div[1]/div[1]/div/div[1]/div[2]', "Imagine")
                .useCss()
                .waitForElementVisible('#main > span > div.hero > div > div > div > div.text-block.fullWidth > div.button > div > button', 1000)
                .click('#main > span > div.hero > div > div > div > div.text-block.fullWidth > div.button > div > button')
                .setValue('#firstName', ['Joe'])
                .pause(1000) // pause so I can see what's going on.
                .setValue('#lastName', ['LeGuy'])
                .pause(1000)
                .setValue('#email', ['Joe@Joe.Joe'])
                .pause(1000)
                .setValue('#jobTitle', ['SeniorJose'])
                .pause(1000)
                .setValue('#company', ['Joe Corp.'])
                .click('#industry, option[value="Education"]')
                .pause(1000)
                .click('#country, option[value="United States"]')
                .pause(1000)
                .end();
                }
        };
