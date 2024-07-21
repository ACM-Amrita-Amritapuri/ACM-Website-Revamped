import React from 'react';
import { Box, Grid, Text, Flex } from '@chakra-ui/react';
import StudentCard from "./StudentCard";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
    <Flex flexDirection="column" alignItems="center" className='backstudmanage'>
      <Flex justifyContent="center" mb={10}>
        <Box h={12} w={3} mr={3} mt="17px" bgGradient="linear(to-t, blue.700, blue.400)" rounded="sm"></Box>
        <Text fontSize="5xl" fontWeight="bold" textAlign="center" color="white">Core Committee</Text>
      </Flex>
      <Box
        width="100%"
        overflowY="auto"
        height={{ base: '50vh', lg: '64vh' }}
        className="backstudmanage"
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
        <Grid templateColumns="repeat(5, 1fr)" gap={5}>
          {renderCards()}
        </Grid>
      </Box>
    </Flex>
  );
}

export default Students;
