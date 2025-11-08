import React, { useState, useEffect, useRef } from 'react';

interface ProcessingScreenProps {
  onComplete: () => void;
}

const sampleText = `회의 시작 시간: 2024년 7월 28일 오후 2시\n참석자: 김민준, 이서연, 박하준\n\n[김민준]\n안녕하세요, 3분기 MVP 기획 회의를 시작하겠습니다. 먼저 지난 회의에서 논의했던 사용자 피드백부터 다시 짚어보겠습니다. 이서연님, 주요 피드백 내용 요약해주시겠어요?\n\n[이서연]\n네, 가장 많았던 피드백은 'UI가 복잡하다'는 점과 '로딩 속도가 느리다'는 두 가지였습니다. 특히 신규 사용자들이 초기 설정 단계에서 많은 어려움을 겪는 것으로 파악됐습니다.\n\n[박하준]\n로딩 속도 문제는 제가 백엔드 팀과 확인해봤는데요, 이미지 리소스 최적화와 API 호출 구조 개선으로 약 30% 정도 성능 향상이 가능할 것으로 보입니다. 이번 스프린트에서 바로 적용할 수 있도록 준비하겠습니다.\n\n[김민준]\n좋습니다. 그럼 UI 복잡성 문제는 어떻게 해결하면 좋을까요? 제 생각에는 핵심 기능 중심으로 메뉴를 재구성하고, 튜토리얼을 강화하는 방향이 어떨까 합니다.\n\n[이서연]\n동의합니다. 제가 와이어프레임 초안을 준비해봤습니다. (화면 공유) 보시는 것처럼, 메인 대시보드에서는 가장 자주 사용하는 기능 3가지만 노출하고, 나머지는 '더보기' 메뉴로 통합했습니다. 그리고 최초 접속 시 각 기능에 대한 간단한 가이드 팝업을 띄우는 방식입니다.\n\n[박하준]\n디자인이 훨씬 깔끔해졌네요. 개발 관점에서도 구현에 큰 무리는 없을 것 같습니다. 튜토리얼 데이터는 별도로 관리해야 하니, 이 부분만 기획서에 명확하게 정의해주시면 됩니다.\n\n[김민준]\n알겠습니다. 그럼 이서연님은 와이어프레임 기반으로 상세 기획서 작성 부탁드리고, 박하준님은 백엔드 최적화 작업을 진행해주세요. 다음 주 월요일까지 각자 진행 상황 공유하는 것으로 하고, 오늘 회의는 여기서 마치겠습니다. 수고하셨습니다.`;

const emotionalMessages = [
  "조금만 기다려 주세요 😊",
  "지금 12분 구간을 정리하고 있어요 🪴",
  "고마워요, 거의 다 완료되어가고 있어요! 🙌",
  "중요한 키워드를 추출하고 있어요. ✨",
  "목소리를 텍스트로 변환 완료! 🎉"
];

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

const ProcessingScreen: React.FC<ProcessingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTranscribedText(sampleText);
          setTimeout(onComplete, 1000);
          return 100;
        }
        const newProgress = prev + 1;
        const textToShow = sampleText.substring(0, Math.floor((sampleText.length * newProgress) / 100));
        setTranscribedText(textToShow);
        return newProgress;
      });
    }, 80); // Simulate 8 seconds processing time

    const messageTimer = setInterval(() => {
        setMessageIndex(prev => (prev + 1) % emotionalMessages.length);
    }, 2000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);

  useEffect(() => {
    if (showDetails && contentRef.current) {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [transcribedText, showDetails]);

  const getTimelineStatus = (start: number, end: number): 'done' | 'processing' | 'pending' => {
      if (progress > end) return 'done';
      if (progress >= start && progress <= end) return 'processing';
      return 'pending';
  }

  const getGradientClass = () => {
    if (progress < 33) return 'from-gray-100 to-gray-200';
    if (progress < 66) return 'from-gray-100 to-blue-200';
    return 'from-blue-200 to-orange-200';
  }

  return (
    <div className={`bg-gradient-to-br ${getGradientClass()} rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[600px] space-y-8 transition-all duration-1000`}>
        <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-gray-800">{progress}%</div>
            <p className="text-lg text-gray-600 h-8 transition-opacity duration-500">{emotionalMessages[messageIndex]}</p>
        </div>

        <div className="w-full px-4">
            <div className="h-4 bg-white/50 rounded-full overflow-hidden shadow-inner">
                <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-150 ease-linear"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl w-full max-w-xs space-y-4 shadow-lg">
            <TimelineItem label="00 ~ 10분" status={getTimelineStatus(0, 33)} />
            <TimelineItem label="10 ~ 20분" status={getTimelineStatus(34, 66)} />
            <TimelineItem label="20 ~ 30분" status={getTimelineStatus(67, 100)} />
        </div>

        <div className="w-full max-w-xs flex flex-col items-center">
            <button
                onClick={() => setShowDetails(prev => !prev)}
                className="bg-white/70 backdrop-blur-sm text-gray-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-white transition-all duration-300 active:scale-95 flex items-center justify-center"
            >
                실시간 현황
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            <div className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${showDetails ? 'max-h-[220px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl w-full h-[200px] flex flex-col shadow-lg">
                     <div ref={contentRef} className="flex-1 bg-gray-100/50 rounded-lg p-3 overflow-y-auto shadow-inner text-left">
                        <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
                            {transcribedText}
                            <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse ml-1 rounded-sm"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProcessingScreen;