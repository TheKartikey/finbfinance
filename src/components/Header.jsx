import { Bell } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const Notifications = ({ notifications }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      case 'tip':
        return '💡';
      default:
        return '🔔';
    }
  };

  const getBorderColor = (type) => {
    switch(type) {
      case 'warning':
        return 'border-yellow-500';
      case 'info':
        return 'border-blue-500';
      case 'tip':
        return 'border-green-500';
      default:
        return 'border-gray-500';
    }
  };

  return (
    <div className="space-y-3">
      {notifications.map(notification => (
        <div 
          key={notification.id} 
          className={`flex items-start p-3 border-l-4 ${getBorderColor(notification.type)} bg-gray-50 dark:bg-gray-700 rounded-r`}
        >
          <span className="mr-3 text-lg">{getIcon(notification.type)}</span>
          <span className="text-sm text-gray-700 dark:text-gray-200">{notification.message}</span>
        </div>
      ))}
    </div>
  );
};

const Header = ({ user, toggleSidebar }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const savingsPercentage = Math.min(Math.round((user.currentSavings / user.monthlyGoal) * 100), 100);


  const [notifications] = useState([
    { id: 1, type: 'warning', message: 'Overspending on Dining this month' },
    { id: 2, type: 'info', message: 'Salary deposit expected in 3 days' },
    { id: 3, type: 'tip', message: 'Consider transferring $200 to savings' }
  ]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white dark:bg-gray-800 shadow mb-4 relative">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
        >
          <div className="w-6 space-y-1.5">
            <span className="block h-0.5 w-full bg-gray-600 dark:bg-gray-300"></span>
            <span className="block h-0.5 w-full bg-gray-600 dark:bg-gray-300"></span>
            <span className="block h-0.5 w-full bg-gray-600 dark:bg-gray-300"></span>
          </div>
        </button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Good morning, {user.name}
        </h1>
      </div>
      
      {/* Right side */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
        {/* Savings progress */}
        <div className="text-right">
          <div className="w-48 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500" 
              style={{ width: `${savingsPercentage}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            ${user.currentSavings} of ${user.monthlyGoal} saved ({savingsPercentage}%)
          </span>
        </div>
        
        {/* Notifications */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Bell className='text-gray-600 dark:text-gray-300'/>
            {/* Unread notification indicator */}
            {notifications.some(n => !n.read) && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          
          {/* Dropdown with Notifications component */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-50 border border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Alerts & Tips</h3>
              </div>
              <div className="p-4">
                <Notifications notifications={notifications} />
              </div>
            </div>
          )}
        </div>
        
        {/* User avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;