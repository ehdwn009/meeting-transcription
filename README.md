# 회의록 변환 앱 (가칭)

> “속도를 줄이는 대신, 신뢰를 높이는 기술을 만들자.”
>
> 단순히 빠른 앱이 아니라, ‘기다림이 불안하지 않은 경험’을 디자인하는 것이 이 프로젝트의 본질입니다.

회의가 끝나자마자, 기다림 없이 회의록을 완성해주는 스마트 자동 변환 시스템입니다.

---

## 1. 프로젝트 배경 (Background)

대부분의 회의 기록 앱은 녹음 후 일괄 변환 방식으로, 회의가 끝난 뒤에도 오랜 대기 시간이 필요합니다. 특히 상용 서비스는 고속 버전 사용량이 제한되어 있어 실시간성이 떨어집니다.

회의가 끝나면 30분 안에 회의록을 완성해야 하는 업무 환경 속에서, “조금이라도 더 빠르게 텍스트가 생성되는 경험”이 필요했습니다.

따라서, 회의 중에 실시간으로 변환이 누적되거나, 최소한 회의 종료 직후 바로 변환이 진행되는 MVP를 직접 만들어보기로 했습니다.

## 2. 프로젝트 목표 (Goals)

| 구분 | 내용 |
| :--- | :--- |
| 🎯 핵심 목표 | 회의 종료 후 30분 내 텍스트 변환 완료 |
| 🪄 사용자 경험 목표 | 변환 중에도 **“안심감”**을 주는 UX (진행률·감정 피드백 디자인) |
| ⚙️ 기술 목표 | AI 기반 음성-텍스트 변환(STT) 파이프라인 + 실시간 UI 업데이트 |
| 🧠 학습 목표 | AI 빌더(Gemini, ChatGPT, Copilot 등) 기반으로 MVP를 자체 설계·개발 |

## 3. 현재 진행 현황 (Progress Snapshot)

| 구분 | 상태 | 설명 |
| :--- | :--- | :--- |
| 아이디어 정리 | ✅ | 프로젝트 목적·가치 확립 |
| UX Flow 설계 | ✅ | Figma 기반 4단 구조 완성 |
| 감정 피드백 디자인 | ✅ | Processing 화면 감정 곡선 설계 |
| Gemini MVP 생성 | ✅ | AI가 생성한 실동작 프론트 완성 |
| GitHub 연동 | 🔄 | 모노레포 구조 / Actions 세팅 중 |
| 백엔드 Mock API | 🟡 | Express+TypeScript 설계 중 |

## 4. 로컬에서 실행하기 (Local Setup)

이 프로젝트는 `frontend` 폴더에 React(Vite) 코드를, 향후 `backend` 폴더에 서버 코드를 관리하는 **모노레포(Monorepo)** 구조입니다.

1.  **프론트엔드 폴더로 이동**
    ```bash
    cd frontend
    ```

2.  **의존성 설치**
    ```bash
    npm install
    ```

3.  **환경 변수 설정**
    `frontend` 폴더에 `.env.local` 파일을 생성하고, Gemini API 키를 입력합니다.
    ```env
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```

4.  **개발 서버 실행**
    ```bash
    npm run dev
    ```

## 5. 기술 스택 (Tech Stack)

| 영역 | 사용 도구 | 비고 |
| :--- | :--- | :--- |
|  **Frontend** | Google AI Studio (Gemini), Vite/React | MVP 자동 생성 |
|  **Backend** | Node.js + Express + TypeScript | Mock API 및 STT 준비 |
|  **AI 도구** | Gemini, ChatGPT, Copilot | UI 자동화, 코드 제안, 문서 생성 |
|  **Design** | Figma, Magician AI, LottieFiles | 감정 피드백 애니메이션 |
|  **Infra** | GitHub, Actions, AWS, Docker | 버전관리 및 배포 자동화 |
|  **Docs** | Notion, Markdown, ADR 기록 | 전 과정 문서화 |

## 6. 핵심 설계 포인트 (Design Principles)

* **기다림의 불확실성을 줄이는 UX**
    → 단순 속도보다 “예측 가능한 기다림”이 주는 안심감을 설계
* **AI 중심 개발 플로우**
    → 설계·개발·문서화 모두 Gemini·ChatGPT·Copilot과 협업
* **모듈형 구조**
    → 백엔드/프론트/문서를 분리해 성장 가능성 확보
* **실험과 기록의 일상화**
    → 노션에 모든 의사결정(ADR)과 실험 로그를 남김

## 7. 기대 효과 (Expected Outcomes)

| 구분 | 기대 효과 |
| :--- | :--- |
|  **업무 효율** | 회의 후 바로 회의록 정리 가능 → 시간 절감 |
|  **사용자 경험** | 대기 시간 중 불안감·지루함 감소 |
|  **기술 학습** | AI 빌더·STT·RAG 등 최신 기술 실습 경험 |
|  **확장성** | 향후 ‘실시간 회의 분석·요약’ 기능으로 확장 가능 |
|  **내적 성과** | 기획·UX·개발·AI를 한 사이클로 직접 경험 |

## 8. 향후 확장 방향 (Next Step Ideas)

* 실시간 음성 분석(Streaming STT)으로 회의 중 하이라이트 추출
* 감정 기반 요약(Emotion-aware Summarization)
* 팀 공유용 회의록 자동 포맷팅 기능
* AI 회의 비서 연동 (예: “이 부분 다시 들어줘” 기능)