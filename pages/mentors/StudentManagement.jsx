import React from 'react';
import { Box, Grid, GridItem, Text, Flex } from '@chakra-ui/react';
import StudentCard from "./StudentCard";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Students = () => {
  const studentCards = [
    {
      src: "/adithya.png",
      name: "ADITHYA S NAIR",
      position: "Chairman",
      instagram: "https://www.instagram.com/nair.ji_",
      linkedin: "https://www.linkedin.com/in/adithya-s-nair/",
      github: "https://github.com/ADITHYASNAIR2021"
    },
    {
      src: "/akarsh2.png",
      name: "AKARSH S NAIR",
      position: "Vice Chairman",
      instagram: "https://instagram.com/akarxh___?igshid=MWR4YmUzMTlqN2c3dg==",
      linkedin: "https://in.linkedin.com/in/akarsh-s-nair-426530227",
      github: "https://github.com/akarshsnair"
    },
    {
      src: "/Aadithyanraju.jpeg",
      name: "Aadithyan Raju",
      position: "Secretary",
      instagram: "https://www.instagram.com/aadithyan.raju/",
      linkedin: "https://www.linkedin.com/in/aadithyan-raju/",
      github: "https://github.com/AadithyanRaju"
    },
    {
      src: "/dhruvrk.jpg",
      name: "Dhruv R Krishnan",
      position: "SIG AI Lead",
      instagram: "https://www.instagram.com/drk_kai20",
      linkedin: "https://www.linkedin.com/in/dhruv-krishnan-65772923a/",
      github: "https://github.com/DRK-20"
    },
    {
      src: "/krishna.jpeg",
      name: "A P Krishna",
      position: "SIG AI Co Lead",
      linkedin: "https://in.linkedin.com/in/apkrishna",
      github: "https://github.com/apkrishna16"
    },
    {
      src: "/maanav.png",
      name: "Maanav Thalapilly",
      position: "SIG CP Lead",
      instagram: "https://instagram.com/_maanav.mn_?utm_source=qr&igshid=YzU1NGVlODEzOA==",
      linkedin: "https://www.linkedin.com/in/maanav-thalapilly-4718ab24a/",
      github: "https://github.com/MaanavT"
    },
    {
      src: "/kisore.jpg",
      name: "Kisor.G",
      position: "SIG Glitch Lead",
      instagram: "https://instagram.com/_kisor__",
      linkedin: "www.linkedin.com/in/kisor-g"
    },
    {
      src: "/athul.png",
      name: "ATHUL GIREESH",
      position: "Social Media Manager",
      instagram: "https://www.instagram.com/b_l_a_c_ks_a_n_t_a/",
      linkedin: "https://www.linkedin.com/in/athul-gireesh-02b4a8227/",
      github: "https://github.com/Athulg19"
    },
    {
      src: "/gautham.png",
      name: "Gautham Krishna",
      position: "Design Lead",
      instagram: "https://www.instagram.com/i_gauthu",
      linkedin: "https://www.linkedin.com/in/gauthu/",
      github: "https://github.com/gauthu3013"
    },
    {
      src: "/ashwinsabu.png",
      name: "Ashwin Sabu",
      position: "Design Team Co-Lead",
      instagram: "https://www.instagram.com/crosstar_xyvl_001/",
      linkedin: "https://www.linkedin.com/in/ashwin-sabu-31a0a0b4/",
      github: "https://github.com/CROSSTAR001"
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
      <Flex justifyContent="center" mb={20}>
        <Box h={6} w={3} mr={10} mt="15px" bgGradient="linear(to-t, blue.700, blue.400)" rounded="sm"></Box>
        <Text fontSize="5xl" fontWeight="bold" textAlign="center" color="slate.100" opacity={0.8}>Student Management</Text>
      </Flex>
      <Box
        width="100%"
        overflowY="auto"
        height={{ base: '70vh', lg: '85vh' }}
        className="backstudmanage"
        css={{
          '&::-webkit-scrollbar': {
            width: '5px',
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
        <Grid templateColumns="repeat(5, 1fr)" gap={8}>
          {renderCards()}
        </Grid>
      </Box>
    </Flex>
  );
}

export default Students;
