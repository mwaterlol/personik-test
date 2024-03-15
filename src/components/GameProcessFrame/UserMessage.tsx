import { MessageProps } from '@/types/MessageProps.type';

const UserMessage = ({ children, className }: MessageProps) => {
    return (
        <div className="w-full flex justify-end">
            <div
                className={`bg-violet-500 text-white px-1.25 py-0.375 rounded-t-xl rounded-bl-xl prose-m ${className}`}
            >
                {children}
            </div>
        </div>
    );
};

export default UserMessage;
