type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
    return (
        <input
            type="text"
            className={`h-3 pl-0.75 text-zinc-700 text-base sm:text-xs pr-2 rounded-lg w-full bg-gray-100 ${className}`}
            {...props}
        />
    );
};
