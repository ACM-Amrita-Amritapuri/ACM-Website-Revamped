import React from 'react';
import { Box, Grid, Text, Flex } from '@chakra-ui/react';
import StudentCard from "./StudentCard";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Students = () => {
  const studentCards = [
    {
      src: "/akhil.jpg",
      name: "Akhil M Menon",
      position: "Chair and Web Lead",
      instagram: "",
      linkedin: "",
      github: ""
    },
    {
      src: "/hari blow.jpg",
      name: "Hari G Narayan",
      position: "V.C and Glitch Lead",
      instagram: "",
      linkedin: "",
      github: ""
    },
    {
      src: "/gps 2.jpg",
      name: "Gowri P Shenoy",
      position: "Secretary",
      instagram: "",
      linkedin: "",
      github: ""
    },
    {
      src: "/ajan.jpg",
      name: "Ajan",
      position: "Treasurer",
      instagram: "",
      linkedin: "",
      github: ""
    },
    {
      src: "/avishek.jpg",
      name: "Avishek Rauniyar",
      position: "Program Co-ordinator",
      instagram: "",
      linkedin: "",
      github: ""
    },
    {
      src: "/lokesh.jpg",
      name: "Lokesh Yarramallu",
      position: "AI Lead",
      instagram: "",
      linkedin: "",
      github: ""
    },
    {
      src: "/niranjan.jpg",
      name: "Niranjan",
      position: "Cyber Lead",
      instagram: "",
      linkedin: "",
      github: ""
    },
    {
      src: "/nanditha.jpg",
      name: "Nanditha",
      position: "CP Lead",
      instagram: "",
      linkedin: "",
      github: ""
    },
    {
      src: "/athul.png",
      name: "ATHUL GIREESH",
      position: "Social Media Manager",
      instagram: "",
      linkedin: "",
      github: ""
    },
    {
      src: "/gautham.png",
      name: "Gautham Krishna",
      position: "Design Lead",
      instagram: "",
      linkedin: "",
      github: ""
    }
  ];

  const renderCards = () => {
    return studentCards.map((student, index) => (
      <Box key={index} p={4}>
        <StudentCard
          src={student.src}
          name={student.name}
          position={student.position}
          instagram={student.instagram}
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
    <Flex flexDirection="column" alignItems="center" className=''>
      <Flex justifyContent="center" mb={10} pt={5} pb={1} className="faculty-header">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 xl:mt-12"
        >
          <span className="text-accent">Core </span> Committee
        </motion.h2>
      </Flex>
      <Box
        width="100%"
        overflowY="auto"
        height={{ base: '50vh', lg: '64vh' }}
        className="backstudmanage"
        pb={50}
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

export default Students;
