import { Trash2, Check } from "lucide-react";

export default function ListaTarefas(props) {
  return (
    <>
      <div className="space-y-4 w-full bg-blue-900 text-center rounded-xl p-6 mb-8 text-white">
        <h1 className=" text-white text-2xl font-bold mb-4">
          Lista de Tarefas
        </h1>
        <ul className="space-y-1">
          {props.tarefas.map((tarefa) => (
            <li key={tarefa.id} className="flex items-center">
              <button
                onClick={() => props.onTarefaClick(tarefa.id)}
                className={`flex-1 w-4/5 text-left p-2 mb-2 bg-blue-700 rounded hover:bg-blue-600 transition-colors ${
                  tarefa.status ? "line-through bg-gray-600" : ""
                }`}
              >
                Descrição: {tarefa.descricao}- Prazo: {tarefa.prazo}
              </button>
              <button
                className="p-2 text-white hover:text-red-500 hover:bg-red-900/30 rounded transition-all"
                title="Excluir tarefa"
                onClick={() => props.onDeleteTarefaClick(tarefa.id)}
              >
                <Trash2 />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
