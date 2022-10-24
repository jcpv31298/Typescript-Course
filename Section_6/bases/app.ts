type automovil = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
}

// Objetos
const batimovil: automovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: automovil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

// Villanos debe de ser un arreglo de objetos personalizados
type villano = {
  nombre: string;
  edad: number;
  mutante: boolean;
}

const villanos: villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: 0,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type mutante = {
  poder: string;
  estatura: number;
}

type rango = {
  lider: boolean;
  miembros: string[]
}

const charles: mutante = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: rango = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

console.log(apocalipsis);

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: mutante | rango;

mystique = charles;
mystique = apocalipsis;
