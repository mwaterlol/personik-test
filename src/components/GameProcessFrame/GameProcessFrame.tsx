import Header from './GameProcessHeader';
import { BaseFrame } from '../UI';
import { PlayersEnum } from '@/types/Players.enum';
import MessagesFrame from './MessagesFrame';
import CityForm from './CityForm';
import useGameLogic from '@/hooks/useGameLogic';

type InProgressFrame = {
    changeGameResult: (_val: { lastCity: string; winner: PlayersEnum; totalCities: number }) => void;
    finishGame: () => void;
};
const InProgressFrame = ({ changeGameResult, finishGame }: InProgressFrame) => {
    const { timeLeft, turn, usedCities, addCity } = useGameLogic(changeGameResult, finishGame);
    return (
        <BaseFrame>
            <Header turn={turn} timeLeft={timeLeft} />
            <MessagesFrame cities={usedCities} />
            <CityForm isDisabled={turn === PlayersEnum.Bot} addCity={addCity} usedCities={usedCities} />
        </BaseFrame>
    );
};

export default InProgressFrame;
