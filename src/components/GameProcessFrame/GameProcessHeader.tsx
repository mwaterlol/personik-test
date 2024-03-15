import { PlayersEnum } from '@/types/Players.enum';
import Timer from './Timer';

type GameProcessHeaderProps = {
    turn: PlayersEnum;
    timeLeft: number;
    setTimeLeft: (_val: number) => void;
};
const GameProcessHeader = ({ turn, timeLeft, setTimeLeft }: GameProcessHeaderProps) => {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full px-1 py-1.0625 flex justify-between items-center">
                <p className="prose-m sm:prose-s">
                    {turn === PlayersEnum.User ? 'Сейчас ваша очередь' : 'Сейчас очередь соперника'}
                </p>
                <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
            </div>
            <div className="w-full bg-gray-100 h-0.3125">
                <div
                    className="bg-violet-300 h-0.3125 transition-all duration-500  
                ease-in-out"
                    style={{ width: `${(timeLeft / 120) * 100}%` }}
                ></div>
            </div>
        </div>
    );
};

export default GameProcessHeader
