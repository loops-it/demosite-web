import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";


interface ButtonPrimaryProps {
  link: string;
  title: string;
  id: string;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ link, title, id }) => {
  return (
    <Link key={id} className="navButton" href={link}>
      {title}
      
    </Link>
  );
};


export const ButtonHero: React.FC<ButtonPrimaryProps> = ({ link, title, id }) => {
    return (
      <Link key={id} className="navButton" href={link} style={{padding: '10px 50px !important;'}}>
        {title}
      </Link>
    );
  };

  export const ButtonPrimaryArrow: React.FC<ButtonPrimaryProps> = ({ link, title, id }) => {
    return (
      <Link key={id} className="arrowButtonRedBg" href={link} style={{padding: '10px 20px !important;'}}>
        {title}
        <FaChevronRight />
      </Link>
    );
  };

  export const ButtonTransparentArrow: React.FC<ButtonPrimaryProps> = ({ link, title, id }) => {
    return (
      <Link key={id} className="arrowButtontransparentBg" href={link} style={{padding: '10px 20px !important;'}}>
        {title}
        <FaChevronRight />
      </Link>
    );
  };