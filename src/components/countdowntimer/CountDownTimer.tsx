

import React, { useEffect, useState } from 'react';
import './CountDownTimer.css';

const CountdownTimer: React.FC<{countDownDate:Date}> = ({countDownDate}) => {

    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const diff = countDownDate.getTime() - now.getTime();

            const totalSeconds = Math.max(0, Math.floor(diff / 1000));
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            setTimeLeft({ hours, minutes, seconds });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    const formatTime = (n: number) => n.toString().padStart(2, '0');

    return (
        <div className="timer-container">
            <div className="timer-box">
                <h2 className="timer-title">Talviuni Julkaistaan</h2>
                <p className="timer-count">
                    {formatTime(timeLeft.hours)}<span className="time-label">h</span> :
                    {formatTime(timeLeft.minutes)}<span className="time-label">m</span> :
                    {formatTime(timeLeft.seconds)}<span className="time-label">s</span>
                </p>

            </div>
        </div>
    );
};

export default CountdownTimer;