import React from 'react';

const BudgetAssistant = ({ spending, budget }) => {
  const categories = Object.keys(budget);
  
  const getProgressPercentage = (category) => {
    const spent = spending[category] || 0;
    return Math.min((spent / budget[category]) * 100, 100);
  };
  
  const getProgressColor = (percentage) => {
    if (percentage > 90) return 'bg-red-500';
    if (percentage > 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Monthly Budget</h3>
      <div className="space-y-4">
        {categories.map(category => {
          const percentage = getProgressPercentage(category);
          const color = getProgressColor(percentage);
          
          return (
            <div key={category} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-200">{category}</span>
                <span className="text-gray-500 dark:text-gray-400">
                  ${spending[category] || 0} of ${budget[category]}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${color}`} 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetAssistant;