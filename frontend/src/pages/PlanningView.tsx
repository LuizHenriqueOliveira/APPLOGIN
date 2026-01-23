import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Search,
  Bell,
  Upload,
  Plus,
  Filter,
  Download,
  Edit,
  Lock,
  ChevronLeft,
  ChevronRight,
  PieChart,
  Cpu,
  TrendingUp,
  Users,
  Building,
  MoreHorizontal,
  Menu,
} from "lucide-react";

// Dados simplificados
const planningData = [
  {
    title: "Orçamento Total",
    value: "R$ 1.2M",
    change: "+12%",
    positive: true,
  },
  {
    title: "Gastos Realizados",
    value: "R$ 890K",
    change: "+8%",
    positive: true,
  },
  { title: "Projetos Ativos", value: "24", change: "+2", positive: true },
  { title: "Atrasos", value: "3", change: "-1", positive: false },
];

const chartData = [
  { month: "Jan", value: 400 },
  { month: "Fev", value: 300 },
  { month: "Mar", value: 200 },
  { month: "Abr", value: 278 },
  { month: "Mai", value: 189 },
  { month: "Jun", value: 239 },
];

const allocationData = [
  {
    sector: "Tecnologia",
    percentage: 35,
    icon: <Cpu className="text-blue-500" />,
  },
  {
    sector: "Marketing",
    percentage: 25,
    icon: <TrendingUp className="text-green-500" />,
  },
  { sector: "RH", percentage: 20, icon: <Users className="text-purple-500" /> },
  {
    sector: "Operações",
    percentage: 15,
    icon: <Building className="text-orange-500" />,
  },
];

const tableData = [
  {
    id: "#PL-001",
    category: "Infraestrutura Cloud",
    responsible: "Ana Souza",
    status: "Em dia",
    planned: "R$ 150.000",
    actual: "R$ 148.500",
  },
  {
    id: "#PL-002",
    category: "Campanha Q3",
    responsible: "Carlos Lima",
    status: "Atenção",
    planned: "R$ 80.000",
    actual: "R$ 85.200",
  },
];

export const PlanningView = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="md:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-bold">Planejamento Q3 2024</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center relative">
            <Search className="absolute left-2 h-4 w-4 text-gray-400" />
            <input
              className="pl-8 pr-4 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm"
              placeholder="Buscar..."
            />
          </div>
          <button className="p-2">
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="p-4 md:p-6">
        {/* Botões de Ação */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Dashboard de Planejamento</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Gerencie orçamentos e projetos
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
              <Upload className="h-4 w-4" />
              Importar
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
              <Plus className="h-4 w-4" />
              Novo Plano
            </button>
          </div>
        </div>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {planningData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow"
            >
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${item.positive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>

        {/* Gráfico e Alocação */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Gráfico */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-4">Evolução do Orçamento</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="month" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Alocação */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Alocação por Setor</h3>
              <MoreHorizontal className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {allocationData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.sector}</p>
                    </div>
                  </div>
                  <span className="font-bold">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabela */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b dark:border-gray-700 flex justify-between">
            <h3 className="font-semibold">Detalhamento Financeiro</h3>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 text-sm">
                <Filter className="h-4 w-4" />
                Filtrar
              </button>
              <button className="flex items-center gap-1 text-sm">
                <Download className="h-4 w-4" />
                Exportar
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Categoria</th>
                  <th className="p-3 text-left">Responsável</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Planejado</th>
                  <th className="p-3 text-left">Real</th>
                  <th className="p-3 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="p-3">{row.id}</td>
                    <td className="p-3">{row.category}</td>
                    <td className="p-3">{row.responsible}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          row.status === "Em dia"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="p-3">{row.planned}</td>
                    <td className="p-3">{row.actual}</td>
                    <td className="p-3">
                      {index === 0 ? (
                        <Edit className="h-4 w-4 text-blue-500" />
                      ) : (
                        <Lock className="h-4 w-4 text-gray-400" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginação */}
          <div className="p-4 border-t dark:border-gray-700 flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mostrando 2 de 12 resultados
            </p>
            <div className="flex gap-1">
              <button className="p-1 rounded">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
                1
              </button>
              <button className="px-3 py-1 rounded">2</button>
              <button className="p-1 rounded">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
