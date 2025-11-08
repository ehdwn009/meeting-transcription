
import React, { useState, useCallback } from 'react';
import { AppState } from './types';
import HomeScreen from './components/HomeScreen';
import RecordingScreen from './components/RecordingScreen';
import ProcessingScreen from './components/ProcessingScreen';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.Home);

  const handleStartRecording = useCallback(() => {
    setAppState(AppState.Recording);
  }, []);

  const handleStopRecording = useCallback(() => {
    setAppState(AppState.Processing);
  }, []);

  const handleProcessingComplete = useCallback(() => {
    setAppState(AppState.Result);
  }, []);

  const handleRecordAgain = useCallback(() => {
    setAppState(AppState.Home);
  }, []);

  const renderScreen = () => {
    switch (appState) {
      case AppState.Home:
        return <HomeScreen onStart={handleStartRecording} />;
      case AppState.Recording:
        return <RecordingScreen onStop={handleStopRecording} />;
      case AppState.Processing:
        return <ProcessingScreen onComplete={handleProcessingComplete} />;
      case AppState.Result:
        return <ResultScreen onRestart={handleRecordAgain} />;
      default:
        return <HomeScreen onStart={handleStartRecording} />;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex items-center justify-center antialiased">
      <div className="w-full max-w-md mx-auto">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;
