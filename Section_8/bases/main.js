"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveTheWorld() {
            return `World saved`;
        }
    }
    class Villian extends Mutant {
        conquerTheWorld() {
            return `World conquered`;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAverageAge() {
            return this.name;
        }
        bio() {
            return `${this.name} - ${this.team}`;
        }
    }
    Avenger.averageAge = 35;
    const antMan = new Avenger('Ant-man', 'Captain', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, mutant) {
            super(name, realName);
            this.mutant = mutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
})();
(() => {
    class Apocalypse {
        constructor(name) {
            this.name = name;
        }
        static callApocalypse() {
            if (!Apocalypse.instace) {
                Apocalypse.instace = new Apocalypse('Soy Apocalipsis');
            }
            return Apocalypse.instace;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalypse.callApocalypse();
    const apocalipsis2 = Apocalypse.callApocalypse();
    const apocalipsis3 = Apocalypse.callApocalypse();
    apocalipsis1.changeName('Carlos');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map