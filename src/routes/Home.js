
import React from "react";
import MenuMobile from "../components/MenuMobile.js";
import MenuDesktop from "../components/MenuDesktop.js";
import { Flex } from "@chakra-ui/react";
import Petweets from "../components/Petweets.js";
import Feed from "../components/Feed.js";
import PetweetsMobile from "../components/PetweetsMobile.js";


function Home() {

    return(
 <Flex direction={['column']}  mw={["480px", '"1280px"']}  mh={["800px", "720px"]}>      
          <Flex display={["flex", "none"]}   >
            <MenuMobile />
            <PetweetsMobile/>
            <Feed />
            </Flex>
            <Flex display={["none", "flex"]}>
             <MenuDesktop />
             <Flex direction={['column']} >
             <Petweets/>
             <Feed/>
             </Flex>
       </Flex> 
 </Flex>
    )
}

export default Home;