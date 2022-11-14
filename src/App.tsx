import { FC, useState, useCallback, useEffect } from "react";
import DashboardPage from "@pages/Dashboard";
import AppTheme from "@components/AppTheme";
import "./App.css";

const App: FC = () => {
  return (
    <AppTheme>
      <DashboardPage />
    </AppTheme>
  );
};

export default App;
