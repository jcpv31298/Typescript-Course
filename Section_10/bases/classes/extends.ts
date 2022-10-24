(() => {

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ) {
            // console.log('Avenger constructor called!!!');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public mutant: boolean
        ) {
            super(name, realName);
            // console.log('Xmen constructos called!!!');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string) {
            this.name = name;
        }

        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);

    // console.log(wolverine.fullName);
    // wolverine.fullName = 'Carlos';
    // console.log(wolverine.fullName);
    // wolverine.getFullNameFromXmen();

})()