
import nikoViraLata from '../images/nikoViraLata.png'
// import gatoMalhado from "../images/gatoMalhado.png"
// import maiconoSalsicha from "../images/maiconoSalsicha.png"
// import cacatuaAna from "../images/cacatuaAna.png"
// import LaikaSputnik from "../images/LaikaSputnik.png"
// import simbaGatinho from "../images/simbaGatinho.png"
// import wandaPeixe from "../images/wandaPeixe.png"
import { Flex, Link, Text, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { getUser } from '../services/auth';


const CardTweet = ({body, createdAt, user_id}) => {

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
           <Flex  w={'360px'}   direction={'row'} m={'16px'}>
           <Image boxSize={'48px'} src={nikoViraLata}/>
           <Link to="/profile" >{user?.name}</Link> <Text> {user?.username}</Text>
           <Text> {body}</Text> 
          <Text> {createdAt} </Text>
           </Flex>
    )
}
export default CardTweet;
