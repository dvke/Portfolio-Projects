import classes from "@/data/classes";
import Header from "@/shared/Header";
import { ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import Class from "./Class";

type Props = {};

const OurClasses = (props: Props) => {
  return (
    <section id="ourclasses" className="w-full py-40 bg-primary-100">
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5">
          <Header>our classes</Header>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            accusantium quo nisi eveniet. Inventore illo voluptates obcaecati,
            doloremque, culpa illum qui optio doloribus odio corrupti aspernatur
            aliquid veniam! At, sequi?
          </p>
        </div>
      </motion.div>
      <div className="mt-10 h-[350px] overflow-x-auto overflow-y-hidden">
        <ul className=" whitespace-nowrap">
          {classes.map((item: ClassType, index) => (
            <Class
              key={index}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurClasses;
