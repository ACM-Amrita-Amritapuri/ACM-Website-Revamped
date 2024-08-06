import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FacultyManagement from './FacultyManagement';
const Faculty = () => {
  // Animation controls for FacultyManagement
  const facultyControls = useAnimation();
  const { ref: facultyRef, inView: facultyInView } = useInView();

  useEffect(() => {
    if (facultyInView) {
      facultyControls.start("visible");
    } else {
      facultyControls.start("hidden");
    }
  }, [facultyControls, facultyInView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '100px', overflowY: 'scroll' }}>
      <div style={{ marginBottom: '50px' }}>
        <motion.div
          ref={facultyRef}
          initial="hidden"
          animate={facultyControls}
          variants={variants}
        >
          <FacultyManagement />
        </motion.div>
      </div>
    </div>
  );
};

export default Faculty;
