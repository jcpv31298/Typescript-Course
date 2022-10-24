(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string

    }

    let myCustonVariable: (string | number | Hero) = 'Carlos';

    console.log(typeof myCustonVariable);

    myCustonVariable = 20;
    console.log(typeof myCustonVariable);
    
    myCustonVariable = {
        name: 'Carlos Paez',
        age: 23,
        powers: [1]
    }
    console.log(typeof myCustonVariable);

})()