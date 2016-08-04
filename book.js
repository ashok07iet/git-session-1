'use strict'
module.exports = function() {
    var ratePoint = 0;
    return {
        rate: function(rate) {
            ratePoint = rate;
        },
        getRate: function() {
            return ratePoint;
        }

    }
}