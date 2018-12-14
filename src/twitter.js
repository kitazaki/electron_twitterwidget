'use strict';
const request = require('request-promise');
var MilkCocoa = require('milkcocoa');
var milkcocoa = MilkCocoa.connectWithApiKey('', '', '');
var milkcocoaDS = milkcocoa.dataStore('');
const infoBadge = document.getElementById('info');
const INTERVAL_TIME_MILLI_SEC = 1000;

setTimeout(function() {
    var watchword = "";
    milkcocoaDS.on("push", function(sentData) {
        console.log(sentData.value);
        if (sentData.value.watchword == watchword) {
            infoBadge.style.opacity = 1;
            infoBadge.innerHTML = sentData.value.content;
        }
    });
}, INTERVAL_TIME_MILLI_SEC);

