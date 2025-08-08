import { Cliente } from "./Cliente";

export abstract class Animal {
  protected _nome: string;
  protected _idade: number;
  protected _tutor: Cliente;

  constructor(nome: string, idade: number, tutor: Cliente) {
    this._nome = nome;
    this._idade = idade;
    this._tutor = tutor;
    tutor.adicionarAnimal(this);
  }

  get nome(): string {
    return this._nome;
  }

  get idade(): number {
    return this._idade;
  }

  get tutor(): Cliente {
    return this._tutor;
  }
}