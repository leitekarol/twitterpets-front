import {Drawer, DrawerBody, DrawerHeader,  DrawerOverlay, DrawerContent, Button, useDisclosure, 
  Box,  Image, Flex } from '@chakra-ui/react'
import React from 'react';
import menuMobile from '../images/menuMobile.png'
import logoMenuMobile from '../images/logoMenuMobile.png'
import dogMenuMobile from "../images/dogMenuMobile.png"
import logoMenuDesktop from "../images/logoMenuDesktop.png"
import signouticon from "../images/signouticon.png"
import MenuLink from "./MenuLink.js"


function MenuMobile() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Flex direction={['column']}  w={'480px'} h={'800px'} alignItems={'center'}> 
    <Box display={'flex'}   boxShadow="base"  p="3" flexDirection={'row'} 
     bgImage={[logoMenuMobile, logoMenuDesktop ]} bgRepeat="no-repeat" bgPosition={"center"} 
     width={"100%"}  position={"absolute"} borderBottom={'ButtonShadow'}>
      <Button display={['flex', 'none']} ref={btnRef} bg='none'  onClick={onOpen} >
        <Image ml={'0.2rem'}  height={'1.3rem'}  src= {menuMobile}   alt='menu' />
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
          <DrawerBody  max-height={'136px'} >
            <MenuLink/>
          </DrawerBody>
          <Button alignItems={'center'} w={'100%'} colorScheme='teal'
             variant='link'py={'12px'} borderRadius={0} >
                      <Image src={signouticon} mr='11px' w={'20px'} h={'20px'} />Sair</Button>
        </DrawerContent>
      </Drawer>
    </Flex>
 )
}
export default MenuMobile;
