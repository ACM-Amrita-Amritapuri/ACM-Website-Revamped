import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AdvisoryManagement from './AdvisoryManagement';

const Advisory = () => {
  // Animation controls for AdvisoryManagement
  const AdvisoryControls = useAnimation();
  const { ref: AdvisoryRef, inView: AdvisoryInView } = useInView();

  useEffect(() => {
    if (AdvisoryInView) {
      AdvisoryControls.start("visible");
    } else {
      AdvisoryControls.start("hidden");
    }
  }, [AdvisoryControls, AdvisoryInView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '100px' }}>
      <div style={{ marginBottom: '50px' }}>
        <motion.div
          ref={AdvisoryRef}
          initial="hidden"
          animate={AdvisoryControls}
          variants={variants}
        >
          <AdvisoryManagement />
        </motion.div>
      </div>
    </div>
  );
};

export default Advisory;
