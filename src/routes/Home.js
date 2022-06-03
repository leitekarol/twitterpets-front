
import React from "react";
import MenuMobile from "../components/MenuMobile.js";
// import Teste from "../components/Teste.js";
import MenuDesktop from "../components/MenuDesktop.js";
import { Flex } from "@chakra-ui/react";


function Home() {

    return(
 <Flex direction={['column']}  mw={["480px", '"1280px"']}  mh={["800px", "720px"]}>      
          <Flex display={["flex", "none"]}>
            <MenuMobile />
            </Flex>
            <Flex display={["none", "flex"]}>
             <MenuDesktop />
             </Flex> 
 </Flex>
    )
}

export default Home;