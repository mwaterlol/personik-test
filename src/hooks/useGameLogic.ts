import { useState, useEffect } from 'react';
import Helper from '@/utils/helper';
import { PlayersEnum } from '@/types/Players.enum';
import { toast } from 'react-toastify';

const useGameLogic = (
    changeGameResult: (_val: { lastCity: string; winner: PlayersEnum; totalCities: number }) => void,
    finishGame: () => void,
) => {
    const [timeLeft, setTimeLeft] = useState(120);
    const [turn, setTurn] = useState(PlayersEnum.User);
    const [usedCities, setUsedCities] = useState<string[]>([]);

    const addCity = (value: string) => {
        setUsedCities((prevUsedCities) => [...prevUsedCities, value]);
        setTurn(PlayersEnum.Bot);
        setTimeLeft(120);
    };

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearInterval(timer);
        } else {
            changeGameResult({
                lastCity: usedCities[usedCities.length - 1],
                winner: turn === PlayersEnum.Bot ? PlayersEnum.User : PlayersEnum.Bot,
                totalCities: usedCities.length,
            });
            finishGame();
        }
    }, [timeLeft]);

    useEffect(() => {
        const getNextCity = async () => {
            if (turn === PlayersEnum.Bot) {
                try {
                    const nextCity = await Helper.getCityByLetter(usedCities);
                    setUsedCities((prevUsedCities) => [...prevUsedCities, nextCity]);
                    setTurn(PlayersEnum.User);
                    setTimeLeft(120);
                } catch {
                    changeGameResult({
                        lastCity: usedCities[usedCities.length - 1],
                        winner: turn === PlayersEnum.Bot ? PlayersEnum.User : PlayersEnum.Bot,
                        totalCities: usedCities.length,
                    });
                    finishGame();
                    toast.error('Не осталось городов на  эту букву');
                }
            }
        };
        getNextCity();
    }, [usedCities]);
    return { timeLeft, turn, usedCities, addCity };
};

export default useGameLogic;
