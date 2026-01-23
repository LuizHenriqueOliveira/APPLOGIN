export const CURRENT_USER = {
  id: "u1",
  name: "Alexandre Silva",
  email: "alexandre@planner.app",
  role: "Admin Workspace",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDxOtf4nAdS32weCVFedsW9-nRkmx7SSQIE8A--I6t0nFv8ezujUzGrdU-Z9MX0VAy1142XscgS_EJ9klcp9Byaa2uj2tCbGdNBXnHw_WmPCUD7n1TVaZiYe1-sVldbyj7P41pCuUbPX9kHWdzuYQ21Coy6u3WMQ8gn3_iBBpJdfPCIElbKy9U4PBJ7rfENR63Giuh1WWYnfO8OTKgwnLe8A3RYuJIZCba33mCc4zl460JxPjbID7KPBy4UZpA2NL6qw1uPLBtFdKpN",
};

export const RECENT_FILES = [
  {
    id: "1",
    name: "vendas_q1_2024.csv",
    size: "2.4 MB",
    date: "Hoje, 10:30",
    status: "completed",
    type: "csv",
  },
  {
    id: "2",
    name: "planejamento_anual.xlsx",
    size: "5.1 MB",
    date: "Hoje, 10:35",
    status: "processing",
    type: "xlsx",
  },
  {
    id: "3",
    name: "dados_corrompidos.csv",
    size: "1.2 MB",
    date: "Ontem",
    status: "error",
    errorMessage: "Erro na linha 42",
    type: "csv",
  },
];

export const MOCK_TABLE_DATA = [
  {
    id: "1",
    transactionId: "#TR-8832",
    date: "12/03/2024",
    product: "Software License - Pro",
    region: "São Paulo, SP",
    value: 1250.0,
    status: "Aprovado",
    editable: true,
  },
  {
    id: "2",
    transactionId: "#TR-8833",
    date: "12/03/2024",
    product: "Consultoria Hora/H",
    region: "Rio de Janeiro, RJ",
    value: 450.0,
    status: "Pendente",
    editable: false,
  },
  {
    id: "3",
    transactionId: "#TR-8834",
    date: "11/03/2024",
    product: "Suporte Técnico Mensal",
    region: "Curitiba, PR",
    value: 2000.0,
    status: "Aprovado",
    editable: true,
  },
  {
    id: "4",
    transactionId: "#TR-8835",
    date: "11/03/2024",
    product: "Setup Cloud AWS",
    region: "Remoto",
    value: 5400.0,
    status: "Novo",
    editable: true,
  },
  {
    id: "5",
    transactionId: "#TR-8836",
    date: "10/03/2024",
    product: "Manutenção Corretiva",
    region: "Belo Horizonte, MG",
    value: 890.0,
    status: "Cancelado",
    editable: false,
  },
  {
    id: "6",
    transactionId: "#TR-8837",
    date: "09/03/2024",
    product: "DevOps Sprint",
    region: "São Paulo, SP",
    value: 3200.0,
    status: "Aprovado",
    editable: true,
  },
];

export const PLANNING_METRICS = [
  {
    title: "Orçamento Planejado",
    value: "R$ 1.2M",
    change: "+12%",
    isPositive: true,
    progress: 70,
    progressColor: "bg-primary",
  },
  {
    title: "Executado",
    value: "R$ 800k",
    change: "+8%",
    isPositive: true,
    progress: 65,
    progressColor: "bg-green-500",
  },
  {
    title: "Desvio",
    value: "-5%",
    change: "-2%",
    isPositive: false,
    progress: 5,
    progressColor: "bg-red-500",
  },
  {
    title: "Projeção Q4",
    value: "R$ 1.5M",
    change: "Est.",
    isPositive: true,
    progress: 45,
    progressColor: "bg-orange-400",
  },
];

export const ALLOCATION_DATA = [
  {
    sector: "Marketing",
    projects: 12,
    percentage: 35,
    color: "text-purple-600 dark:text-purple-400",
    icon: "campaign",
  },
  {
    sector: "Tecnologia",
    projects: 8,
    percentage: 28,
    color: "text-blue-600 dark:text-blue-400",
    icon: "code",
  },
  {
    sector: "Recursos Humanos",
    projects: 5,
    percentage: 15,
    color: "text-green-600 dark:text-green-400",
    icon: "group",
  },
  {
    sector: "Operações",
    projects: 10,
    percentage: 22,
    color: "text-orange-600 dark:text-orange-400",
    icon: "inventory_2",
  },
];

export const CHART_DATA = [
  { month: "Jan", historical: 400, actual: 0, projected: 0 },
  { month: "Fev", historical: 550, actual: 0, projected: 0 },
  { month: "Mar", historical: 450, actual: 0, projected: 0 },
  { month: "Abr", historical: 0, actual: 750, projected: 0 },
  { month: "Mai", historical: 0, actual: 0, projected: 600 },
  { month: "Jun", historical: 0, actual: 0, projected: 800 },
];
