import { useState } from 'react'
import RainAnimation from './RainAnmation'
import './App.css'

// 데이터와 컴포넌트를 분리했다고 가정
import { historyData } from './data';
import HistorySection from './HistorySection';

function App() {
  return (
    <div className="App-container">
      <RainAnimation />

      <header className="hero-section">
        <div className="hero-content">
          <h1>COIN</h1>
          <h2>2025 RECRUITING</h2>
          <p className="hero-slogan">2025 COIN 동아리 신입 부원 모집</p>
          <hr></hr>
        </div>
      </header>

      <h1>About us.</h1>
      {/* 동아리 핵심 통계 섹션 */}
      <section className="statistics-section">
        <div className="stat-item">
          <h3>설립 기간</h3>
          <p>13년</p>
        </div>
        <div className="stat-item">
          <h3>총 수상 횟수</h3>
          <p>26회</p>
        </div>
        <div className="stat-item">
          <h3>특허 출원</h3>
          <p>4회</p>
        </div>
      </section>

      <hr></hr>

      <section className="about-section">
        <h1>Coin는 무엇을 하나요?</h1>
        <div className="activity-cards">
          <div className="card">
            <h3>스터디 & 세미나</h3>
            <p>
              매주 정기적인 스터디를 통해 최신 기술 트렌드를 학습하고,
              서로의 지식을 공유합니다. 블록체인 기초부터 AI 심화 과정까지!
            </p>
          </div>

          <div className="card">
            <h3>프로젝트 진행</h3>
            <p>
              함께 아이디어를 구상하고 실제 서비스를 개발하는 프로젝트에 참여합니다.
              당신의 아이디어를 Coin에서 현실로 만들어 보세요!
            </p>
          </div>

          <div className="card">
            <h3>네트워킹 & 교류</h3>
            <p>
              멘토링, 해커톤 참가, 동아리 간 교류 등을 통해
              넓은 시야를 갖고 다양한 사람들과 소통합니다.
            </p>
          </div>
        </div>
      </section>

      <hr></hr>

      <h1>Recruiting.</h1>
      {/* 모집 정보 섹션 */}
      <section className="recruitment-info-section">
        <div className="info-box">
          <h3>모집분야</h3>
          <ul>
            <li>개발자</li>
            <li>웹 디자이너</li>
            <li>AI 엔지니어</li>
          </ul>
        </div>
        <div className="info-box">
          <h3>지원자격</h3>
          <ul>
            <li>경기과학기술대학교 재학생</li>
            <li>학과 무관</li>
            <li>코딩 혹 웹디자인에 관심 있는 사람</li>
            <li>매일 동아리 참여 가능자</li>
          </ul>
        </div>
        <div className="info-box">
          <h3>활동내역</h3>
          <ul>
            <li>각 종 대외 활동</li>
            <li>교내/외 활동 참여</li>
            <li>팀 개발 프로젝트</li>
            <li>코딩 멘토링</li>
          </ul>
        </div>
        <div className="info-box">
          <h3>모집기간</h3>
          <ul>
            <li>신청기한: 0월 0일 ~ 0월 0일</li>
            <li>면접일자: 0월 0일 ~ 0월 0일</li>
          </ul>
        </div>
      </section>

      <hr></hr>

      {/* 모집 절차 섹션 */}
      <section className="process-section">
        <h1>모집 절차</h1>
        <div className="process-steps">
          <div className="step-item">
            <span className="step-number">1</span>
            <h3>구글폼 지원</h3>
            <p>1차 서류 지원</p>
          </div>
          <div className="step-item">
            <span className="step-number">2</span>
            <h3>임원 면접</h3>
            <p>2차 면접</p>
          </div>
          <div className="step-item">
            <span className="step-number">3</span>
            <h3>최종 합격</h3>
            <p>Coin의 새로운 부원</p>
          </div>
        </div>
      </section>

      <hr></hr>

      {/* 동아리 연혁 섹션 (별도 컴포넌트로 분리) */}
      <HistorySection />

      <hr></hr>

      <h2>Where we at.</h2>
      <p>경기과학기술대학교 2캠퍼스 제1중소기업관 &#40;H동&#41; 314호</p>
      <p>&#40;경기도 시흥시 경기과기대로 270 제1중소기업관 314호&#41;</p>

      <hr></hr>

      <section className="join-us-section">
        <h2>'Coin'과 함께하고 싶나요?</h2>
        <p>
          'Coin'은 열정 가득한 당신의 합류를 기다립니다.
          기술에 대한 관심과 배우고자 하는 의지만 있다면 누구든 환영합니다!
        </p>
      </section>

      <footer className="footer-section" id="contact">
        <a href="https://accounts.google.com/InteractiveLogin?continue=https://docs.google.com/forms/d/e/1FAIpQLSfrYhKlTMxE3C2OI90cGQ9xzLwFHVGX85p_ISOs4npCbfKeWg/viewform&followup=https://docs.google.com/forms/d/e/1FAIpQLSfrYhKlTMxE3C2OI90cGQ9xzLwFHVGX85p_ISOs4npCbfKeWg/viewform&ltmpl=forms&osid=1&passive=1209600&service=wise&ifkv=AdBytiPev9Qn_rPsspbzJAF2HX3plEa6rD5mbxftm1gUpvd5Z1TzAzQPUtJmH0gINWx-BUAVUTsbAw" target="_blank" rel="noopener noreferrer">
          <button className="join-button">지금 가입하기</button>
        </a>
        <hr></hr>
        <p>경기과학기술대학교 창업동아리 COIN</p>
        <p>&copy; 2025 Coin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App