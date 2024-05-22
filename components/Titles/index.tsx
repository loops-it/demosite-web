


interface HeroTitle {
    id: string;
    titleLineOne: string;
    titleLineTwo: string;
    titleInRedColor: string;
}

export const HeroTitle: React.FC<HeroTitle> = ({ id, titleLineOne, titleLineTwo, titleInRedColor }) => {
    
    return (
        <>
            <h2 id={id} className="mb-4">
                {titleLineOne} <br></br>
                {titleLineTwo} <br></br>
                <span>{titleInRedColor}</span>
            </h2>
        </>
    );
};