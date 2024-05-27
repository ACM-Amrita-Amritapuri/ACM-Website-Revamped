import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Transition = () => {
  const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };

  return (
    <>
      <motion.div
      role="status"
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#120e24]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      aria-hidden
    >
      <div className="flex justify-center items-center w-full h-full">
        {/* Add your image here */}
        <img src="/acm-alone.png" className="w-1/6" />
      </div>
    </motion.div>
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#1d1639]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#241b47]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        aria-hidden
      />
    </>
  );
};

export default Transition;
