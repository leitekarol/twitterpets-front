import {Drawer, DrawerBody, DrawerHeader,  DrawerOverlay, DrawerContent, Button, useDisclosure, 
  Box,  Image, Flex } from '@chakra-ui/react'
import React from 'react';
import menuMobile from '../images/menuMobile.png'
import logoMenuMobile from '../images/logoMenuMobile.png'
import dogMenuMobile from "../images/dogMenuMobile.png"
import logoMenuDesktop from "../images/logoMenuDesktop.png"
import MenuLink from "./MenuLink.js"
import SignoutModal from './SignoutModal';


function MenuMobile() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Flex direction={['column']}  maxWidth={'480px'} w={'100%'}  alignItems={'center'}  position={'fixed'}> 
    <Box display={'flex'}   boxShadow="base"  p="3" flexDirection={'row'} 
     bgImage={[logoMenuMobile, logoMenuDesktop ]} bgRepeat="no-repeat" bgPosition={"center"} 
     width={"100%"}  borderBottom={'ButtonShadow'}>
      <Button display={['flex', 'none']} ref={btnRef} bg='none'  onClick={onOpen} >
        <Image m={'2px'}  height={'21px'}  src= {menuMobile}   alt='menu' />
      </Button>
      </Box> 
      
      <Drawer display={['flex', 'none']} alignItems={'center'} placement='left' onClose={onClose} 
      finalFocusRef={btnRef} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader >
          <Image margin={"auto"} marginBottom={"2rem"} borderRadius='full'  
          boxSize='100px' src={dogMenuMobile}  alt='Photo'/>
          </DrawerHeader>
          <DrawerBody h={'138px'} >
            <MenuLink/>
            <SignoutModal m={'0px'}/>
          </DrawerBody>             
        </DrawerContent>
      </Drawer>
    </Flex>
 )
}
export default MenuMobile;
