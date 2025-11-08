
import React from 'react';
import { MicIcon } from '../components/icons';

interface HomeScreenProps {
  onStart: () => void;
}

const RecentMeetingItem: React.FC<{ title: string; date: string; duration: string }> = ({ title, date, duration }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center transition-all hover:shadow-md hover:scale-[1.02]">
    <div>
      <h3 className="font-semibold text-gray-700">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{duration}</span>
  </div>
);

const HomeScreen: React.FC<HomeScreenProps> = ({ onStart }) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-12 min-h-[600px]">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">회의록 변환 앱</h1>
        <p className="text-gray-500">회의가 끝나면 30분 내로 텍스트 변환을 확인하세요.</p>
      </div>

      <button
        onClick={onStart}
        className="group flex items-center justify-center w-40 h-40 rounded-full bg-[#5A7FFB] text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 active:scale-95"
      >
        <MicIcon className="h-16 w-16 transition-transform group-hover:scale-110" />
        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:-bottom-10 text-lg font-semibold text-[#5A7FFB] transition-all duration-300">녹음 시작</span>
      </button>

      <div className="w-full space-y-4">
        <h2 className="text-lg font-semibold text-gray-700 text-left">최근 회의 기록</h2>
        <div className="space-y-3">
          <RecentMeetingItem title="3분기 MVP 기획 회의" date="2024년 7월 28일" duration="45:12" />
          <RecentMeetingItem title="디자인 시스템 리뷰" date="2024년 7월 26일" duration="1:12:30" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
