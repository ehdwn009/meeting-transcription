# NowNote

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
|------|------|
| **핵심 목표** | 회의 종료 후 30분 내 텍스트 변환 완료 |
| **사용자 경험 목표** | 변환 중에도 “안심감”을 주는 UX (진행률·감정 피드백 디자인) |
| **기술 목표** | One Source Multi Use: React 코드로 웹/안드로이드/iOS 동시 지원 |
| **학습 목표** | AI 빌더(Gemini 등) 기반으로 MVP 자체 설계·개발 |

### 2.1. 프로젝트 구조 (Monorepo)

이 프로젝트는 **프론트엔드와 백엔드가 하나의 저장소에서 관리되는 모노레포(Monorepo)** 구조입니다.

```bash
root/
 ├─ frontend/   # React(Vite) 기반 웹 UI 및 Capacitor 앱 핵심
 └─ backend/    # Node.js(Express) 기반 API 서버 (예정)
```

## 3. 로컬에서 실행하기 (Local Setup)

이 프로젝트는 `frontend` 폴더에 React(Vite) 코드를, 향후 `backend` 폴더에 서버 코드를 관리하는 **모노레포(Monorepo)** 구조입니다.

1.  **A. 웹 앱 실행 (실시간 미리보기)**
    ```bash
    # 프론트엔드 폴더로 이동
    cd frontend
    
    # 의존성 설치 (최초 1회)
    npm install

    # 환경 변수 설정 (.env.local)
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE

    # 개발 서버 실행
    npm run dev
    ```
    ➡ 브라우저에서 http://localhost:3000  접속

2.  **B. 모바일 앱 실행 (Android / iOS)**
웹 앱을 실제 스마트폰 기기나 시뮬레이터에서 실행할 수 있습니다.

[최초 1회 설정]

    ```bash
    cd frontend
    npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
    npx cap init
    ```

- web asset directory를 dist로 설정
- vite.config.ts에 base: './' 추가

**플랫폼 추가**

    ```bash
    # Android
    npx cap add android

    # iOS (macOS 전용)
    # npx cap add ios
    ```

**[개발 후 매번 실행]**
    ```bash
    cd frontend
    npm run build        # React 빌드
    npx cap sync         # Capacitor 동기화

    # 안드로이드 스튜디오로 열기
    npx cap open android

    # (macOS) Xcode로 열기
    # npx cap open ios
    ```

## 4. 기술 스택 (Tech Stack)

| 영역 | 사용 도구 | 비고 |
| :--- | :--- | :--- |
|  **Frontend** | Google AI Studio (Gemini), Vite/React | MVP 자동 생성 |
|  **Mobile** | Capacitor | React 앱을 네이티브로 포장 |
|  **Backend** | Node.js + Express + TypeScript | Mock API 및 STT 준비 |
|  **AI 도구** | Gemini, ChatGPT, Copilot | UI 자동화, 코드 제안, 문서 생성 |
|  **Infra** | GitHub, Actions, AWS, Docker | 버전관리 및 배포 자동화 |
|  **Docs** | Notion, Markdown, ADR 기록 | 전 과정 문서화 |

## 5. 핵심 설계 포인트 (Design Principles)

* **기다림의 불확실성을 줄이는 UX**
    → 단순 속도보다 “예측 가능한 기다림”이 주는 안심감을 설계
* **AI 중심 개발 플로우**
    → 설계·개발·문서화 모두 Gemini·ChatGPT·Copilot과 협업
* **하이브리드 우선 (Hybrid-First)**
    → React를 원본(Source of Truth)으로 웹/모바일 동시 배포
* **네이티브 기능 브릿지 최소화**
    → Capacitor로 푸시 알림, 파일 시스템, 진동 등 핵심 기능만 연동

## 6. 기대 효과 (Expected Outcomes)

| 구분 | 기대 효과 |
| :--- | :--- |
|  **업무 효율** | 회의 후 바로 회의록 정리 가능 → 시간 절감 |
|  **사용자 경험** | 대기 시간 중 불안감·지루함 감소 |
|  **기술 학습** | AI 빌더·STT·RAG 등 최신 기술 실습 경험 |
|  **확장성** | 향후 ‘실시간 회의 분석·요약’ 기능으로 확장 가능 |
|  **내적 성과** | 기획·UX·개발·AI를 한 사이클로 직접 경험 |

## 8. 향후 확장 방향 (Next Step Ideas)

* 실시간 음성 분석(Streaming STT)으로 회의 중 하이라이트 추출
* 요약(Summarization)
* 팀 공유용 회의록 자동 포맷팅 기능
* AI 회의 비서 연동 (예: “이 부분 다시 들어줘” 기능)
* [Mobile] 변환 완료 푸시 알림