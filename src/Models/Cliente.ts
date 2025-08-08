import { Animal } from "./Animal";

export class Cliente {
  private _nome: string;
  private _animais: Animal[] = [];
  private _idade: number;
  private _endereco: string;
  private _CPF: string;

  constructor(nome: string, idade?: number, endereco?: string, CPF?: string) {
    this._nome = nome;
    this._idade = idade ?? 0;
    this._endereco = endereco ?? "";
    this._CPF = CPF ?? "";
  }

  get nome(): string {
    return this._nome;
  }

  get animais(): Animal[] {
    return this._animais;
  }

  adicionarAnimal(animal: Animal) {
    this._animais.push(animal);
  }
}