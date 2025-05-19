import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TransactionsPage = ({ toggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-06-15', description: 'Grocery Store', type: 'debit', category: 'Food', amount: 85.50, status: 'completed' },
    { id: 2, date: '2023-06-14', description: 'Salary Deposit', type: 'credit', category: 'Income', amount: 4500.00, status: 'completed' },
    { id: 3, date: '2023-06-12', description: 'Electric Bill', type: 'debit', category: 'Utilities', amount: 120.75, status: 'pending' },
    { id: 4, date: '2023-06-10', description: 'Dinner Out', type: 'debit', category: 'Dining', amount: 65.30, status: 'completed' },
    { id: 5, date: '2023-06-08', description: 'Gas Station', type: 'debit', category: 'Transportation', amount: 45.00, status: 'completed' },
    { id: 6, date: '2023-06-05', description: 'Online Shopping', type: 'debit', category: 'Shopping', amount: 129.99, status: 'completed' },
    { id: 7, date: '2023-06-03', description: 'Freelance Work', type: 'credit', category: 'Income', amount: 750.00, status: 'pending' },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    type: 'debit',
    category: 'Food'
  });

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      description: newTransaction.description,
      type: newTransaction.type,
      category: newTransaction.category,
      amount: parseFloat(newTransaction.amount),
      status: 'completed'
    };
    setTransactions([transaction, ...transactions]);
    setNewTransaction({ description: '', amount: '', type: 'debit', category: 'Food' });
  };

  const filteredTransactions = transactions.filter(t => 
    activeTab === 'all' || t.status === activeTab
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Transactions</h1>
          <div className="flex flex-wrap items-center justify-between mt-4">
            <div className="flex space-x-2 mb-2 sm:mb-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                }`}
              >
                All Transactions
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeTab === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeTab === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                }`}
              >
                Pending
              </button>
            </div>
            
            <div className="w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search transactions..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Add New Transaction</h2>
            <form onSubmit={handleAddTransaction} className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                <input
                  type="text"
                  value={newTransaction.description}
                  onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount</label>
                <input
                  type="number"
                  step="0.01"
                  value={newTransaction.amount}
                  onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
                <select
                  value={newTransaction.type}
                  onChange={(e) => setNewTransaction({...newTransaction, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm"
                >
                  <option value="debit">Expense</option>
                  <option value="credit">Income</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm"
                >
                  Add Transaction
                </button>
              </div>
            </form>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {formatDate(transaction.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {transaction.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {transaction.category}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                      transaction.type === 'credit' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {transaction.type === 'credit' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;