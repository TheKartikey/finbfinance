import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import BudgetPage from './BudgetPage';
import TransactionsPage from './TransactionsPage';
import ReportsPage from './ReportsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'transactions', element: <TransactionsPage /> },
      { path: 'budgets', element: <BudgetPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);