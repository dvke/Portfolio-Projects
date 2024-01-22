import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from "@/shared/ActionButton";
import SquatGraphic from "@/assets/SquatGraphic.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

type Props = {};

const Home = (props: Props) => {
  const isDesktop = useMediaQuery("(min-width: 1040px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* image and main header */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          {/* framer motion fade in from left */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
                {/* <img src={HomePageText} alt="home-text" /> */}
                <h1 className="text-header-color text-5xl font-montserrat">
                  Duke's Gym
                </h1>
              </div>
            </div>
            <p className="mt-8">
              Welcome to Duke's Gym – Your fitness destination for strength,
              community, and results! Our modern facility and expert trainers
              are here to elevate your workouts, offering personalized programs
              and energizing classes. Join Duke's Gym for a powerful fitness
              experience that transforms bodies and builds a strong, supportive
              community. Duke's Gym – Where Fitness Reigns!
            </p>
          </motion.div>
          {/* actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton text="Join Now" />
            <Link
              className="cursor-pointer text-sm underline hover:text-primary-300 hover:no-underline text-primary-500"
              to="contactus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Learn more
            </Link>
          </motion.div>
        </div>
        {/* image */}
        <div className="md:z-10 flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-graphic" />
          {/* <img src="https://www.transparentpng.com/thumb/fitness/eIf2Ob-fitness-free-cut-out.png" alt="Fitness Free Cut Out @transparentpng.com"></img> */}
        </div>
      </div>
      {/* sponsors */}
      {isDesktop && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull" />
              <img src={SponsorForbes} alt="forbes" />
              <img src={SponsorFortune} alt="fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
