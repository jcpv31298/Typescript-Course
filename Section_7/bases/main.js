"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        active: true,
        power: 1500
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, rest = __rest(_a, ["ironman"]);
        return (console.log(ironman, rest));
    };
    const avengersArr = ["Captain America", true, 3];
    const [captainAmerica, ironman, numero] = avengersArr;
    console.log({ ironman, captainAmerica, numero });
})();
(() => {
    const ironman = {
        name: "IronMan",
        weapon: "Armorsuit"
    };
    const captainAmerica = {
        name: "Captain America",
        weapon: "Shield"
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    const nombre = "Carlos";
    const getName = () => { console.log('Old getName'); };
})();
//# sourceMappingURL=main.js.map