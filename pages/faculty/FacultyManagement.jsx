import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import FacultyCards from "./FacultyCards";

const FacultyManagement = () => {
    return (
        <Flex flexDirection="column" alignItems="center" className='backfacultymanage'>
            <Flex justifyContent="center" mb={10} pt={5} pb={1} className="faculty-header">
                <Box h={12} w={3} mr={2} mt={12} bgGradient="linear(to-t, blue.700, blue.400)" rounded="sm"></Box>
                <Text fontSize="5xl" mt={8} fontWeight="bold" color="white">Faculty Management</Text>
            </Flex>
            <Box
                width="100%"
                overflowY="auto"
                height={{ base: '50vh', lg: '75vh' }}
                className="faculty-body"
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
                <Flex justifyContent="center" alignItems="center" pb={8} flexWrap="wrap" mb={5} className="faculty-row-1">
                    <FacultyCards
                        src="/Jyothishanair.jpg"
                        name="Dr. Jyothisha Nair"
                        position="Chairperson"
                        mg="sm:mr-10 md:mr-28 lg:mr-24 xl:mr-32"
                        width={235}
                        height={235}
                    />
                    <FacultyCards
                        src="/Swaminathanj.jpg"
                        name="Dr. Swaminathan J"
                        position="Executive Committee Member"
                        mg="sm:mr-0 md:mr-0 lg:mr-24 xl:mr-32"
                        width={235}
                        height={235}
                    />
                    <FacultyCards
                        src="/Binupk.jpg"
                        name="Mr.P.K Binu"
                        position="Faculty Sponsor"
                        mg="mr-0 sm:mt-9 md:mt-10 lg:mt-0"
                        width={235}
                        height={235}
                    />
                </Flex>
                <Flex justifyContent="center" alignItems="center" pb={24} mb={20} flexWrap="wrap" className="faculty-row-1">
                    <FacultyCards
                        src="/Geethamam.jpg"
                        name="Dr. Geetha M"
                        position="Executive Committee Member"
                        mg="sm:mr-10 md:mr-28 lg:mr-24 xl:mr-32"
                        width={235}
                        height={235}
                    />
                    <FacultyCards
                        src="/Gopakumarg.jpg"
                        name="Dr. Gopakumar G"
                        position="Executive Committee Member"
                        mg="sm:mr-0 md:mr-0 lg:mr-24 xl:mr-32"
                        width={235}
                        height={235}
                    />
                    <FacultyCards
                        src="/Priyamam1.png"
                        name="Priya M"
                        position="Executive Committee Member"
                        mg="mr-0 sm:mt-9 md:mt-10 lg:mt-0"
                        width={235}
                        height={235}
                    />
                </Flex>
            </Box>
        </Flex>
    );
}

export default FacultyManagement;
