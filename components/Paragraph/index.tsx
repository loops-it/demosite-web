interface Paragraph {
    text: string;
}

export const Paragraph: React.FC<Paragraph> = ({ text }) => {
    
    return (
        <>
            <p className="paraStyleOne mb-5">{text}</p>
        </>
    );
};
