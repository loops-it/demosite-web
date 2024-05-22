


interface HeroTitle {
    id: string;
    titleLineOne: string;
    titleLineTwo: string;
    titleInRedColor: string;
}

interface HeadingOne {
    titleLineOne: string;
    titleLineTwo: string;
    titleInRedColor: string;
}

interface SectionTitle {
    title: string;
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


export const HeadingOne: React.FC<HeadingOne> = ({ titleLineOne, titleLineTwo, titleInRedColor }) => {

    return (
        <>
            <h2 className="mb-4 headingStyleOne">
                {titleLineOne} <span>{titleInRedColor}</span><br></br>
                {titleLineTwo}
            </h2>
        </>
    );
};

export const SectionTitle: React.FC<SectionTitle> = ({ title }) => {

    return (
        <>
            <div className="d-flex flex-row align-items-center mb-5">
                <div className="lineShort"></div>
                <div className="lineLong"></div>
                <h2 className="mb-0 secTitleOne">{title}</h2>
            </div>
        </>
    );
};