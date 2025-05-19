import React, { useState } from 'react';
import Header from '../components/Header';
import FinancialCards from '../components/FinancialCards';
import Charts from '../components/Charts';
import TransactionsTable from '../components/TransactionsTable';
import Notifications from '../components/Notifications';
import BudgetAssistant from '../components/BudgetAssistant';
import { userData } from '../components/UserData';

const Dashboard = ({ toggleSidebar }) => {
  const [timeFrame, setTimeFrame] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState(null);


  

  return (
    <div className="p-4 space-y-6">
      
      
      <FinancialCards 
        timeFrame={timeFrame}
        setTimeFrame={setTimeFrame}
        totalBalance={userData.totalBalance}
        monthlyIncome={userData.monthlyIncome}
        monthlyExpenses={userData.monthlyExpenses}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Charts 
            income={userData.monthlyIncome}
            expenses={userData.monthlyExpenses}
            spendingByCategory={userData.spendingByCategory}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        
        <div className="space-y-6">
          <Notifications notifications={userData.notifications} />
          <BudgetAssistant 
            spending={userData.spendingByCategory} 
            budget={userData.budget} 
          />
        </div>
      </div>
      
      <TransactionsTable transactions={userData.transactions} />
    </div>
  );
};

export default Dashboard;