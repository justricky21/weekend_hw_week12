const FormInfo = require('./views/FormInfo.js')
const IPSearch = require('./models/IPSearch.js')
const IPAddressInfo = require('./views/IPAddressInfo.js')

document.addEventListener('DOMContentLoaded', () => {
    console.log('JS Loaded');
    const formElement = document.querySelector('#ip-address-form')
    const infoContainer = document.querySelector('#ip-address-info')
    const formInfo = new FormInfo(formElement);
    formInfo.bindEvents();

    const iPSearch = new IPSearch();
    iPSearch.bindEvents();

    const ipAddressInfo = new IPAddressInfo(infoContainer);
    ipAddressInfo.bindEvents();
    
})