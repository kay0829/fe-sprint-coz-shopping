function NoContent({ message }: { message: string | JSX.Element }) {
    return <div className="flex justify-center items-center w-screen h-210px">{message}</div>;
}

export default NoContent;
