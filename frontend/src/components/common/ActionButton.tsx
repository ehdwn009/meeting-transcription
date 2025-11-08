import React from 'react';

// ResultScreen.tsx에서 잘라온 코드
const ActionButton: React.FC<{ icon: React.ReactNode; label: string; onClick?: () => void; color: string; }> = ({ icon, label, onClick, color }) => (
  <button
    onClick={onClick}
    className={`flex-1 flex flex-col items-center justify-center space-y-2 p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95`}
    style={{ backgroundColor: color }}
  >
    <div className="h-8 w-8 text-white">{icon}</div>
    <span className="font-semibold text-white">{label}</span>
  </button>
);

export default ActionButton;