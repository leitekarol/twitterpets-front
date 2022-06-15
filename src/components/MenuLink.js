import React from 'react';
import homeicon from "../images/homeicon.png"
import profileicon from "../images/profileicon.png"
import { Link as ReachLink, useLocation } from "react-router-dom";
import { Image, Flex, Box } from '@chakra-ui/react';
import { useAuth } from '../context/auth-context';


function MenuLink (){

  const {user} = useAuth();
  const location = useLocation();

    return(
        <Flex  direction={'column'}  alignItems={'center'} gap={'24px'} w={['','297px']}  >

        <Box  width={'100%'} h={'32px'} variant ="link" as={ReachLink} to={"/"}  colorScheme="teal"
        textAlign={"center"} bg={location.pathname === '/' ? "#E5F7F9;" : ""}>
        <Flex direction={'row'} justifyContent={'center'} alignItems={'center'} pt={'4px'} >
        <Image display={['none', 'flex']} h={'20px'} mr='10px' src={homeicon}/>Home 
        </Flex> 
        </Box>
    
       <Box  width={'100%'} h={'32px'} variant ="link" as={ReachLink} to={`/profile/${user.id}`}   colorScheme="teal"
        textAlign={"center"} bg={location.pathname === `/profile/${user.id}` ? "#E5F7F9;" : ""}>
             <Flex direction={'row'} justifyContent={'center'} alignItems={'center'} pt={'4px'}>
             <Image  display={['none', 'flex']} h={'20px'} mr='10px' src={profileicon}/>
             Meu petfil
             </Flex>
             </Box>
             </Flex>
    )
}

export default MenuLink;