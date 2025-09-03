import React from 'react';
import { historyData } from './data';
import './App.css'; // App.css에서 스타일을 가져옴

const HistorySection = () => {
    return (
        <section className="history-section">
            <h2>Coin의 연혁</h2>
            <div className="timeline">
                {historyData.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <h3>{item.year}</h3>
                        <ul>
                            {item.events.map((event, eventIndex) => (
                                <li key={eventIndex}>{event}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HistorySection;