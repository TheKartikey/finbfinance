import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const BudgetPage = ({ toggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('current');
  const [budgets, setBudgets] = useState({
    current: {
      Housing: 1300,
      Food: 400,
      Transportation: 200,
      Utilities: 250,
      Dining: 200,
      Shopping: 400,
      Entertainment: 250,
      Other: 1000
    },
    next: {
      Housing: 1400,
      Food: 450,
      Transportation: 220,
      Utilities: 250,
      Dining: 180,
      Shopping: 350,
      Entertainment: 200,
      Other: 900
    }
  });

  const [spending] = useState({
    Housing: 1200,
    Food: 420,
    Transportation: 180,
    Utilities: 230,
    Dining: 210,
    Shopping: 380,
    Entertainment: 220,
    Other: 950
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FF6B6B', '#4ECDC4'];

  const handleBudgetChange = (category, value) => {
    setBudgets(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [category]: parseFloat(value) || 0
      }
    }));
  };

  const budgetData = Object.entries(budgets[activeTab]).map(([name, value]) => ({
    name,
    value,
    spent: spending[name] || 0,
    remaining: value - (spending[name] || 0)
  }));

  const pieData = Object.entries(budgets[activeTab]).map(([name, value]) => ({
    name,
    value
  }));

  return (
    <div className="p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Budget Planning</h1>
          <div className="flex space-x-2 mt-4">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-4 py-2 text-sm rounded-md ${
                activeTab === 'current' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              Current Month
            </button>
            <button
              onClick={() => setActiveTab('next')}
              className={`px-4 py-2 text-sm rounded-md ${
                activeTab === 'next' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              Next Month
            </button>
          </div>
        </div>

        <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                {activeTab === 'current' ? 'Current' : 'Next'} Month Budget Allocation
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-600">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Budgeted</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Spent</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Remaining</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {budgetData.map((item) => (
                      <tr key={item.name} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          <input
                            type="number"
                            value={item.value}
                            onChange={(e) => handleBudgetChange(item.name, e.target.value)}
                            className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700"
                          />
                        </td>
                        <td className={`px-4 py-3 whitespace-nowrap text-sm ${
                          item.spent > item.value ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-300'
                        }`}>
                          ${item.spent.toFixed(2)}
                        </td>
                        <td className={`px-4 py-3 whitespace-nowrap text-sm ${
                          item.remaining < 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                        }`}>
                          ${item.remaining.toFixed(2)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                (item.spent / item.value) > 0.9 ? 'bg-red-500' : 
                                (item.spent / item.value) > 0.7 ? 'bg-yellow-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${Math.min((item.spent / item.value) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg h-full">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Budget Distribution</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Budget']}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm">
                  Save Budget Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPage;