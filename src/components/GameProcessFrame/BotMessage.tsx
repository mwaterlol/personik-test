import { MessageProps } from '@/types/MessageProps.type';

const BotMessage = ({ children, className }: MessageProps) => {
    return (
        <div className="w-full flex justify-start">
            <div
                className={`bg-violet-50 text-gray-700 px-1.25 py-0.375 rounded-t-xl rounded-br-xl prose-m ${className}`}
            >
                {children}
            </div>
        </div>
    );
};

export default BotMessage;
