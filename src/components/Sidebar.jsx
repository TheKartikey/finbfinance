import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    path: "/",
    icon: "📊",
    label: "Dashboard"
  },
  {
    path: "/transactions",
    icon: "💸",
    label: "Transactions"
  },
  {
    path: "/budgets",
    icon: "💰", 
    label: "Budgets"
  },
  {
    path: "/reports",
    icon: "📈",
    label: "Reports"
  },
  {
    path: "/settings",
    icon: "⚙️",
    label: "Settings"
  }
];

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <>
      {/* Mobile overlay - only shows on mobile when sidebar is open */}
      {open && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 shadow-lg transform ${
        open ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Finance Dashboard</h2>
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-4">
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg mb-2 ${
                  isActive 
                    ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
              onClick={() => window.innerWidth < 768 && toggleSidebar()}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center mr-3">
              <span className="text-lg">👤</span>
            </div>
            <div>
              <div className="font-medium text-gray-800 dark:text-white">Dileep Parmar</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">dileepparmar06@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;