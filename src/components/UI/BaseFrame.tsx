type BaseFrameProps = {
    children: React.ReactNode;
};
export const BaseFrame = ({ children }: BaseFrameProps) => {
    return <main className="rounded-2xl flex flex-col items-center relative w-full bg-white mx-auto sm:w-36">{children}</main>;
};
