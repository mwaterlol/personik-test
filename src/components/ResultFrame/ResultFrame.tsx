import { PlayersEnum } from '@/types/Players.enum';
import { BaseFrame, PrimaryButton } from '../UI';

type ResultFrameProps = {
    winner: PlayersEnum;
    totalCities: number;
    lastCity: string;
    startNewGame: () => void;
};
const ResultFrame = ({ winner, totalCities, lastCity, startNewGame }: ResultFrameProps) => {
    const headingText =
        winner === PlayersEnum.User
            ? 'Поздравляем тебя с победой!\n Твой противник не вспомнил нужный город!'
            : 'К сожалению твое время вышло!\n Твой противник победил!';
    return (
        <BaseFrame>
            <div className="flex flex-col gap-2 items-center">
                <p className="mt-2.5 prose-xl whitespace-pre-line text-center">{headingText}</p>
                <p
                    className={`text-3xl font-meduim ${winner === PlayersEnum.User ? 'text-green-600' : 'text-red-600'}`}
                >
                    00:00
                </p>
                <p className="prose-l text-center sm:prose-xl">
                    Всего было перечислено городов: {totalCities}
                    <br />
                    Очень не плохой результат!
                </p>
                <div className="flex flex-col">
                    <p className="text-center prose-m">Последний город названный победителем</p>
                    <p className="text-center font-medium text-2xl">{lastCity ?? '-'}</p>
                </div>
                <PrimaryButton className="px-1 py-0.5 mb-2" onClick={startNewGame}>
                    Начать новую игру
                </PrimaryButton>
            </div>
        </BaseFrame>
    );
};

export default ResultFrame;
