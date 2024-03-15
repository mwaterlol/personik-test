import BotMessage from './BotMessage';
import UserMessage from './UserMessage';

type MessagesFrameProps = {
    cities: string[];
};

const MessagesFrame = ({ cities }: MessagesFrameProps) => {
    return (
        <div className="h-21.3125 w-full flex flex-col">
            <div className="overflow-auto flex flex-col gap-0.5 h-20 px-1">
                {cities.length === 0 ? (
                    <div className="w-full h-20 flex justify-center items-center">
                        <p className="text-center text-zinc-400 prose-sm">Первый участник вспоминает города...</p>
                    </div>
                ) : (
                    <>
                        {cities.map((city, index) =>
                            index % 2 === 0 ? (
                                <UserMessage key={`${city}${index}`} className={`${index === 0 ? 'mt-2.5' : ''}`}>
                                    {city}
                                </UserMessage>
                            ) : (
                                <BotMessage key={`${city}${index}`}>{city}</BotMessage>
                            ),
                        )}
                    </>
                )}
            </div>
            {cities.length > 2 && (
                <p className="text-center leading-1.3125 text-sm text-zinc-400 mt-0.625">
                    Всего перечислено городов: {cities.length}
                </p>
            )}
        </div>
    );
};

export default MessagesFrame;
