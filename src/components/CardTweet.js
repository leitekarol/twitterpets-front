
import nikoViraLata from '../images/nikoViraLata.png'
import { Flex, Text, 
  Image,
  //  useToast 
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { getUser } from '../services/auth';
import ReactTimeAgo from 'react-time-ago';
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";


const CardTweet = ({body, createdAt, user_id}) => {

  //  const {toast} = useToast();
    const location = useLocation();
    const [user, setUser] = useState({name: "Carregando", username: "Carregando"})
     useEffect(() => {
        const request = async () => {
          try {
            const response = await getUser(user_id)
            setUser(response.data);
          } catch (error) {
          //   toast({
          //     position: 'top',
          //     title: 'Não foi possível encontrar o usuário!',
          //     description: error.message,
          //     status: 'error',
          //     duration: 10000,
          //     isClosable: true,
          // })
          }
    }     
    request();
  }, [user_id])
  
    return(
           <Flex direction={'row'} gap={['8px','16px']} maxWidth={'780px'} p={'16px'}
           borderBottom={'1px solid #EEEEEE'}>
           <Image alignSelf={'flex-start'} boxSize={'48px'} src={nikoViraLata}/>
           <Flex  pr={'4px'} gap={'8px'}  color={'#757575;'} direction={'column'}> 
           <Flex direction={'row'} gap={'4px'} alignItems={'center'}> 
           <Link to={`${location.pathname === "/" ? "/profile/" + user_id : "#"}`}  fontSize={['14px','15px']} 
           lineHeight={'19px'} fontWeight={'700'} 
           >{user?.name}</Link> <Text  fontWeight={'300'} lineHeight={'17px'} 
           fontSize={['12px', '15px']}> {user?.username}</Text>
          <Text fontSize={['12px','15px']} fontWeight={['300','400']} lineHeight={['17px','21px']}>.</Text><ReactTimeAgo locale='pt-BR' date={Date.parse(createdAt)} fontWeight={['300','400']} 
          fontSize={['12px', '15px']} lineHeight={['17px','21px']}/>
          </Flex>
          <Text  fontWeight={'400'} fontSize={'14px'} color={'#141619;'}>{body}</Text> 
          </Flex>
           </Flex>
           
    )
}
export default CardTweet;
