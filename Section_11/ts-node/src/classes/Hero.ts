import powers from '../data/powers';
export class Hero {

    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get power() {
        return powers.find(power => power.id === this.powerId)?.desc || 'not found';
    }

}

export class Hero1 {}
export class Hero2 {}
export class Hero3 {}

export const PI: number = 3.1416;
export const name: string = 'Carlos';