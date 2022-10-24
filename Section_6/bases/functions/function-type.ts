(() => {

    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hello ${name}`;
    const saveTheWorld = (): string => `The world is yours!!!`;

    let myFunction: () => string;

    // myFunction = 10;
    // console.log(myFunction);

    // myFunction = addNumbers;
    // console.log(myFunction(1,2));
    
    // myFunction = greet;
    // console.log(myFunction('Carlos Paez'));
    
    // myFunction = saveTheWorld;
    // console.log(myFunction());

})()