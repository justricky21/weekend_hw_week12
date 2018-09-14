const PubSub = require('../helpers/pub_sub.js')

const IPAddressInfo = function(container){
    this.container = container;
}

IPAddressInfo.prototype.bindEvents = function(){
    PubSub.subscribe('IPSearch:selected-ip-address', (event) => {
        const ipAddress = event.detail;
        this.render(ipAddress);
    })

}

IPAddressInfo.prototype.render = function(ipAddress){
    this.container.innerHTML = '';
    const ipAddressProper = this.createHeaderElement(ipAddress.ip);
    this.container.appendChild(ipAddressProper);
    const city = this.createListElementFromObjectProperty(ipAddress, 'city');
    this.container.appendChild(city);
    const region = this.createListElementFromObjectProperty(ipAddress, 'region');
    this.container.appendChild(region);
    const country = this.createListElementFromObjectProperty(ipAddress, 'country');
    this.container.appendChild(country);
    const timezone = this.createListElementFromObjectProperty(ipAddress, 'timezone');
    this.container.appendChild(timezone);
    const postal = this.createListElementFromObjectProperty(ipAddress, 'postal');
    this.container.appendChild(postal);
    console.log(ipAddress.latitude);
    console.log(ipAddress.longitude);
    

}

IPAddressInfo.prototype.createHeaderElement = function(text){
    const headerElement = document.createElement('h2');
    headerElement.textContent = text;
    return headerElement;
}

IPAddressInfo.prototype.createListElementFromObjectProperty = function(object, property){
    const textElement = document.createElement('li');
    const upperCasedProperty = property.charAt(0).toUpperCase() + property.substr(1);
    textElement.textContent = `${upperCasedProperty}: ${object[property]}`;
    return textElement;
}

module.exports = IPAddressInfo