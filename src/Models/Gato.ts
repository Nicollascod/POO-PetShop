import { Animal } from "./Animal";
import { Cliente } from "./Cliente";

export class Gato extends Animal {
  // pode adicionar algo específico do gato aqui se quiser

  constructor(nome: string, idade: number, tutor: Cliente, peso: number, raca: string, pelagem: string) {
    super(nome, idade, tutor);
    raca = raca;
    pelagem = pelagem;
    

    
  }

  recomendarTosa(): string {
    return "Tosa recomendada a cada 3 meses."
}
}
