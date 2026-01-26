import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  BarChart3,
  HelpCircle,
  Sun,
  Mail,
  Lock,
  EyeOff,
  ArrowRight,
  PieChart, // Usando PieChart como substituto para Analytics
  UserRound,
  Eye,
} from "lucide-react";

export const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    let result;

    if (isLogin) {
      result = await login(username, password);
    } else {
      result = await register(username, email, password);
    }

    setLoading(false);

    if (result.success) {
      navigate("/planning");
    } else {
      setError(
        result.error || "An unexpected error occurred. Please try again.",
      );
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-200">
      {/* Header Simplificado */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-card-light/80 dark:bg-surface-dark/80 backdrop-blur-md px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            <PieChart className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            Planner<span className="text-primary">App</span>
          </h1>
        </div>
        <nav className="flex gap-2">
          <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <HelpCircle className="h-5 w-5 text-slate-500" />
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Sun className="h-5 w-5 text-slate-500" />
          </button>
        </nav>
      </header>

      <main className="flex flex-1 flex-col lg:flex-row">
        {/* Lado Esquerdo: Formulário */}
        <section className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-20 xl:px-32 max-w-2xl mx-auto w-full">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-black tracking-tight mb-3">
              Bem-vindo
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Acesse seu dashboard de planejamento.
            </p>
            <p className="text-red-600 text-sm mt-2 font-medium" role="alert">
              {" "}
              {error}{" "}
            </p>
          </div>
          {/*Formulário de login */}
          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            {/* Campo de usuário */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-sm font-semibold ml-1">
                User
              </label>
              <div className="relative">
                <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  id="username"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark py-3 pl-12 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none h-12 transition-all"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* Campo de senha */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between px-1">
                <label htmlFor="password" className="text-sm font-semibold">
                  Senha
                </label>
                <a
                  className="text-sm font-semibold text-primary hover:underline"
                  href="#"
                >
                  Esqueceu?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  id="password"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark py-3 pl-12 pr-12 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none h-12 transition-all"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-base font-bold text-white shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all">
              Entrar no Dashboard
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </section>

        {/* Lado Direito: Hero (Vazio para manter layout original) */}
        <section className="hidden lg:block lg:flex-1 bg-slate-900" />
      </main>
    </div>
  );
};
