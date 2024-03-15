import { FC, useState } from 'react';
import { GamePhaseEnum } from '@/types/GamePhase.enum';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlayersEnum } from '@/types/Players.enum';
import { StartFrame, ResultFrame, GameProcessFrame } from '@/components';

const App: FC = () => {
    const [gamePhase, setGamePhase] = useState(GamePhaseEnum.Start);
    const [gameResult, setGameResult] = useState({ lastCity: '', winner: PlayersEnum.Bot, totalCities: 0 });

    return (
        <>
            {gamePhase === GamePhaseEnum.Start && (
                <StartFrame startGame={() => setGamePhase(GamePhaseEnum.InProgress)} />
            )}
            {gamePhase === GamePhaseEnum.InProgress && (
                <GameProcessFrame
                    changeGameResult={(val) => setGameResult(val)}
                    finishGame={() => setGamePhase(GamePhaseEnum.Finished)}
                />
            )}
            {gamePhase === GamePhaseEnum.Finished && (
                <ResultFrame
                    winner={gameResult.winner}
                    totalCities={gameResult.totalCities}
                    lastCity={gameResult.lastCity}
                    startNewGame={() => setGamePhase(GamePhaseEnum.Start)}
                />
            )}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    );
};

export default App;
