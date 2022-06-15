import { Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import nikoViraLata from '../images/nikoViraLata.png'
import { getUser } from '../services/auth';


function HeaderProfile(){

    const {user} = useAuth()
    const {user_id} = useParams()
    const [userBack, setUserBack] = useState({name: "Carregando", username: "Carregando"})
    useEffect(() => {
        const request = async () => {
          try {
            const response = await getUser(user_id)
            setUserBack(response.data);
          } catch (error) {
          }
    }     
    request();
  }, [user_id])

 return(
     <Flex direction={'row'} h={['130px','230px']} w={['360px', '683px']} 
     borderBottom={'1px solid #EEEEEE'} alignItems={'end'} >
         <Flex direction={'column'} ml={['16px' , '30px']}  >
         <Image boxSize={['73px','120px']} src={nikoViraLata} pr={'34px'}/>
         <Text fontWeight={['600', '700']} fontSize={['16px', '18px']} lineHeight={['22px' , '25px']} 
         pt={['12px', '40px']}  color={'#000000;'} borderBottom={'3px solid #00ACC1'}
      borderStartEndRadius={'10px'}>Petposts</Text>
         </Flex>
        <Flex direction={'column'} alignSelf={'center'}>
         <Text fontWeight={'700'} fontSize={['22px' ,'24px']} lineHeight={['30px','33px']}
          color={['#141619;' ,'#424242;']} >{userBack ? userBack.name : user.name}</Text>
         <Text>{userBack ? userBack.username : user.username}</Text>
         </Flex>
     </Flex>
 )
}

export default HeaderProfile;