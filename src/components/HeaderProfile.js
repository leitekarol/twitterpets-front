import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../context/auth-context';
import nikoViraLata from '../images/nikoViraLata.png'


function HeaderProfile(){

    const {user} = useAuth()
console.log(user);
 return(
     <Flex direction={'row'} h={['130px','230px']} w={['360px', '683px']} 
     borderBottom={'1px solid #EEEEEE'} alignItems={'end'} >
         <Flex direction={'column'} ml={['16px' , '30px']}  >
         <Image boxSize={['73px','120px']} src={nikoViraLata} pr={'34px'}/>
         <Text fontWeight={['600', '700']} fontSize={['16px', '18px']} lineHeight={['22px' , '25px']} 
         pt={['12px', '40px']}  color={'#000000;'} >Petposts</Text>
         </Flex>
        <Flex direction={'column'} alignSelf={'center'}>
         <Text fontWeight={'700'} fontSize={['22px' ,'24px']} lineHeight={['30px','33px']}
          color={['#141619;' ,'#424242;']} >{user.name}</Text>
         <Text>{user.username}</Text>
         </Flex>
     </Flex>
 )
}

export default HeaderProfile;