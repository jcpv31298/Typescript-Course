(() => {

    
    class Apocalypse {
        static instace: Apocalypse;
        
        private constructor(
            public name: string
        ){}

        static callApocalypse(): Apocalypse {
            if (!Apocalypse.instace) {
                Apocalypse.instace = new Apocalypse('Soy Apocalipsis');
            }
            
            return Apocalypse.instace;
        }

        public changeName(newName: string) {
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalypse.callApocalypse();
    const apocalipsis2 = Apocalypse.callApocalypse();
    const apocalipsis3 = Apocalypse.callApocalypse();

    apocalipsis1.changeName('Carlos');

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);

    // const apocalipsis1 = new Apocalypse('I am apocalipsis');
    // const apocalipsis2 = new Apocalypse('I am apocalipsis');
    // const apocalipsis3 = new Apocalypse('I am apocalipsis');

    // console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})()