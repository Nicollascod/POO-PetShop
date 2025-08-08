

import React, { useState } from "react";
import { Cliente } from "./Models/Cliente";
import { Cachorro } from "./Models/Cachorro";
import { Gato } from "./Models/Gato";
import { Peixe } from "./Models/Peixe";
import { Animal } from "./Models/Animal";
import "./App.css";

export default function App() {


  const [clientes, setClientes] = useState([]);
  const [animais, setAnimais] = useState([]);

  // Formulário Cliente
  const [nomeCliente, setNomeCliente] = useState("");
  const [idadeCliente, setIdadeCliente] = useState("");
  const [enderecoCliente, setEnderecoCliente] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [showClienteModal, setShowClienteModal] = useState(false);

  // Formulário Animal
  const [nomeAnimal, setNomeAnimal] = useState("");
  const [idadeAnimal, setIdadeAnimal] = useState(0);
  const [tipoAnimal, setTipoAnimal] = useState("Cachorro");
  const [tutorSelecionado, setTutorSelecionado] = useState("");
  const [tipoAgua, setTipoAgua] = useState("");
  const [tamanhoAquario, setTamanhoAquario] = useState("");
  const [showAnimalModal, setShowAnimalModal] = useState(false);

  // Adicionar cliente
  const adicionarCliente = () => {
    if (!nomeCliente) return alert("Informe o nome do cliente");
    if (!idadeCliente) return alert("Informe a idade do cliente");
    if (!enderecoCliente) return alert("Informe o endereço do cliente");
    if (!cpfCliente) return alert("Informe o CPF do cliente");
    const novoCliente = new Cliente(nomeCliente, Number(idadeCliente), enderecoCliente, cpfCliente);
    setClientes([...clientes, novoCliente]);
    setNomeCliente("");
    setIdadeCliente("");
    setEnderecoCliente("");
    setCpfCliente("");
    setShowClienteModal(false);
  };

  // Adicionar animal
  const adicionarAnimal = () => {
    if (!nomeAnimal || idadeAnimal < 0 || !tutorSelecionado)
      return alert("Preencha todos os dados do animal");

    const tutor = clientes.find((c) => c.nome === tutorSelecionado);
    if (!tutor) return alert("Tutor não encontrado");

    let novoAnimal;


    switch (tipoAnimal) {
      case "Cachorro":
        novoAnimal = new Cachorro(nomeAnimal, idadeAnimal, tutor);
        break;
      case "Gato":
        novoAnimal = new Gato(nomeAnimal, idadeAnimal, tutor);
        break;
      case "Peixe":
        if (!tipoAgua || !tamanhoAquario) return alert("Preencha o tipo de água e o tamanho do aquário");
        novoAnimal = new Peixe(nomeAnimal, idadeAnimal, tutor, tipoAgua, tamanhoAquario);
        break;
      default:
        return alert("Tipo de animal inválido");
    }

  setAnimais([...animais, novoAnimal]);
  setNomeAnimal("");
  setIdadeAnimal(0);
  setTutorSelecionado("");
  setTipoAnimal("Cachorro");
  setTipoAgua("");
  setTamanhoAquario("");
  setShowAnimalModal(false);
  };

  return (
  <div style={{ padding: 20 }}>
      <h1>Sistema de Cadastro</h1>

      {/* Botões para abrir modais */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setShowClienteModal(true)} style={{ marginRight: 10 }}>
          Cadastrar Cliente
        </button>
        <button onClick={() => setShowAnimalModal(true)}>
          Cadastrar Animal
        </button>
      </div>

      {/* Modal Cliente */}
      {showClienteModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{ background: "#fff", padding: 30, borderRadius: 8, minWidth: 300 }}>
            <h2>Cadastrar Cliente</h2>
            <input
              type="text"
              placeholder="Nome do cliente"
              value={nomeCliente}
              onChange={(e) => setNomeCliente(e.target.value)}
              style={{ marginBottom: 10, width: "100%" }}
            />
            <input
              type="number"
              placeholder="Idade"
              value={idadeCliente}
              onChange={(e) => setIdadeCliente(e.target.value)}
              min={0}
              style={{ marginBottom: 10, width: "100%" }}
            />
            <input
              type="text"
              placeholder="Endereço"
              value={enderecoCliente}
              onChange={(e) => setEnderecoCliente(e.target.value)}
              style={{ marginBottom: 10, width: "100%" }}
            />
            <input
              type="text"
              placeholder="CPF"
              value={cpfCliente}
              onChange={(e) => setCpfCliente(e.target.value)}
              style={{ marginBottom: 10, width: "100%" }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button onClick={() => setShowClienteModal(false)} style={{ marginRight: 10 }}>Cancelar</button>
              <button onClick={adicionarCliente}>Adicionar Cliente</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Animal */}
      {showAnimalModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{ background: "#fff", padding: 30, borderRadius: 8, minWidth: 300 }}>
            <h2>Cadastrar Animal</h2>
            <input
              type="text"
              placeholder="Nome do animal"
              value={nomeAnimal}
              onChange={(e) => setNomeAnimal(e.target.value)}
              style={{ marginBottom: 10, width: "100%" }}
            />
            <input
              type="number"
              placeholder="Idade"
              value={idadeAnimal}
              onChange={(e) => setIdadeAnimal(Number(e.target.value))}
              min={0}
              style={{ marginBottom: 10, width: "100%" }}
            />
            <select
              value={tipoAnimal}
              onChange={(e) => setTipoAnimal(e.target.value)}
              style={{ marginBottom: 10, width: "100%" }}
            >
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
              <option value="Peixe">Peixe</option>
            </select>
            {tipoAnimal === "Peixe" && (
              <>
                <input
                  type="text"
                  placeholder="Tipo de água (ex: doce, salgada)"
                  value={tipoAgua}
                  onChange={(e) => setTipoAgua(e.target.value)}
                  style={{ marginBottom: 10, width: "100%" }}
                />
                <input
                  type="text"
                  placeholder="Tamanho do aquário (ex: 20L)"
                  value={tamanhoAquario}
                  onChange={(e) => setTamanhoAquario(e.target.value)}
                  style={{ marginBottom: 10, width: "100%" }}
                />
              </>
            )}
            <select
              value={tutorSelecionado}
              onChange={(e) => setTutorSelecionado(e.target.value)}
              style={{ marginBottom: 10, width: "100%" }}
            >
              <option value="">Selecione o tutor</option>
              {clientes.map((cliente) => (
                <option key={cliente.nome} value={cliente.nome}>
                  {cliente.nome} 
                </option>
              ))}
            </select>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button onClick={() => setShowAnimalModal(false)} style={{ marginRight: 10 }}>Cancelar</button>
              <button onClick={adicionarAnimal}>Adicionar Animal</button>
            </div>
          </div>
        </div>
      )}

      {/* Listagem */}
      <div>
        <h2>Listagem de Tutores e Animais</h2>
        {animais.length === 0 && <p>Nenhum animal cadastrado.</p>}
        <ul>
          {animais.map((animal, idx) => (
            <li key={idx}>
              {animal.nome} - Tutor: {animal.tutor.nome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}