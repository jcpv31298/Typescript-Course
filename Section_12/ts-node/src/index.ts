import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// console.log(charmander.savePokemontoDB(1));
// charmander.savePokemontoDB(10);
charmander.publicApi = 'prueba';
console.log(charmander);

