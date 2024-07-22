import React from 'react';
import { Box, Grid, Flex } from '@chakra-ui/react';
import FacultyCards from "./FacultyCards";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const FacultyManagement = () => {
  const facultyCards = [
    {
      src: "/Jyothishanair.jpg",
      name: "Dr. Jyothisha Nair",
      position: "Chairperson",
    },
    {
      src: "/Swaminathanj.jpg",
      name: "Dr. Swaminathan J",
      position: "Executive Committee Member",
    },
    {
      src: "/Binupk.jpg",
      name: "Mr. P.K Binu",
      position: "Faculty Sponsor",
    },
    {
      src: "/Geethamam.jpg",
      name: "Dr. Geetha M",
      position: "Executive Committee Member",
    },
    {
      src: "/Gopakumarg.jpg",
      name: "Dr. Gopakumar G",
      position: "Executive Committee Member",
    },
    {
      src: "/Priyamam1.png",
      name: "Priya M",
      position: "Executive Committee Member",
    }
  ];

  const renderCards = () => {
    return facultyCards.map((faculty, index) => (
      <Box key={index} p={4}>
        <FacultyCards
          src={faculty.src}
          name={faculty.name}
          position={faculty.position}
          width={235}
          height={235}
          alignRight={false}
        />
      </Box>
    ));
  };

  return (
    <Flex flexDirection="column" alignItems="center" className='backfacultymanage'>
      <Flex justifyContent="center" mb={10} pt={5} pb={1} className="faculty-header">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 xl:mt-12"
        >
          <span className="text-accent">Faculty </span> Management
        </motion.h2>
      </Flex>
      <Box
        width="100%"
        overflowY="auto"
        height={{ base: '50vh', lg: '75vh' }}
        className="faculty-body"
        pb={150} // Adding padding at the bottom to ensure all cards are fully visible
        css={{
          '&::-webkit-scrollbar': {
            width: '12px',
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
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={5}>
          {renderCards()}
        </Grid>
      </Box>
    </Flex>
  );
}

export default FacultyManagement;
