import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  PieChart,
  Calendar,
  Database,
  Settings,
  LogOut,
  User,
} from "lucide-react";

// Dados do usuário (substitua por dados reais se necessário)
const CURRENT_USER = {
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Planner",
  role: "Administrador",
};

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  // Itens do menu
  const menuItems = [
    {
      to: "/dashboard",
      icon: <PieChart className="h-5 w-5" />,
      label: "Dashboard",
    },
    {
      to: "/planning",
      icon: <Calendar className="h-5 w-5" />,
      label: "Planejamento",
    },
    {
      to: "/data",
      icon: <Database className="h-5 w-5" />,
      label: "Gestão de Dados",
    },
    {
      to: "/settings",
      icon: <Settings className="h-5 w-5" />,
      label: "Configurações",
    },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex-shrink-0">
      <div className="h-full flex flex-col p-4">
        {/* Perfil do Usuário */}
        <div className="flex items-center gap-3 mb-8 p-2">
          <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 dark:text-white">
              Planner App
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {CURRENT_USER.role}
            </p>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Botão Sair */}
        <div className="mt-auto pt-4 border-t dark:border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="text-sm font-medium">Sair</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};
