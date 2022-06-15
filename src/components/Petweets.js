import { Flex, Image, Button, Textarea, Text} from '@chakra-ui/react';
import React from 'react';
import dogMenuMobile from "../images/dogMenuMobile.png"
import { useForm } from "react-hook-form";
import { createTweet } from '../services/auth';
import { useState } from 'react';

function Petweets(){

    const [sending, setSending] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const [countCaracter, setCountCaracter] = useState(0);
   
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
      <Flex  direction={'column'} minWidth="600px" width={"100%"} maxHeight="210px" maxWidth="784px"
      borderBottom={'1px solid #EEEEEE'} position={'relative'}>
          <form onSubmit = { handleSubmit(onSubmit)} onChange={event => setCountCaracter(event.target.value.length)}>
          <Flex pl={'27px'} pt={'34px'}> 
                <Image boxSize={'37px'} src={dogMenuMobile} />
                <Textarea  resize={'none'} pb={'64px'} placeholder='O que está acontecendo?' maxLength={'140'} 
                border= {"none"} {...register("body")} />
           </Flex>
            <Flex direction={'row'}  gap={'8px'}  justifyContent={'flex-end'}>
                 <Text color="#828282" lineHeight={'24px'} fontSize={'14px'} fontWeight={'400'} 
                 alignItems={'flex-end'}> {countCaracter}/140</Text>
                 <Button colorScheme="#00ACC1;" size='sm' type={'submit'} isLoading={sending}>Petweetar</Button>
            </Flex>
            </form>
       </Flex>
    )
}

export default Petweets;