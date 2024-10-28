var fs = require('fs');
var $ = jQuery = require('jQuery');


var csv = require('jquery-csv');

var data = $.csv.toObjects("./csv/portfolio.csv");

console.log(data);