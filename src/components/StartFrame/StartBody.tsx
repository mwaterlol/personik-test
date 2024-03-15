import { PrimaryButton } from '../UI';

type StartContentProps = {
    startGame: () => void;
};

const StartContent = ({ startGame }: StartContentProps) => {
    return (
        <div className="p-1.5 text-zinc-700 text-s flex flex-col gap-1.5 items-center prose">
            <p className="w-full text-sm m-0">Цель: Назвать как можно больше реальных городов.</p>
            <ul className="prose-sm m-0 text-red marker:text-zinc-700">
                <li>Запрещается повторение городов.</li>
                <li>
                    Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы пропускаем эту букву и игрок
                    должен назвать город на букву стоящую перед ъ или ь знаком.
                </li>
                <li>
                    Каждому игроку дается 2 минуты на размышления, если спустя это время игрок не вводит слово он
                    считается проигравшим
                </li>
            </ul>
            <PrimaryButton onClick={startGame} className="px-1 py-0.5">
                Начать игру
            </PrimaryButton>
        </div>
    );
};

export default StartContent;
