import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getAllTweet } from '../services/auth';
import CardTweet from './CardTweet';


function Feed(){
    const [tweet, setTweet] = useState([]);
  
    useEffect(() => {
        const request = async () => {
          try {
            const response = await getAllTweet()
            setTweet(response.data);
          } catch (error) {
            alert("não foi possível listar os tweets");
          }
    }   
    request();
  }, [])

    return(

             <Flex p={'12px'} direction={"column"}>
                {tweet.map ((element) => <CardTweet body={element.body} createdAt={element.createdAt} 
                user_id={element.user_id} /> )}
              </Flex>
    )
}

export default Feed;