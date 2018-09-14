const Request = require('../helpers/request.js')
const PubSub = require('../helpers/pub_sub.js')

const IPSearch = function () {
    this.data = null;
}

IPSearch.prototype.bindEvents = function () {
    PubSub.subscribe('FormView:searched-ip-address', (event) => {
        const ipAddress = event.detail;
        this.getData(ipAddress);
    });
}

IPSearch.prototype.getData = function(ipAddress){
    const url = `https://ipapi.co/${ipAddress}/json/`;
    const request = new Request(url);
    request.get()
    .then(data => {
        this.data = data;
        console.log(data);
        PubSub.publish('IPSearch:selected-ip-address', this.data);
    })
    .catch(err =>{
        console.log(err);
    })
}

module.exports = IPSearch;