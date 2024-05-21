import Link from "next/link";

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
