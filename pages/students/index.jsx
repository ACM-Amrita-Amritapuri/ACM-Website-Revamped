import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import StudentManagement from './StudentManagement';

const Students = () => {
  // Animation controls for StudentManagement
  const studentControls = useAnimation();
  const { ref: studentRef, inView: studentInView } = useInView();

  useEffect(() => {
    if (studentInView) {
      studentControls.start("visible");
    } else {
      studentControls.start("hidden");
    }
  }, [studentControls, studentInView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '100px' }}>
      <div style={{ marginBottom: '50px' }}>
        <motion.div
          ref={studentRef}
          initial="hidden"
          animate={studentControls}
          variants={variants}
        >
          <StudentManagement />
        </motion.div>
      </div>
    </div>
  );
};

export default Students;
