import React from 'react';

// ProcessingScreen.tsx에서 잘라온 코드
const TimelineItem: React.FC<{ label: string; status: 'done' | 'processing' | 'pending' }> = ({ label, status }) => {
  const getIcon = () => {
    switch (status) {
      case 'done': return '✅';
      case 'processing': return '🔄';
      case 'pending': return '⏳';
    }
  };
  const getTextColor = () => {
     switch (status) {
      case 'done': return 'text-green-500';
      case 'processing': return 'text-blue-500';
      case 'pending': return 'text-gray-400';
    }
  }

  return (
    <div className={`flex items-center space-x-2 transition-colors duration-500 ${getTextColor()}`}>
      <span className={`${status === 'processing' ? 'animate-spin' : ''}`}>{getIcon()}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
};

export default TimelineItem;