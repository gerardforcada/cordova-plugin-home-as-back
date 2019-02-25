var exec = require('cordova/exec');
var platform = require('cordova/platform');

module.exports = {
    
    trigger: function(successCallback, errorCallback) {
        exec(successCallback, null, 'IonicBack', 'back', [successCallback, errorCallback]);
    }
};