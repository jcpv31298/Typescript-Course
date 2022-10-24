import axios from "axios";
import { Pokemon } from '../interfaces';

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    const {data} = await axios.get<Pokemon>(url);

    return data;
}