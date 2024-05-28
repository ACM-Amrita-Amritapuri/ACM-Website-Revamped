import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const StudentCard = (props) => {
  const { src, name, position, instagram, linkedin, github, width, height, alignRight } = props;
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative flex flex-col items-center bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 transform ${hover ? 'scale-105' : 'scale-100'}`}
      style={{ width: width, height: height }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={src} alt={name} width={width} height={height} className="rounded-lg object-cover" />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-center text-white py-2">
        <p className="text-xl">{name}</p>
        <p className="text-lg text-slate-400">{position}</p>
      </div>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute ${alignRight ? 'left-0' : 'right-0'} top-0 h-full w-20 bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-4`}
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


