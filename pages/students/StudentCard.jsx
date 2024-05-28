import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const StudentCard = (props) => {
  const { src, name, position, instagram, linkedin, github, width, height, alignRight } = props;
  const [hover, setHover] = useState(false);

  return (
    <div
        className={`relative flex flex-col items-center bg-[#393970] rounded-lg overflow-hidden shadow-lg shadow-[#393970] hover:shadow-[#80fffb] hover:bg-[#80fffb] p-[8px] glowing-border transition-all duration-300 transform ${hover ? 'scale-105' : 'scale-100'}`}
      style={{ width: width, height: height }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={src} alt={name} width={width} height={height} className="rounded-lg object-cover" />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-75 hover:bg-opacity-0 text-center text-white py-2">
        <p className="text-xl text-white">{name}</p>
        <p className="text-lg text-white">{position}</p>
      </div>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute ${alignRight ? 'left-0' : 'right-0'} bottom-0 h-[72px] w-full bg-black bg-opacity-100 flex flex-row justify-center items-center space-x-6`}
          >
            {instagram && (
              <a href={instagram} target="_blank" rel="noreferrer">
                <Image src="/instagram.png" width={40} height={40} alt="Instagram" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer">
                <Image src="/linkedin.png" width={40} height={40} alt="LinkedIn" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <Image src="/github.png" width={40} height={40} alt="GitHub" />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentCard;


