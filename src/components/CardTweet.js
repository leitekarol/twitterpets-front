
import nikoViraLata from '../images/nikoViraLata.png'
// import gatoMalhado from "../images/gatoMalhado.png"
// import maiconoSalsicha from "../images/maiconoSalsicha.png"
// import cacatuaAna from "../images/cacatuaAna.png"
// import LaikaSputnik from "../images/LaikaSputnik.png"
// import simbaGatinho from "../images/simbaGatinho.png"
// import wandaPeixe from "../images/wandaPeixe.png"
import { Flex, Text, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { getUser } from '../services/auth';
import ReactTimeAgo from 'react-time-ago';
import { useLocation } from 'react-router-dom';
// import portugueseStrings from 'react-timeago/lib/language-strings/pt' 
// import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'  
// import TimeAgo from 'javascript-time-ago';
import { Link } from "react-router-dom";


const CardTweet = ({body, createdAt, user_id}) => {

  
    const location = useLocation();
    const [user, setUser] = useState({name: "Carregando", username: "Carregando"})
     useEffect(() => {
        const request = async () => {
          try {
            const response = await getUser(user_id)
            setUser(response.data);
          } catch (error) {
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
