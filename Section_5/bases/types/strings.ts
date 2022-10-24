(() => {
    const spiderman: string = 'Spiderman';
    const morbius: string = "Morbius";
    const deadpool: string = `Deadpool`;

    console.log(`I'm ${morbius}`);
    console.log(spiderman.toUpperCase());
    console.log(spiderman[10]?.toUpperCase() || 'They are not present.');
})()