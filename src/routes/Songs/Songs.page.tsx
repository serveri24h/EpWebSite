import React, { useEffect, useState } from 'react';
import PlayerComponent from '../../components/player/Player';
import CountdownTimer from '../../components/countdowntimer/CountDownTimer';

const Songs:React.FC = () => {

    const countDownDate = new Date('2025-07-25T00:00:00');
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(Date.now());
        }, 1000); // update every second
        return () => clearInterval(interval); // clean up on unmount
    }, []);
    return (
        (now < countDownDate.getTime()) ? <CountdownTimer countDownDate={countDownDate}/>:<PlayerComponent/>
    )
}

export default Songs;