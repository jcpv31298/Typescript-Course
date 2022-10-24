(() => {
    const error = (msg: string):(never | number) => {
        if (false){
            throw new Error(msg);
        }

        return 1;
        
    }

    error('Help me!!!');
    console.log('Hello world');
})()