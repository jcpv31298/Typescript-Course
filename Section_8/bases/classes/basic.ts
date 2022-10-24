(() =>{

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static averageAge: number = 35;
        static getAverageAge() {
            return this.name;
        }
        
        constructor(
            private name: string, 
            private team: string, 
            public realName?: string
        ) {}

        public bio() {
            return `${this.name} - ${this.team}`;
        }
        
    }

    const antMan: Avenger = new Avenger('Ant-man', 'Captain', 'Scott Lang');

    // console.log(antMan);
    // console.log(Avenger.averageAge);
    // console.log(antMan.bio());
    // console.log(Avenger.getAverageAge());

})()