(() => {

    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Carlos', 'Paez');

    console.log({name});

})()