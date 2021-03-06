module.exports = {
    url: 'https://cards.devclock.com/',
    elements:{
        logintab : 'label[data-bind="text: strings.loginTab"]',
        emailIn : '[placeholder="Email"]',
        password : '[placeholder="Password"]',
        cardTitle : 'label[data-bind="text: strings.title"]',
        studyBut: 'button[class="primary study"]',
        decksIco: 'i[data-bind="css: strings.decksIcon"]',
        subIcon: 'i[data-bind="css: strings.subscriptionIcon"]',
        contaBut: 'i[data-bind="css: strings.contactIcon"]',
        settBut: 'i[data-bind="css: strings.settingsIcon"]',
        logOut: 'label[data-bind="text: strings.logout"]',
        backBut: 'button[class="left"]',
        upgradBut: 'button[data-bind="click: clickUpgrade, disable: upgradeDisabled, text: strings.upgrade"]',
        legalStuf: 'label[data-bind="text: strings.legalStuff"]',

//xpath
        loginTab: { selector: '(//label[(text()="Login")])[2]',locateStrategy: 'xpath'},
        loginBut: { selector: '//button[text()="Login"]',locateStrategy: 'xpath'},
        //"cell1" : { selector: '//li[1]', locateStrategy: 'xpath' },
    }

    
    
    
    /*elements: {
       //Login Page
       emailInput: {
        selector: '//input[@placeholder="Email"]',
        locateStrategy: 'xpath'
    },
    passwordInput: {
        selector: '//input[@placeholder="Password"]',
        locateStrategy: 'xpath'
    },
    loginGoogleBtn: { 
        selector: ('//button')[4],
        locateStrategy: 'xpath'
    },
    googleIsVeryComplicated: ('li.C5uAFc.w6VTHd')[0],
    //Cards HomePage
    cardsHeader: ('//label')[1],
    decks: ('div.col-4')[0],
    subscription: ('div.col-4')[1],
    contactUs: ('div.col-4')[2],
    settings: ('div.col-4')[3],
    logout: ('div.col-4')[4],
    //Decks level II 
    decksHeader: ('//label')[1],
    plusBtn1: 'button.primary.study',
    //Decks level III
    deckNameInput: 'textarea',
    greenSave: 'button.primary',
    blueCancel: ('button')[3],
    //Decks level IV
    nameInputIV: 'textarea',
    saveIV: 'button.primary',
    cancelIV: ('button')[3],
    delete: ('button')[4],
    //Subscription level I  //Get HELP
    //Settings level II
    bluePencil: 'label.icon',
    */   
    
}
    
    

