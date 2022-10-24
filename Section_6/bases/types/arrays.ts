(() => {
    // const numbers: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers = [1,2,3,4,5,6,7,8,9,10];

    // console.log([...numbers, true]);
    // console.log([...numbers, 11]);

    const villans = ['Dormammu', 'Green Goblin', 'Ultron'];

    villans.forEach(villan => console.log(villan.toUpperCase()));
})()