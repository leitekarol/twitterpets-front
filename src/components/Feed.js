import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getAllTweet } from '../services/auth';
import CardTweet from './CardTweet';
// import InfiniteScroll from 'react-infinite-scroll-component';

function Feed(){
    const [tweet, setTweet] = useState([]);
    // const [hasMore, setHasMore] = useState(true);
    // const [skip, setSkip] = useState(0);
    useEffect(() => {
        const request = async () => {
          try {
            const response = await getAllTweet()
            setTweet(response.data);
            console.log(response.data);
          } catch (error) {
            alert("Não foi possível listar os tweets");
          }
    }   
    request();
  }, [])

    return(
          
             <Flex  direction={"column"} >
                {/* <InfiniteScroll dataLength={tweet.length} next={fetchdata} hasMore={true} >  */}
                {tweet.map ((element) => <CardTweet body={element.body} createdAt={element.createdAt} 
                user_id={element.user_id} /> )}
                {/* </InfiniteScroll> */}
              </Flex>
    )
}

export default Feed;