"use strict";
(function () {
    var hero = "Flash";
    function returnName() {
        return hero;
    }
    var activateBatSignal = function () {
        return "BatiSignal activate";
    };
    console.log(typeof activateBatSignal);
    var heroName = returnName();
})();
