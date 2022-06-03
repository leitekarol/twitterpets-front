import React from 'react';
import homeicon from "../images/homeicon.png"
import profileicon from "../images/profileicon.png"
import { Link, Link as ReachLink } from "react-router-dom";
import { Image, Flex } from '@chakra-ui/react';



function menuLink (){

    return(
        <Flex  direction={'column'}  alignItems={'center'} gap={'24px'} w={['','297px']} h={['','148px']} >

        <Link width={'100%'} variant ="link" as={ReachLink} to="/"  colorScheme="teal"
        textAlign={"center"}>
              <Flex direction={'row'} >
        <Image display={['none', 'flex']} h={'20px'} mr='10px' src={homeicon}/>Home 
        </Flex> 
        </Link>
    
       <Link  width={'100%'} variant ="link" as={ReachLink} to="/profile"  colorScheme="teal"
        textAlign={"center"}>
             <Flex direction={'row'} >
             <Image  display={['none', 'flex']} h={'20px'} mr='10px' src={profileicon}/>
             Meu petfil
             </Flex>
             </Link>
             </Flex>
    )
}

export default menuLink;