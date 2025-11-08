
import React, { useState, useEffect } from 'react';

interface RecordingScreenProps {
  onStop: () => void;
}

const Waveform: React.FC = () => (
    <div className="relative w-full h-40 overflow-hidden">
        {[...Array(3)].map((_, i) => (
            <div key={i} className="absolute inset-0 flex items-center justify-center">
                <div 
                    className="w-full h-px bg-blue-300" 
                    style={{
                        animation: `wave 1.5s ease-in-out ${i * 0.2}s infinite`,
                        transformOrigin: 'center'
                    }}
                />
            </div>
        ))}
        <style>{`
            @keyframes wave {
                0%, 100% { transform: scaleY(1) translateY(0); opacity: 0.8; }
                50% { transform: scaleY(80) translateY(calc(var(--wave-dir, 1) * -2px)); opacity: 0.2; }
            }
        `}</style>
    </div>
);


const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds]
    .map(val => val.toString().padStart(2, '0'))
    .join(':');
};

const RecordingScreen: React.FC<RecordingScreenProps> = ({ onStop }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-800 text-white rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-between min-h-[600px] space-y-8">
      <div className="w-full text-center">
        <p className="text-gray-400 text-lg">녹음 중...</p>
        <p className="text-6xl font-mono font-bold tracking-wider">{formatTime(elapsedTime)}</p>
      </div>

      <div className="w-full flex items-center justify-center">
          <Waveform />
      </div>

      <button
        onClick={onStop}
        style={{ backgroundColor: '#EB5757' }}
        className="w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/60 active:scale-95"
      >
        <div className="w-10 h-10 bg-white rounded-lg"></div>
      </button>
    </div>
  );
};

export default RecordingScreen;
