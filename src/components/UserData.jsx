 export const userData = {
    name: 'Dileep Parmar',
    avatar: 'https://i.pravatar.cc/150?img=5',
    monthlyGoal: 1500,
    currentSavings: 980,
    totalBalance: 12500.75,
    monthlyIncome: 4500.00,
    monthlyExpenses: 3520.25,
    transactions: [
      { id: 1, date: '2023-05-15', description: 'Grocery Store', type: 'debit', category: 'Food', amount: 85.50 },
      { id: 2, date: '2023-05-14', description: 'Salary Deposit', type: 'credit', category: 'Income', amount: 4500.00 },
      { id: 3, date: '2023-05-12', description: 'Electric Bill', type: 'debit', category: 'Utilities', amount: 120.75 },
      { id: 4, date: '2023-05-10', description: 'Dinner Out', type: 'debit', category: 'Dining', amount: 65.30 },
      { id: 5, date: '2023-05-08', description: 'Gas Station', type: 'debit', category: 'Transportation', amount: 45.00 },
      { id: 6, date: '2023-05-05', description: 'Online Shopping', type: 'debit', category: 'Shopping', amount: 129.99 },
      { id: 7, date: '2023-05-03', description: 'Freelance Work', type: 'credit', category: 'Income', amount: 750.00 },
      { id: 8, date: '2023-05-01', description: 'Rent Payment', type: 'debit', category: 'Housing', amount: 1200.00 },
    ],
    spendingByCategory: {
      Housing: 1200,
      Food: 320,
      Transportation: 145,
      Utilities: 220,
      Dining: 180,
      Shopping: 350,
      Entertainment: 210,
      Other: 895.25
    },
    budget: {
      Housing: 1300,
      Food: 400,
      Transportation: 200,
      Utilities: 250,
      Dining: 200,
      Shopping: 400,
      Entertainment: 250,
      Other: 1000
    },
    notifications: [
      { id: 1, type: 'warning', message: 'Overspending on Dining this month' },
      { id: 2, type: 'info', message: 'Salary deposit expected in 3 days' },
      { id: 3, type: 'tip', message: 'Consider transferring $200 to savings' }
    ]
  };
