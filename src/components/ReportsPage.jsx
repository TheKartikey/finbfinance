import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const ReportsPage = ({ toggleSidebar }) => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [activeReport, setActiveReport] = useState('spending');

  // Sample data
  const monthlyData = [
    { name: 'Jan', income: 4000, expenses: 2400 },
    { name: 'Feb', income: 3000, expenses: 1398 },
    { name: 'Mar', income: 2000, expenses: 9800 },
    { name: 'Apr', income: 2780, expenses: 3908 },
    { name: 'May', income: 1890, expenses: 4800 },
    { name: 'Jun', income: 2390, expenses: 3800 },
  ];

  const yearlyData = [
    { name: '2020', income: 40000, expenses: 24000 },
    { name: '2021', income: 30000, expenses: 13980 },
    { name: '2022', income: 20000, expenses: 98000 },
    { name: '2023', income: 27800, expenses: 39080 },
  ];

  const categoryData = [
    { name: 'Housing', value: 1200 },
    { name: 'Food', value: 800 },
    { name: 'Transport', value: 300 },
    { name: 'Utilities', value: 400 },
    { name: 'Entertainment', value: 500 },
  ];

  const data = timeRange === 'monthly' ? monthlyData : yearlyData;

  return (
    <div className="p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Financial Reports</h1>
          <div className="flex flex-wrap items-center justify-between mt-4 gap-2">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveReport('spending')}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeReport === 'spending' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                }`}
              >
                Spending Trends
              </button>
              <button
                onClick={() => setActiveReport('categories')}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeReport === 'categories' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                }`}
              >
                Category Analysis
              </button>
              <button
                onClick={() => setActiveReport('savings')}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeReport === 'savings' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                }`}
              >
                Savings Progress
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => setTimeRange('monthly')}
                className={`px-4 py-2 text-sm rounded-md ${
                  timeRange === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setTimeRange('yearly')}
                className={`px-4 py-2 text-sm rounded-md ${
                  timeRange === 'yearly' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="p-4">
          {activeReport === 'spending' && (
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                {timeRange === 'monthly' ? 'Monthly' : 'Yearly'} Income vs Expenses
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        borderColor: '#e5e7eb',
                        borderRadius: '0.375rem',
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                      }}
                      formatter={(value) => [`$${value}`, 'Amount']}
                    />
                    <Legend />
                    <Bar dataKey="income" fill="#4CAF50" name="Income" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="#F44336" name="Expenses" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeReport === 'categories' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Spending by Category</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={categoryData}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis type="number" stroke="#6b7280" />
                      <YAxis dataKey="name" type="category" stroke="#6b7280" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          borderColor: '#e5e7eb',
                          borderRadius: '0.375rem',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                        }}
                        formatter={(value) => [`$${value}`, 'Amount']}
                      />
                      <Bar dataKey="value" fill="#8884d8" name="Spending" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Category Trends</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="name" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          borderColor: '#e5e7eb',
                          borderRadius: '0.375rem',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                        }}
                        formatter={(value) => [`$${value}`, 'Amount']}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="expenses" stroke="#8884d8" name="Expenses" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeReport === 'savings' && (
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Savings Progress</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeRange === 'monthly' ? monthlyData : yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        borderColor: '#e5e7eb',
                        borderRadius: '0.375rem',
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                      }}
                      formatter={(value) => [`$${value}`, 'Amount']}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="income" 
                      stroke="#4CAF50" 
                      name="Income" 
                      strokeWidth={2} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expenses" 
                      stroke="#F44336" 
                      name="Expenses" 
                      strokeWidth={2} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey={(item) => item.income - item.expenses}
                      stroke="#2196F3" 
                      name="Savings" 
                      strokeWidth={3} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          <div className="mt-6 bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Export Reports</h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm">
                Download PDF
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">
                Export to Excel
              </button>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm">
                Share Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;