import { Flex,  Button, Modal, ModalBody,  ModalContent,  ModalHeader, useDisclosure, Image, Textarea, Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import dogMenuMobile from "../images/dogMenuMobile.png"
import { createTweet } from '../services/auth';


function PetweetsMobile(){


const { isOpen, onOpen, onClose } = useDisclosure()
const size = ['full']
const [sending, setSending] = useState(false)
const { register, handleSubmit, reset } = useForm();
const onSubmit = async (event) => {
    try {
        setSending(true) 
        await createTweet(event);
        setSending(false) 
        reset();

    } catch (error) {
        alert("Não foi possível criar o tweet");
    }
}

return (
  <Flex justifyContent={'flex-end'}>
  <Button boxSize={'50px'} colorScheme='#00ACC1;' href='#' onClick={onOpen} color={"#FFFFFF;"}
   position={'fixed'} bottom={'0px'} rigt={'0px'} borderRadius={'full'}>Post</Button>
  <Modal isCentered isOpen={isOpen} size={size}>
     <form onSubmit = { handleSubmit(onSubmit) } >
       <ModalContent  align={'center'}  direction={'column'}  w={'360px'} >
           <ModalHeader display={'flex'} direction={'row'} justifyContent={'space-evenly'}
          borderBottom={'1px solid #EEEEEE;'} h={'64px'}>
                <Button onClick={onClose}>Cancelar</Button>
                <Text color="#828282;" lineHeight={'24px'} fontSize={'14px'} fontWeight={'400'} 
                alignItems={'flex-end'}>0/140</Text>
                <Button colorScheme="#00ACC1;" size='sm' type={'submit'} isLoading={sending}>Petweetar</Button>
           </ModalHeader>
         <ModalBody display={'flex'} direction={'row'}>
         <Image boxSize={'37px'} src={dogMenuMobile} />
          <Textarea  resize={'none'} border={'none'} placeholder='O que está acontecendo?' maxLength={'140'} 
          {...register("body")}/>
         </ModalBody>
       </ModalContent>
       </form>
     </Modal>
 
     </Flex>
)
}
export default PetweetsMobile;