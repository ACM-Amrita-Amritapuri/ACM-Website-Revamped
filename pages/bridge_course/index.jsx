import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

const BridgeCourse = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-1000 to-blue-1800 text-white">
        <Circles />
      <header className="text-center pt-28 pb-10">
        <h1 className="text-4xl font-bold ">
          Bridging the Gap: <span className="text-accent">Empowering First-Year Students</span>
        </h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="max-w-3xl mx-auto mb-10 text-lg">
            The Bridge Course for S1 is designed to help first-year engineering students explore and develop essential technical skills. This two-month program, organized by the ACM Student Chapter Amritapuri, offers a unique opportunity to delve into the exciting fields of Artificial Intelligence, Cybersecurity, Competitive Programming, and Web Development. Through a balanced mix of theoretical knowledge and practical applications, the course aims to ignite students' passion for technology and guide them in discovering their areas of interest. Join us to build a strong foundation, gain valuable insights, and embark on a journey toward your chosen path in the world of engineering and technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <a
            href="/path-to-your-pdf-file.pdf" // Update with the actual path to your PDF
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white-900 font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          >
            View Course Details (PDF)
          </a>
          <a
            href="https://forms.gle/9RGeGo7mKkMLgqMX9" // Update with your Google Form link
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white-900 font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          >
            Register Here
          </a>
        </motion.div>
      </main>

      <footer className="text-center py-10">
        <p className="text-sm">
          © 2024 ACM Student Chapter Amritapuri. All Rights Reserved.
        </p>
      </footer>
      <Bulb />
    </div>
  );
};

export default BridgeCourse;
