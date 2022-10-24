(() => {
    let avenger: any = 10;
    let exists;
    let power;

    avenger = 'Dr. Strange';
    console.log((avenger as string).charAt(0));

    avenger = 123.456;
    console.log((<number>avenger).toFixed(2));

    console.log(exists);
    console.log(power);
})()