define(["require", "exports", "./classes/Hero"], function (require, exports, Hero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import * as HeroClasses from './classes/Hero';
    // const hero = new SuperHero('Carlos', 1, 23);
    const hero = new Hero_1.Hero('Carlos', 3, 23);
    console.log(hero);
    console.log(hero.power);
});
