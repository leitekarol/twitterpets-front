// import { useAuth } from "../context/auth-context";
import { Flex, Image} from "@chakra-ui/react";
import logoMenuDesktop from "../images/logoMenuDesktop.png"
import MenuLink from "./MenuLink.js";
import SignoutModal from "./SignoutModal";

function MenuDesktop(){

return (
     <Flex  position={'relative'} direction={'column'} h={'1280px'} align={'center'} w={'297px'} 
       borderRight={'1px solid #EEEEEE'} >
          <Flex p={'24px'}>
           <Image src={logoMenuDesktop}/>
          </Flex>
              <MenuLink />
              <SignoutModal/>
              </Flex>
)
}

export default MenuDesktop;