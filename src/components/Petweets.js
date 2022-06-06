import { Flex, Image, Button, Textarea, Text} from '@chakra-ui/react';
import React from 'react';
import dogMenuMobile from "../images/dogMenuMobile.png"


function Petweets(){

    return(
        <Flex  direction={'column'} h={'1280px'}  w={'297px'} 
        borderBottom={'1px solid #EEEEEE'}>
          <Flex> 
                <Image boxSize={'37px'} src={dogMenuMobile} />
                <Textarea placeholder='O que está acontecendo?' maxLength={'140'} />
           </Flex>
            <Flex direction={'row'} justify-content={'flex-end'} >
                 <Text color="#828282" lineHeight={'24px'} fontSize={'14px'} fontWeight={'400'} 
                 alignItems={'flex-end'}> 0/140</Text>
                 <Button colorScheme="#00ACC1;" size='sm' type={'submit'} >Petweetar</Button>
            </Flex>

        </Flex>
    )
}

export default Petweets;