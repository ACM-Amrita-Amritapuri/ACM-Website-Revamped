import { motion } from "framer-motion";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { fadeIn } from "../../variants";
import BulbFull from "../../components/BulbFull";
import Circles from "../../components/Circles";
import BusinessCard from "./BusinessCard"; // Import the BusinessCard component

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-12"
        >
          Let's <span className="text-accent">connect.</span>
        </motion.h2>
        <div className="flex flex-col w-full max-w-[700px]">
            {/* Add BusinessCard component */}
            <div className="flex justify-center">
              <BusinessCard />
          </div>
        </div>
      </div>
      <BulbFull />
    </div>
  );
};

export default Contact;
