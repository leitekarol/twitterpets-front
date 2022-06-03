// import { useAuth } from "../context/auth-context";
import { Flex, Image, Button} from "@chakra-ui/react";
import signouticon from "../images/signouticon.png"
import logoMenuDesktop from "../images/logoMenuDesktop.png"
import MenuLink from "./MenuLink.js";

function MenuDesktop(){

return (
     <Flex  position={'relative'} direction={'column'} h={'1280px'} align={'center'} w={'297px'} 
       borderRight={'1px solid #EEEEEE'} >
          <Flex p={'24px'}>
           <Image src={logoMenuDesktop}/>
          </Flex>
              <MenuLink />
            <Button w={'100%'} colorScheme='teal'
             variant='link'py={'12px'} borderRadius={0} >
                <Image src={signouticon} mr='11px' w={'20px'} h={'20px'} />Sair</Button>
</Flex>
)
}

export default MenuDesktop;