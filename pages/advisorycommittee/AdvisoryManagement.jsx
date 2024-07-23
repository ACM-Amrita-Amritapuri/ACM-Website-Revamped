import React from 'react';
import { Box, Grid, Flex } from '@chakra-ui/react';
import AdvisoryCard from "./AdvisoryCard";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Advisory = () => {
  const AdvisoryCards = [
    {
      src: "/adithya.png",
      name: "ADITHYA S NAIR",
      linkedin: "https://www.linkedin.com/in/adithya-s-nair/",
      github: "https://github.com/ADITHYASNAIR2021"
    },
    {
      src: "/akarsh2.png",
      name: "AKARSH S NAIR",
      linkedin: "https://in.linkedin.com/in/akarsh-s-nair-426530227",
      github: "https://github.com/akarshsnair"
    },
    {
      src: "/Aadithyanraju.jpeg",
      name: "Aadithyan Raju",
      linkedin: "https://www.linkedin.com/in/aadithyan-raju/",
      github: "https://github.com/AadithyanRaju"
    },
    {
      src: "/dhruvrk.jpg",
      name: "Dhruv R Krishnan",
      linkedin: "https://www.linkedin.com/in/dhruv-krishnan-65772923a/",
      github: "https://github.com/DRK-20"
    },
    {
      src: "/maanav.png",
      name: "Maanav Thalapilly",
      linkedin: "https://www.linkedin.com/in/maanav-thalapilly-4718ab24a/",
      github: "https://github.com/MaanavT"
    },
    {
      src: "/kisore.jpg",
      name: "Kisor G",
      linkedin: "www.linkedin.com/in/kisor-g",
      github: " "
    },
    {
      src: "/athul.png",
      name: "Athul Gireesh",
      linkedin: "https://www.linkedin.com/in/athul-gireesh-02b4a8227/",
      github: "https://github.com/Athulg19"
    },
    {
      src: "/gautham.png",
      name: "Gautham Krishna",
      linkedin: "https://www.linkedin.com/in/gauthu/",
      github: "https://github.com/gauthu3013"
    },
    {
      src: "/ashwinsabu.png",
      name: "Ashwin Sabu",
      linkedin: "https://www.linkedin.com/in/ashwin-sabu-31a0a0b4/",
      github: "https://github.com/CROSSTAR001"
    }
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
