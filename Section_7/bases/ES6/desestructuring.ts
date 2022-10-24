(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    const avengers: Avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        active: true,
        power: 1500 
    }

    // const {power, vision} = avengers;

    // console.log(power.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ ironman, ...rest }: Avengers) => (console.log(ironman, rest));

    // printAvenger(avengers);

    // const avengersArr: string[] = ["Captain America", "Iron Man", "Hulk"];
    const avengersArr: [string, boolean, number] = ["Captain America", true, 3];

    const [captainAmerica, ironman, numero ] = avengersArr;

    console.log({ironman, captainAmerica, numero});

})()