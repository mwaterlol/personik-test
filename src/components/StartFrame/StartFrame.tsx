import { BaseFrame } from '../UI';
import StartContent from './StartBody';
import StartHeader from './StartHeader';

type StartBodyProps = {
    startGame: () => void;
};
const StartBody = ({ startGame }: StartBodyProps) => {
    return (
        <BaseFrame>
            <StartHeader />
            <StartContent startGame={startGame} />
        </BaseFrame>
    );
};

export default StartBody;
