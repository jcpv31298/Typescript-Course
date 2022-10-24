"use strict";
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: 0,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
var mystique;
mystique = charles;
mystique = apocalipsis;
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
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '---');
    };
    var name = fullName('Carlos');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Carlos', 'Paez');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hello ".concat(name); };
    var saveTheWorld = function () { return "The world is yours!!!"; };
    var myFunction;
})();
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
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Super fuerza']
    };
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1, 3],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myCustonVariable = 'Carlos';
    console.log(typeof myCustonVariable);
    myCustonVariable = 20;
    console.log(typeof myCustonVariable);
    myCustonVariable = {
        name: 'Carlos Paez',
        age: 23,
        powers: [1]
    };
    console.log(typeof myCustonVariable);
})();
(function () {
    var avenger = 10;
    var exists;
    var power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 123.456;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villans = ['Dormammu', 'Green Goblin', 'Ultron'];
    villans.forEach(function (villan) { return console.log(villan.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
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
(function () {
    var nothing = undefined;
    console.log(nothing);
})();
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
    avengers = Number('123A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var spiderman = 'Spiderman';
    var morbius = "Morbius";
    var deadpool = "Deadpool";
    console.log("I'm ".concat(morbius));
    console.log(spiderman.toUpperCase());
    console.log(((_a = spiderman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'They are not present.');
})();
(function () {
    var hero = ['Spiderman', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 150;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
    }
    var callSuperman = function () {
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map