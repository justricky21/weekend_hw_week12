const PubSub = require('../helpers/pub_sub.js');

const FormView = function (formElement){
    this.formElement = formElement;
}

FormView.prototype.bindEvents = function(){
    this.formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const ipAddress = event.target['ip-address-input'].value;
        console.log(ipAddress);
        PubSub.publish('FormView:searched-ip-address', ipAddress);
        this.formElement.reset();
    })
}

module.exports = FormView;