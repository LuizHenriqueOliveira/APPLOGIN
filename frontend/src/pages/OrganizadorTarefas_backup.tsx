import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ListaTarefas from "../components/ListaTarefas";
import Addtarefas from "../components/Addtarefas";

export default function OrganizadorTarefas() {
  const [tarefas, setTarefas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/tarefas")
      .then((response) => response.json())
      .then((data) => setTarefas(data))
      .catch((err) => console.error("Erro ao carregar tarefas:", err));
  }, []);

  function onTarefaClick(id) {
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, status: !tarefa.status };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  }

  function onDeleteTarefaClick(id) {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  }

  async function addTarefa(descricao, prazo) {
    // Sua lógica de ID original
    const gerarId = () => {
      const parteTempo = Date.now().toString(16);
      const parteAleatoria = Math.floor(Math.random() * 65535).toString(16);
      return `${parteTempo}-${parteAleatoria}`;
    };

    const novaTarefa = {
      id: gerarId(),
      descricao: descricao,
      prazo: prazo,
      status: false,
    };

    try {
      // 1. Enviamos para o backend (Django Ninja)
      const response = await fetch("http://localhost:3000/api/tarefas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaTarefa),
      });

      if (response.ok) {
        // 2. Se o Django salvou com sucesso, atualizamos a interface
        setTarefas([...tarefas, novaTarefa]);
      } else {
        console.error("Erro ao salvar no servidor:", response.statusText);
        alert("Erro ao salvar tarefa no banco de dados.");
      }
    } catch (error) {
      console.error("Erro de conexão com a API:", error);
      alert("Não foi possível conectar ao servidor.");
    }
  }

  return (
    <>
      <div className="space-y-2 min-h-screen bg-gradient-to-br from-green-50 to-teal-50 p-4 md:p-8 rounded-md">
        <div className="w-full bg-blue-900 text-center rounded-xl p-6 mb-8">
          <h1 className="text-white text-3xl font-bold">
            Organizador de Tarefas
          </h1>
          <p className="text-blue-200 mt-3 max-w-2xl mx-auto">
            Mantenha o controle de todas as suas atividades em um só lugar
          </p>
        </div>

        <Addtarefas addTarefa={addTarefa} />
        <ListaTarefas
          tarefas={tarefas}
          onTarefaClick={onTarefaClick}
          onDeleteTarefaClick={onDeleteTarefaClick}
        />

        <Link to="/">Voltar para a página inicial</Link>
      </div>
    </>
  );
}
