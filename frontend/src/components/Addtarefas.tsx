export default function Addtarefas(props) {
  return (
    <>
      <div className="w-full bg-blue-900 text-center rounded-xl p-6 mb-8 flex flex-col items-center">
        <h1 className="text-white text-2xl font-bold mb-4">Adicionar tarefa</h1>

        <div className="w-full flex flex-col md:flex-row items-end gap-4">
          {/* Campo Descrição */}
          <div className="flex flex-col w-full md:w-8/12 text-left">
            <label htmlFor="desc" className="text-white text-sm mb-1 ml-1">
              Descrição
            </label>
            <input
              id="desc"
              type="text"
              placeholder="adicione a descrição da tarefa"
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Campo Data */}
          <div className="flex flex-col w-full md:w-3/12 text-left">
            <label htmlFor="data" className="text-white text-sm mb-1 ml-1">
              Prazo
            </label>
            <input
              id="data"
              type="date"
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botão - Alinhado ao final para acompanhar a altura dos inputs com label */}
          <button
            className="w-full md:w-1/12 bg-green-600 text-white p-2 h-[42px] rounded-lg hover:bg-green-700 transition-colors font-bold"
            onClick={() => {
              const descricao = document.getElementById("desc").value;
              const prazo = document.getElementById("data").value;
              props.addTarefa(descricao, prazo);
            }}
          >
            incluir tarefa
          </button>
        </div>
      </div>
    </>
  );
}
