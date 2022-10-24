"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villans = 20;
    if (avengers < villans) {
        console.log('We are in problems');
    }
    else {
        console.log('We are safe');
    }
    // Return NaN(Not an Number), NaN is a number too.
    avengers = Number('123A');
    console.log({ avengers: avengers });
})();
