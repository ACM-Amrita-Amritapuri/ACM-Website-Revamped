import React from 'react';
import { Box, Grid, Flex } from '@chakra-ui/react';
import AdvisoryCard from "./AdvisoryCard";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Advisory = () => {
  const AdvisoryCards = [
    {
      src: "/akhil.jpg",
      name: "Akhil Menon M",
      linkedin: "https://www.linkedin.com/in/akhil-m3non/",
      github: "https://github.com/muuduuu"
    },
    {
      src: "/hari blow.jpg",
      name: "Hari G Narayan",
      linkedin: "http://www.linkedin.com/in/hari-narayan-629867248",
      github: "https://github.com/Hari-with-an-i"
    },
    {
      src: "/gps 2.jpg",
      name: "Gowri P Shenoy",
      linkedin: "https://www.linkedin.com/in/gowri-shenoy-676100284",
      github: "https://github.com/Locateme-GPS"
    },
    {
      src: "/ajan.jpg",
      name: "Ajan S",
      linkedin: "https://www.linkedin.com/in/ajan-s",
      github: "https://github.com/ajan421"
    },
    {
      src: "/lokesh.jpg",
      name: "Lokesh Yarramallu",
      linkedin: "https://www.linkedin.com/in/lokeshyarramallu/",
      github: "https://github.com/LokeshYarramallu"
    },
    {
      src: "/surya.jpeg",
      name: "Surya Kiran",
      linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
      github: "https://github.com/Suryakiran071"
    },
    {
      src: "/Navneeth.jpeg",
      name: "Navneeth N",
      linkedin: "https://www.linkedin.com/in/navaneeth-n-817658271/",
      github: "https://github.com/navth"
    },
  

  ];

  const renderCards = () => {
    return AdvisoryCards.map((student, index) => (
      <Box key={index} p={4}>
        <AdvisoryCard
          src={student.src}
          name={student.name}
          linkedin={student.linkedin}
          github={student.github}
          width={225}
          height={225}
          alignRight={false}
        />
      </Box>
    ));
  };

  return (
    <Flex flexDirection="column" alignItems="center" className='backstudmanage'>
      <Flex justifyContent="center" mb={3} pb={1} className="faculty-header">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 xl:mt-0"
        >
          <span className="text-accent">Alumni </span> Advisory
        </motion.h2>
      </Flex>
      <Box
        width="100%"
        overflowY="auto"
        height={{ base: '50vh', lg: '64vh' }}
        className="backstudmanage"
        pb={50} // Adding padding at the bottom to ensure all cards are fully visible
        css={{
          '&::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#4a4aa2',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#393970',
            borderRadius: '20px',
            border: '3px solid #1a1a2e',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#80fffb',
          },
        }}
      >
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={5}>
          {renderCards()}
        </Grid>
      </Box>
    </Flex>
  );
}

export default Advisory;
