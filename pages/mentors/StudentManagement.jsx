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
      instagram: "https://instagram.com/_akhilmenon",
      linkedin: "https://www.linkedin.com/in/akhil-menon-513503244/",
      github: "https://github.com/TheCrazyman1324"
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
      instagram: "https://www.instagram.com/locateme._gps?igsh=NHEyMmg2dmFicjA3",
      linkedin: "https://www.linkedin.com/in/gowri-shenoy-676100284",
      github: "https://github.com/Locateme-GPS"
    },
    {
      src: "/ajan.jpg",
      name: "Ajan",
      position: "Treasurer",
      instagram: "https://www.instagram.com/ajannnnnnnnnnnnnnnnnn?igsh=N2s4dW85aXBrYmNu",
      linkedin: "https://www.linkedin.com/in/ajan-s",
      github: "https://github.com/ajan421"
    },
    {
      src: "/avishek.jpg",
      name: "Avishek Rauniyar",
      position: "Program Co-ordinator",
      instagram: "https://www.instagram.com/avishek8136/",
      linkedin: "https://linkedin.com/in/avishek-rauniyar-b29275259",
      github: "https://github.com/Avishek8136"
    },
    {
      src: "/lokesh.jpg",
      name: "Lokesh Yarramallu",
      position: "AI Lead",
      instagram: "https://www.instagram.com/lokesh_yarramallu?igsh=Ym96YWM4Njg5eWVx",
      linkedin: "https://www.linkedin.com/in/lokeshyarramallu/",
      github: "https://github.com/LokeshYarramallu"
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
      // instagram: "",
      linkedin: "https://www.linkedin.com/in/nandithank/",
      github: "https://github.com/NandithaNK"
    },
    {
      src: "/surya.jpeg",
      name: "Surya",
      position: "Design lead",
      instagram: "https://www.instagram.com/s.u.r_y.a?igsh=OTFvMnA3ZmQ1Zmtt",
      linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
      github: "https://github.com/Suryakiran071"
    },
    {
      src: "/Navneeth.jpeg",
      name: "Navneeth",
      position: "Creative head",
      instagram: "https://www.instagram.com/_navth/",
      linkedin: "https://www.linkedin.com/in/navaneeth-n-817658271/",
      github: "https://github.com/navth"
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
      <Flex justifyContent="center" mb={3} pb={1} className="faculty-header">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 xl:mt-0"
        >
          <span className="text-accent">Core </span> Committee
        </motion.h2>
      </Flex>
      <Box
        width="100%"
        overflowY="auto"
        height={{ base: '50vh', lg: '65vh' }}
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
