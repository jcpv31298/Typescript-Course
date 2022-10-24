"use strict";
(function () {
    var error = function (msg) {
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    error('Help me!!!');
    console.log('Hello world');
})();
