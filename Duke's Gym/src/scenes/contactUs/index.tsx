import Header from "@/shared/Header";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {};

const ContactUs = (props: Props) => {
  const inputStyles = `w-full mb-5 bg-primary-100 rounded-lg px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="mx-auto w-5/6 pt-24 pb-16 pb-22" id="contactus">
      <motion.div>
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Header>
            <span className="text-primary-500 uppercase">join now </span>to get
            in shape
          </Header>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            corrupti aliquid exercitationem, velit, quo libero reprehenderit
            autem, officia assumenda consequatur et a nulla? Quas, magnam?
          </p>
        </motion.div>
        {/* form and image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/el/muhecu"
              method="POST"
            >
              {/* name */}
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is a 100 characters."}
                </p>
              )}
              {/* email */}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "invalid email address"}
                </p>
              )}

              {/*  message */}
              <textarea
                rows={4}
                cols={50}
                className="mt-5 block rounded-lg p-2.5 w-full text-sm text-gray-900 placeholder-white bg-primary-100 focus: "
                placeholder="Write your message here..."
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              ></textarea>

              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is a 2000 characters."}
                </p>
              )}
              {/* submit */}
              <button className="text-black mb-10 mt-5 group flex items-center gap-3  bg-secondary-500 px-[50px] py-3 transition duration-500">
                Submit
                <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-3 duration-300" />
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className=" md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-10]"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
