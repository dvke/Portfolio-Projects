import { Link } from "react-scroll";

type Props = {
  text: string;
};

const ActionButton = ({ text }: Props) => {
  return (
    <button className="bg-secondary-500 px-8 py-[5px] group rounded-[8px] hover:bg-primary-500 duration-300">
      <Link
        className="group-hover:text-white duration-300"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {text}
      </Link>
    </button>
  );
};

export default ActionButton;
