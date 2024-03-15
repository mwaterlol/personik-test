import { useEffect } from 'react';

type TimerProps = {
    timeLeft: number;
    setTimeLeft: (_val: number) => void;
};

const Timer = ({ timeLeft, setTimeLeft }: TimerProps) => {
    useEffect(() => {
        const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearInterval(timer as NodeJS.Timeout);
    }, [setTimeLeft, timeLeft]);
    const minutes = Math.floor(timeLeft / 60)
        .toString()
        .padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    return (
        <p className="font-medium prose-xl">
            {minutes} : {seconds}
        </p>
    );
};

export default Timer;
