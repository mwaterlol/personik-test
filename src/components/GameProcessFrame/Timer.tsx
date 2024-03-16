type TimerProps = {
    timeLeft: number;
};

const Timer = ({ timeLeft }: TimerProps) => {
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
