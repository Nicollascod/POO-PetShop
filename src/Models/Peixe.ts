import { Animal } from "./Animal";

export class Peixe extends Animal {

    constructor(nome: string, idade: number, tutor: any, peso: number, raca: string, tipoAgua: string, tamanhoAquario: number) {
        super(nome, idade, tutor);
    }

    recomendarLimpezaAquario(): string {
        return "Limpeza recomendada a cada 15 dias.";
    }

    settamanhoAquario(tamanho: number): void {
        if (tamanho < 20) {
            console.log("Tamanho do aquário muito pequeno para peixes.");
        } else {
            console.log(`Tamanho do aquário ajustado para ${tamanho} litros.`);
        }
  // pode adicionar algo específico do peixe aqui se quiser
}
}
