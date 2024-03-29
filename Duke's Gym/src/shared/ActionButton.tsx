import { Link } from "react-scroll";

type Props = {
  text: string;
};

const ActionButton = ({ text }: Props) => {
  return (
    <button className="border border-secondary-500 rounded-[10px] text-secondary-500 px-8 py-[12px] group  hover:bg-secondary-500 duration-300">
      <Link
        className="group-hover:text-white duration-300"
        to="contactus"
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
