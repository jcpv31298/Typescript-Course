(() => {

    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || '---'}`;
    }

    const name = fullName('Carlos');

    console.log({name});

})()