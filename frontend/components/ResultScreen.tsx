
import React from 'react';
import { SaveIcon, ShareIcon, RedoIcon } from './icons';

interface ResultScreenProps {
  onRestart: () => void;
}

const sampleText = `회의 시작 시간: 2024년 7월 28일 오후 2시\n참석자: 김민준, 이서연, 박하준\n\n[김민준]\n안녕하세요, 3분기 MVP 기획 회의를 시작하겠습니다. 먼저 지난 회의에서 논의했던 사용자 피드백부터 다시 짚어보겠습니다. 이서연님, 주요 피드백 내용 요약해주시겠어요?\n\n[이서연]\n네, 가장 많았던 피드백은 'UI가 복잡하다'는 점과 '로딩 속도가 느리다'는 두 가지였습니다. 특히 신규 사용자들이 초기 설정 단계에서 많은 어려움을 겪는 것으로 파악됐습니다.\n\n[박하준]\n로딩 속도 문제는 제가 백엔드 팀과 확인해봤는데요, 이미지 리소스 최적화와 API 호출 구조 개선으로 약 30% 정도 성능 향상이 가능할 것으로 보입니다. 이번 스프린트에서 바로 적용할 수 있도록 준비하겠습니다.\n\n[김민준]\n좋습니다. 그럼 UI 복잡성 문제는 어떻게 해결하면 좋을까요? 제 생각에는 핵심 기능 중심으로 메뉴를 재구성하고, 튜토리얼을 강화하는 방향이 어떨까 합니다.\n\n[이서연]\n동의합니다. 제가 와이어프레임 초안을 준비해봤습니다. (화면 공유) 보시는 것처럼, 메인 대시보드에서는 가장 자주 사용하는 기능 3가지만 노출하고, 나머지는 '더보기' 메뉴로 통합했습니다. 그리고 최초 접속 시 각 기능에 대한 간단한 가이드 팝업을 띄우는 방식입니다.\n\n[박하준]\n디자인이 훨씬 깔끔해졌네요. 개발 관점에서도 구현에 큰 무리는 없을 것 같습니다. 튜토리얼 데이터는 별도로 관리해야 하니, 이 부분만 기획서에 명확하게 정의해주시면 됩니다.\n\n[김민준]\n알겠습니다. 그럼 이서연님은 와이어프레임 기반으로 상세 기획서 작성 부탁드리고, 박하준님은 백엔드 최적화 작업을 진행해주세요. 다음 주 월요일까지 각자 진행 상황 공유하는 것으로 하고, 오늘 회의는 여기서 마치겠습니다. 수고하셨습니다.`;

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


const ResultScreen: React.FC<ResultScreenProps> = ({ onRestart }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[600px] space-y-6 w-full">
      <h1 className="text-3xl font-bold text-gray-800">변환 완료 🎉</h1>

      <div className="w-full h-80 bg-gray-100 rounded-2xl p-4 overflow-y-auto shadow-inner">
        <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
          {sampleText}
        </p>
      </div>

      <div className="w-full flex items-center justify-center space-x-4">
        <ActionButton icon={<SaveIcon />} label="저장하기" color="#27AE60" />
        <ActionButton icon={<ShareIcon />} label="공유하기" color="#2F80ED" />
        <ActionButton icon={<RedoIcon />} label="다시 녹음하기" onClick={onRestart} color="#828282" />
      </div>
    </div>
  );
};

export default ResultScreen;
