var pageObject = {}
module.exports = {
    before: browser => {
       //browser.url('https://cards.devclock.com/')
        pageObject = browser.page.pageObject()
        pageObject.navigate()
        .waitForElementVisible('@loginTab', 10000)
    },
    after: browser => {
        browser.end()},
    
   
        'test login' : browser => {
        //Enter username
        pageObject.setValue('@emailIn', 'daniel@dflanagan.com')
        //Enter password
        pageObject.setValue('@password', '3punchman')
        //click Login
        browser.useXpath()
        pageObject.click('@loginBut')
        browser.pause(5000)
        browser.useCss()
        //should be logged in
        pageObject.waitForElementVisible('@decksIco', 10000)},
    
    
        'check URLs on pages': browser =>{
        
        //Check Deck icon
        pageObject.waitForElementVisible('@decksIco', 10000)
        //Click deck icon
        pageObject.click('@decksIco')
        //Read deck url and Study button
        //pageObject
        browser.assert.urlEquals('https://cards.devclock.com/decks')
        browser.useCss()
        pageObject.waitForElementVisible('@studyBut',10000)
        //go back to main
        pageObject.click('@backBut')
        pageObject.waitForElementVisible('@decksIco', 10000)
        browser.assert.urlEquals('https://cards.devclock.com/')
        //Click on Subscription
        pageObject.click('@subIcon')
        pageObject.waitForElementVisible('@upgradBut', 10000)
        browser.assert.urlEquals('https://cards.devclock.com/subscription')
        pageObject.click('@backBut')
        pageObject.waitForElementVisible('@decksIco', 10000)
        browser.assert.urlEquals('https://cards.devclock.com/')
        //click on Contact US
        pageObject.waitForElementVisible('@contaBut', 10000)
        pageObject.click('@contaBut')
        pageObject.waitForElementVisible('h1', 10000)
        browser.assert.urlEquals('https://www.devclock.com/contact')
        // no back button on page, go back to main
        browser.back()
        browser.assert.urlEquals('https://cards.devclock.com/')
        pageObject.waitForElementVisible('@decksIco', 10000)
        //click on settings
        pageObject.waitForElementVisible('@settBut', 10000)
        console.log('settbutt')
        browser.pause(5000)
        pageObject.click('@settBut')
        pageObject.waitForElementVisible('@legalStuf', 10000)
        browser.assert.urlEquals('https://cards.devclock.com/settings')
        //back to main
        pageObject.click('@backBut')
        pageObject.waitForElementVisible('@decksIco', 10000)
        //click Logout
        pageObject.waitForElementVisible('@logOut', 10000)
        pageObject.click('@logOut')
        pageObject.waitForElementVisible('@logintab', 10000)
        browser.assert.urlEquals('https://cards.devclock.com/login')
 }}