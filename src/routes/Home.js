
import React from "react";
import MenuMobile from "../components/MenuMobile.js";
import MenuDesktop from "../components/MenuDesktop.js";
import { Flex } from "@chakra-ui/react";
import Petweets from "../components/Petweets.js";
import Feed from "../components/Feed.js";


function Home() {

    return(
 <Flex direction={['column']}  mw={["480px", '"1280px"']}  mh={["800px", "720px"]}>      
          <Flex display={["flex", "none"]} direction={'column'} >
            <MenuMobile />
            <Feed />
            </Flex>
            <Flex display={["none", "flex"]}>
             <MenuDesktop />
             <Petweets/>
             </Flex> 
 </Flex>
    )
}

export default Home;