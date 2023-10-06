import { Link } from "react-scroll";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Benefit = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <Link
        className="cursor-pointer text-sm underline text-primary-500 hover:text-primary-300 hover:no-underline"
        to="contactus"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Learn more
      </Link>
    </motion.div>
  );
};

export default Benefit;
