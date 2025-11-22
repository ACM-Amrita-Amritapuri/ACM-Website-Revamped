import React from 'react';
import { Box, Grid, Text, Flex } from '@chakra-ui/react';
import StudentCard from "./StudentCard";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Students = () => {
  const studentCards = [
    {
      src: "/vasu.png",
      name: "Vasu",
      position: "Chair , Cyber Lead",
      instagram: "https://www.instagram.com/va_zzu_b.riz?igsh=MWJnZnNya2FjbDhzcQ==",
      linkedin: "https://www.linkedin.com/in/vasudevb25/",
      github: "https://github.com/vasudevb25"
    },
    {
      src: "/johan.png",
      name: "Johan Rajesh",
      position: "V.C , App and Web Head",
      instagram: "https://www.instagram.com/harinarayan721?igsh=ZjE4OHRoYTJrbWN4",
      linkedin: "http://www.linkedin.com/in/hari-narayan-629867248",
      github: "https://github.com/Hari-with-an-i"
    },
    {
      src: "/abhinav2.png",
      name: "Abinav Manoj",
      position: "Vice chair",
      instagram: "https://www.instagram.com/abhinav_m_rudra?igsh=MTQ1Z2I5YnRibXdq&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/abhinav-manoj-8ab8b1221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/AbhinavRudra"
    },
    {
      src: "/ananthan.png",
      name: "Ananthakrishnan S",
      position: "Web Master , Treasurer",
      instagram: "https://www.instagram.com/ananth_akrishnan_/",
      linkedin: "https://www.linkedin.com/in/ananthakrishnan-s-997819313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/ArjunAk1234"
    },
    {
      src: "/keerthana.png",
      name: "Keerthana",
      position: "Secretary",
      instagram: "https://www.instagram.com/__keerthana.gz?igsh=MTV6ZTQxZGszMmdjMg==",
      linkedin: "https://www.linkedin.com/in/keerthana-sai-gazula-4013b927a/",
      github: "https://github.com/KeerthanaG2"
    },
    {
      src: "/advyth1.png",
      name: "Advyth",
      position: "AI Lead",
      instagram: "https://www.instagram.com/advythvaman_05?igsh=MW80ZmdseTdsc2F4MQ==",
      linkedin: "https://www.linkedin.com/in/advyth-vaman-akalankam/",
      github: "https://github.com/AdvythVaman05"
    },
    {
      src: "/vasihnav2.png",
      name: "Vaishnav",
      position: "App Dev Lead",
      instagram: "https://www.instagram.com/v_p.nair_?igsh=MWwxNnkxY29rNXc0ZQ==",
      linkedin: "https://www.linkedin.com/in/vaishnav-p-nair-057435289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/CodeMaestro01"
    },
    {
      src: "/shyam.png",
      name: "Ghanasyam",
      position: "Web Dev Lead",
      instagram: "https://www.instagram.com/ghanasyaaam?igsh=MTg5MWpnNjJnajRjbg==",
      linkedin: "https://www.linkedin.com/in/ghanasyam-sunil-4b9339291/",
      github: "https://github.com/ghanasyaam"
    },
    {
      src: "/abhinavglitch.jpeg",
      name: "Abhinav G Nair",
      position: "Glitch Lead",
      instagram: "https://www.instagram.com/abhinav_g_nair?igsh=MTM1b3Jsbm8yOXBrag==",
      linkedin: "https://www.linkedin.com/in/abhinav-g-nair-a353892b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Absguy"
    },
 
    {
      src: "/anashwara.jpeg",
      name: "Anaswara A",
      position: "Cyber Co-Lead",
      instagram: "https://www.instagram.com/anaswara_ani1?igsh=MXU5NWRranN1bXc5MQ==",
      linkedin: "https://www.linkedin.com/in/anaswara-anil-2403b3282/",
      github: " https://github.com/Atrnl"
    },
    {
      src: "/govardhan.jpeg",
      name: "Govardhan Satya",
      position: "AI Co-Lead",
      instagram: "https://www.instagram.com/tycoongovardhan?igsh=cHlnbjg3MzUxeWoz",
      linkedin: "https://www.linkedin.com/in/govardhan-satya-gadi-95803b216p",
      github: "https://github.com/govardhansatya"
    },
    {
      src: "/anirudh.png",
      name: "Anirudh Suresh",
      position: "Web Dev Co-Lead",
      instagram: "https://www.instagram.com/anirudhsuresh05?igsh=d3p3MDM0cjJwaDhp",
      linkedin: "https://www.linkedin.com/in/anirudh-suresh-5015b7328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Anirudh05bit"
    },
    // {
    //   src: "/harshita.png",
    //   name: "Harshita",
    //   position: "Design Lead",
    //   instagram: "https://www.instagram.com/va_zzu_b.riz/",
    //   linkedin: "https://www.linkedin.com/in/harshitha-dandamudi-b9b326289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    //   github: "https://github.com/harshi1ha"
    // },
    {
      src: "/aditi.png",
      name: "Aditi S",
      position: "Media Lead",
      instagram: "https://www.instagram.com/a_diti_s/",
      linkedin: "https://www.linkedin.com/in/aditi-sunilkumar/",
      github: "https://github.com/a1diti1s"
    },
    
    {
      src: "/karthikrs.jpeg",
      name: "Karthik R S",
      position: "Design Lead",
      instagram: "https://www.instagram.com/_k.arthiii/profilecard/?igsh=MWRrd2R4eHBpemdibg==",
      linkedin: "https://www.linkedin.com/in/karthik-r-s/",
      github: "https://github.com/karthikrs05"
    },
    {
      src: "/karthik.jpg",
      name: "Karthik Kishor",
      position: "Core",
      instagram: "https://www.instagram.com/karthikkishor_kk",
      linkedin: "https://www.linkedin.com/in/karthikkishorkk/",
      github: "https://github.com/karthikkishorkk"
    },
    {
      src: "/vign.jpeg",
      name: "Vighnesh B",
      position: "Core",
      instagram: "https://www.instagram.com/vighneshhb?igsh=MTZpbWl3YWh3bmNyZw==",
      linkedin: "https://www.linkedin.com/in/vighnesh-b-b9391b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/vighneshb04"
    },
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
