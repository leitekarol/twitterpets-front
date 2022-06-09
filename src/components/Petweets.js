import { Flex, Image, Button, Textarea, Text} from '@chakra-ui/react';
import React from 'react';
import dogMenuMobile from "../images/dogMenuMobile.png"
import { useForm } from "react-hook-form";
import { createTweet } from '../services/auth';
import { useState } from 'react';

function Petweets(){

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

    return(
        <form onSubmit = { handleSubmit(onSubmit) } >
        <Flex  direction={'column'} w={'297px'} 
        borderBottom={'1px solid #EEEEEE'}>
          <Flex pl={'27px'} pt={'34px'}> 
                <Image boxSize={'37px'} src={dogMenuMobile} />

                <Textarea  resize={'none'} pb={'64px'} placeholder='O que está acontecendo?' maxLength={'140'} 
                border= {"none"} {...register("body")} />
           </Flex>
            <Flex direction={'row'}  alignSelf={'flex-end'} >
                 <Text color="#828282" lineHeight={'24px'} fontSize={'14px'} fontWeight={'400'} 
                 alignItems={'flex-end'}> 0/140</Text>
                 <Button colorScheme="#00ACC1;" size='sm' type={'submit'} isLoading={sending} >Petweetar</Button>
            </Flex>
        </Flex>
        </form>
    )
}

export default Petweets;