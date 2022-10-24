"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '---').toLocaleUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '---');
        }
    };
    var name = fullName('Carlos', 'Paez', true);
    console.log({ name: name });
})();
