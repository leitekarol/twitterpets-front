import { Flex,  Button, Modal, ModalBody,  ModalContent,  ModalHeader, useDisclosure, Image, Textarea, Text
} from '@chakra-ui/react';
import React from 'react';
import dogMenuMobile from "../images/dogMenuMobile.png"
import Petweets from './Petweets';

function Feed(){

    const { isOpen, onOpen, onClose } = useDisclosure()

  const size = ['full']
 


    return(
        <Flex justifyContent={'flex-end'}>
   <Button boxSize={'50px'} colorScheme='#00ACC1' href='#' onClick={onOpen} >+</Button>
   <Modal isCentered isOpen={isOpen} size={size}>
       <form>
        <ModalContent  align={'center'}  direction={'column'}  w={'360px'} >
            <ModalHeader display={'flex'} direction={'row'} justifyContent={'space-evenly'}
           borderBottom={'1px solid #EEEEEE'} h={'64px'}>
                 <Button onClick={onClose}>Cancelar</Button>
                 <Text color="#828282" lineHeight={'24px'} fontSize={'14px'} fontWeight={'400'} 
                 alignItems={'flex-end'}>0/140</Text>
                 <Button colorScheme="#00ACC1;" size='sm' type={'submit'} >Petweetar</Button>
            </ModalHeader>
          <ModalBody display={'flex'} direction={'row'}>
          <Image boxSize={'37px'} src={dogMenuMobile} />
           <Textarea placeholder='O que está acontecendo?' maxLength={'140'} />
          </ModalBody>
        </ModalContent>
        </form>
      </Modal>

        </Flex>
    )
}

export default Feed;