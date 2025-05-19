import React from 'react';

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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Alerts & Tips</h3>
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
    </div>
  );
};

export default Notifications;