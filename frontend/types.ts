export interface User {
  id: string;
  username: string;
  email: string;
  // add other user fields here
}

export interface FileRecord {
  id: string;
  name: string;
  size: string;
  date: string;
  status: "completed" | "processing" | "error";
  errorMessage?: string;
  type: "csv" | "xlsx";
}

export interface ProductionData {
  id: string;
  transactionId: string;
  date: string;
  product: string;
  region: string;
  value: number;
  status: "Aprovado" | "Pendente" | "Novo" | "Cancelado";
  editable: boolean; // Controls visual locking based on group logic
}

export interface PlanningMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  progress?: number;
  progressColor?: string;
}

export interface AllocationData {
  sector: string;
  projects: number;
  percentage: number;
  color: string;
  icon: string;
}

export interface ChartData {
  month: string;
  historical: number;
  actual: number;
  projected: number;
}
