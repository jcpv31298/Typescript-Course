(() => {
    const hero: string = "Flash";

    function returnName(): string {
        return hero;
    }

    const activateBatSignal = (): string => {
        return "BatiSignal activate";
    }

    console.log(typeof activateBatSignal);

    const heroName: string = returnName();


})()