import { motion } from "framer-motion";
import ParticlesContainer from "../../components/ParticlesContainer";
import ProjectsBtn from "../../components/ProjectsBtn";
import Avatar from "../../components/Avatar";
import { fadeIn } from "../../variants";

const BridgeCourse = () => {
  return (
    <div className="bg-primary/60 min-h-screen flex flex-col">
      {/* text */}
      <div className="flex-grow w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto px-4">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Bridging the Gap: <span className="text-accent">Empowering First-Year Students</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            The Bridge Course for S1 is designed to help first-year engineering students, regardless of their background, explore and develop essential technical skills. This two-month program, organized by the ACM Student Chapter Amritapuri, offers a unique opportunity to delve into the exciting fields of Artificial Intelligence, Cybersecurity, Competitive Programming, and Web Development. Through a balanced mix of theoretical knowledge and practical applications, the course aims to ignite students' passion for technology and guide them in discovering their areas of interest. Join us to build a strong foundation, gain valuable insights, and embark on a journey toward your chosen path in the world of engineering and technology.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="relative w-full h-[50vh] lg:h-[75vh] flex items-center justify-center">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mt-10 lg:mt-0 w-full h-full max-w-[500px] max-h-[300px] relative lg:absolute lg:bottom-[20%] lg:right-[10%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default BridgeCourse;
