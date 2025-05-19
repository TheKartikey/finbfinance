// router.js
import React, { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import BudgetPage from './components/BudgetPage';
import TransactionsTable from './components/TransactionsTable';
import ReportsPage from './components/ReportsPage';

const RouterWrapper = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      ),
      children: [
        { index: true, element: <Dashboard toggleSidebar={toggleSidebar} /> },
        { path: 'transactions', element: <TransactionsTable toggleSidebar={toggleSidebar} /> },
        { path: 'budgets', element: <BudgetPage toggleSidebar={toggleSidebar} /> },
        { path: 'reports', element: <ReportsPage toggleSidebar={toggleSidebar} /> },
        { path: 'settings', element: <Settings toggleSidebar={toggleSidebar} /> },
      ],
    },
  ]);

  return router;
};

export default RouterWrapper;
