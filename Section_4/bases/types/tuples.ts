(() => {
    const hero: [string, number, boolean] = ['Spiderman', 100, true];

    hero[0] = 'Ironman';
    hero[1] = 150;
    hero[2] = false;

    console.log(hero);
})()