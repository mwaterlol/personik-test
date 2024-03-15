type PrimaryButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
};
export const PrimaryButton = ({ children, className, disabled, type, ...props }: PrimaryButtonProps) => {
    return (
        <button
            className={`flex items-center justify-center ${disabled ? 'bg-gray-400' : 'bg-violet-600'} text-white rounded  max-w-fit ${!disabled && 'hover:bg-violet-700'} ${className}`}
            {...props}
            type={type ?? 'button'}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
