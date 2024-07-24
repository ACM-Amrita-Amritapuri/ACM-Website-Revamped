import { motion } from "framer-motion";

const BridgeCourse = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <header className="text-center pt-20 pb-10">
        <h1 className="text-4xl font-bold">
          Bridging the Gap: <span className="text-yellow-300">Empowering First-Year Students</span>
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
            className="px-8 py-3 bg-yellow-300 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            View Course Details (PDF)
          </a>
          <a
            href="https://forms.gle/your-google-form-link" // Update with your Google Form link
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-yellow-300 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
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
    </div>
  );
};

export default BridgeCourse;
