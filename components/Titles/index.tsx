


interface HeroTitle {
    id: string;
    titleLineOne: string;
    titleLineTwo: string;
    titleInRedColor: string;
}

interface HeroTitle2 {
    id: string;
    titleLineOne: string;
    titleLineTwo: string;
    titleInRedColor: string;
    titleLineOneStyle?: React.CSSProperties;
    titleLineTwoStyle?: React.CSSProperties;
}

interface HeadingOne {
    titleLineOne: string;
    titleLineTwo: string;
    titleInRedColor: string;

}

interface SectionTitle {
    title: string;
}

interface SectionTitleStyleTwo {
    title: string;
    desc: string;
    textColor: string;
}

export const HeroTitle: React.FC<HeroTitle> = ({ id, titleLineOne, titleLineTwo, titleInRedColor}) => {

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

export const HeroTitle2: React.FC<HeroTitle2> = ({ id, titleLineOne, titleLineTwo, titleInRedColor, titleLineOneStyle, titleLineTwoStyle }) => {

    return (
        <>
            <div id={id} className="mb-4">
            <h2 style={titleLineOneStyle}>{titleLineOne}</h2>
            <h2 style={titleLineTwoStyle}>{titleLineTwo} </h2>
            <span style={{ color: 'red', fontSize: '70px', fontWeight: 'normal' }}>{titleInRedColor}</span>
            </div>
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

export const SectionTitleStyleTwo: React.FC<SectionTitleStyleTwo> = ({ title, desc, textColor }) => {

    return (
        <>
            <div className="d-flex flex-column align-items-center mb-5 secTitleStyleTwo">
                <h2 className="mb-4" style={{color: `${textColor}`}}>{title}</h2>
                <p className="mb-0 text-center" style={{color: `${textColor}`}}>{desc}</p>
            </div>
        </>
    );
};