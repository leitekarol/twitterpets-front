import React from "react";
import MenuMobile from "../components/MenuMobile.js";
import MenuDesktop from "../components/MenuDesktop.js";
import { Flex } from "@chakra-ui/react";
import UserProfile from "../components/UserProfile.js";
import HeaderProfile from "../components/HeaderProfile.js";

function Profile(){

    return(
        <Flex direction={['column']}  mw={["480px", '"1280px"']}  mh={["800px", "720px"]}>      
                 <Flex display={["flex", "none"]} direction={'column'} >
                   <MenuMobile />
                   <Flex direction={'column'}>
                   <HeaderProfile/>
                   <UserProfile/>
                   </Flex>
                   </Flex>
                   <Flex display={["none", "flex"]}>
                    <MenuDesktop />
                    <Flex direction={'column'}>
                    <HeaderProfile/>
                    <UserProfile/>
                    </Flex>
                    </Flex> 
        </Flex>
           )
       }
       
export default Profile;