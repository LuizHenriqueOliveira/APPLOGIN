import React, { useState } from "react";
import {
  ChevronRight,
  Download,
  Check,
  CloudUpload,
  Upload as UploadIcon,
  FileText,
  AlertCircle,
  X,
  RefreshCw,
  Table,
  Search,
  Columns,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";

// Dados de exemplo
const files = [
  {
    id: "1",
    name: "vendas_q1_2024.csv",
    size: "2.4 MB",
    date: "15/04/2024",
    status: "completed",
  },
  {
    id: "2",
    name: "clientes_ativos.xlsx",
    size: "1.8 MB",
    date: "14/04/2024",
    status: "processing",
  },
  {
    id: "3",
    name: "orcamento_anual.csv",
    size: "3.2 MB",
    date: "13/04/2024",
    status: "error",
    error: "Formato inválido",
  },
];

const tableData = [
  {
    id: 1,
    transactionId: "TRX-001",
    date: "15/04/2024",
    product: "Software A",
    region: "Sudeste",
    value: 1500,
    status: "Aprovado",
  },
  {
    id: 2,
    transactionId: "TRX-002",
    date: "14/04/2024",
    product: "Serviço B",
    region: "Sul",
    value: 2300,
    status: "Pendente",
  },
  {
    id: 3,
    transactionId: "TRX-003",
    date: "13/04/2024",
    product: "Hardware C",
    region: "Nordeste",
    value: 8900,
    status: "Novo",
  },
  {
    id: 4,
    transactionId: "TRX-004",
    date: "12/04/2024",
    product: "Consultoria",
    region: "Centro-Oeste",
    value: 4500,
    status: "Cancelado",
  },
];

export const DataManager = () => {
  const [selectedFile, setSelectedFile] = useState("1");
  const [search, setSearch] = useState("");

  const filteredData = tableData.filter(
    (item) =>
      item.transactionId.toLowerCase().includes(search.toLowerCase()) ||
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.region.toLowerCase().includes(search.toLowerCase()),
  );

  const StatusBadge = ({ status }: { status: string }) => {
    const colors: Record<string, string> = {
      Aprovado:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      Pendente:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      Novo: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      Cancelado: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    };

    return (
      <span
        className={`px-2 py-1 rounded text-xs font-medium ${colors[status] || "bg-gray-100 text-gray-800"}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Home</span>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="font-medium text-gray-900 dark:text-white">
              Gestão de Dados
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Gestão de Dados
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Importe e visualize seus dados
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                <Download className="h-4 w-4" />
                Template
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                <Check className="h-4 w-4" />
                Processar
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="p-4 md:p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna Esquerda: Upload e Arquivos */}
          <div className="space-y-6">
            {/* Card de Upload */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-5">
              <div className="flex items-center gap-2 mb-4">
                <CloudUpload className="h-5 w-5 text-blue-500" />
                <h2 className="font-bold">Importar Arquivos</h2>
              </div>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UploadIcon className="h-8 w-8 text-blue-500" />
                </div>
                <p className="font-medium mb-1">Arraste arquivos aqui</p>
                <p className="text-sm text-gray-500 mb-4">CSV, XLSX até 50MB</p>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm">
                  Selecionar Arquivo
                </button>
              </div>
            </div>

            {/* Lista de Arquivos */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
              <div className="p-4 border-b dark:border-gray-700 flex justify-between">
                <h2 className="font-bold">Arquivos Recentes</h2>
                <button className="text-blue-600 text-sm">Ver todos</button>
              </div>
              <div className="p-3 space-y-2">
                {files.map((file) => (
                  <div
                    key={file.id}
                    onClick={() => setSelectedFile(file.id)}
                    className={`p-3 rounded-lg cursor-pointer flex items-center gap-3 ${
                      selectedFile === file.id
                        ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {file.status === "completed" ? (
                      <FileText className="h-8 w-8 text-green-500" />
                    ) : file.status === "processing" ? (
                      <div className="h-8 w-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <AlertCircle className="h-8 w-8 text-red-500" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium truncate">{file.name}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{file.size}</span>
                        <span className="mx-1">•</span>
                        <span>{file.date}</span>
                      </div>
                      {file.status === "processing" && (
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div className="bg-blue-500 h-1.5 rounded-full w-1/2"></div>
                        </div>
                      )}
                      {file.status === "error" && (
                        <p className="text-sm text-red-500 mt-1">
                          {file.error}
                        </p>
                      )}
                    </div>
                    {file.status === "completed" && (
                      <Check className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Direita: Tabela de Dados */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
              {/* Header da Tabela */}
              <div className="p-4 border-b dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded">
                      <Table className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Pré-visualização de Dados</h3>
                      <p className="text-sm text-gray-500">
                        {filteredData.length} registros
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-8 pr-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm"
                        placeholder="Filtrar..."
                      />
                    </div>
                    <button className="p-2">
                      <Columns className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Tabela */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="p-3 text-left">ID</th>
                      <th className="p-3 text-left">Data</th>
                      <th className="p-3 text-left">Produto</th>
                      <th className="p-3 text-left">Região</th>
                      <th className="p-3 text-left">Valor</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-left">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((row) => (
                      <tr
                        key={row.id}
                        className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="p-3">{row.transactionId}</td>
                        <td className="p-3">{row.date}</td>
                        <td className="p-3">{row.product}</td>
                        <td className="p-3">{row.region}</td>
                        <td className="p-3">R$ {row.value.toLocaleString()}</td>
                        <td className="p-3">
                          <StatusBadge status={row.status} />
                        </td>
                        <td className="p-3">
                          <button className="text-blue-600 text-sm">
                            Editar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Paginação */}
              <div className="p-4 border-t dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mostrando {filteredData.length} de {tableData.length}{" "}
                  registros
                </p>
                <div className="flex gap-1">
                  <button className="p-2 rounded border">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button className="px-3 py-2 bg-blue-100 text-blue-600 rounded border">
                    1
                  </button>
                  <button className="px-3 py-2 rounded border">2</button>
                  <button className="p-2 rounded border">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
