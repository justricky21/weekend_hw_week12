const Request = function (url) {
  this.url = url;
}

Request.prototype.get = function () {
  return fetch(this.url, { headers: { 'Accept': 'application/json' } })
    .then(response => response.json());
}


module.exports = Request;
