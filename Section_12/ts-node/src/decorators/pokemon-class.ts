function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleArrow = (print: boolean = false): Function => {
    if(print){ return printToConsole; }
    
    return () => {}
}

const blockPrototype = function(constructor: Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokemoId() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if(id < 1 || id > 800){
                return console.error('Pokemon Id must be between 1 and 800.');
            }
            else {
                return originalMethod(id);
            }
        }
    }
}

function readOnly(isWritable: boolean = true): Function {
    return function(target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Carlos';
            },
            set(this, val) {
                // console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable
                })
            }
        }

        return descriptor;
    }
}

@blockPrototype
@printToConsoleArrow(false)
export class Pokemon {

    @readOnly(true)
    public publicApi: string = 'https;//pokeapi.co';

    constructor(
        public name: string
    ){}

    @CheckValidPokemoId()
    savePokemontoDB(id: number) {
        console.log(`Pokemon save successfully -> ${id}.`);
    }

}