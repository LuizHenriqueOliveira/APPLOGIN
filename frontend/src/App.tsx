import React from "react";
import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { DataManager } from "./pages/DataManager";
import { PlanningView } from "./pages/PlanningView";
import { Settings } from "./pages/Settings";
import LoginAPI from "./pages/LoginAPI";
import "./index.css";

const App = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Routes wrapped in Layout */}
        <Route element={<Layout />}>
          <Route path="/data" element={<DataManager />} />
          <Route path="/planning" element={<PlanningView />} />
          <Route
            path="/dashboard"
            element={<Navigate to="/planning" replace />}
          />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {<Route path="*" element={<Navigate to="/" replace />} />}
      </Routes>
    </MemoryRouter>
  );
};

export default App;
