import React from 'react';
import {   LinkBox,  Button,  useDisclosure,   
  Modal, ModalOverlay, ModalContent,  ModalBody, ModalHeader, Flex,Image } from '@chakra-ui/react';
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import signouticon from "../images/signouticon.png"


  
  function SignoutModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const auth = useAuth();
    const navigate = useNavigate();
      
    return (
        <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
   <ModalOverlay />
  <ModalContent  ml="15px" mr="15px" p={3} maxWidth={'336px'} maxHeight={'175px'}>
    <ModalHeader  pb={'16px'}color={'#424242'}>Sair desta conta?</ModalHeader>
    <ModalBody  pb={'32px'} color={'#424242'}>
      Deseja realmente sair desta conta?
    </ModalBody>
              <Flex justifyContent={'space-between'} gap="10px">
                <Button colorScheme='twitter' variant='outline' minW={["80px","150px"]}  width="100%"
                onClick={ () => {auth.signout(() => navigate("/"))}}>Sair</Button>
                <Button colorScheme='twitter' variant='solid' minWw={["80px","150px"]} width="100%" onClick={onClose}>Cancelar</Button>
              </Flex>
          </ModalContent>
      </Modal>
      
      <LinkBox pt={"48px"} justifyContent={'center'} onClick={onOpen} display={"flex"} flexDirection={"row"}><Image  src={signouticon} boxSize='25px' mx={"0.3rem"} alt='Photo'/> Sair </LinkBox>
      
          
      </>
    )
  }
  
  
  
  
  export default SignoutModal;