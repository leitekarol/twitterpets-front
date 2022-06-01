import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import React from "react";
import {
  Input, 
  InputGroup, 
  InputRightElement, 
  Button, 
  Box, 
  Image, 
  Link, 
  Text, 
  Flex,
  FormLabel} from "@chakra-ui/react";
import { ViewIcon , ViewOffIcon } from '@chakra-ui/icons'
import logo from "../images/logo.png"
import doglogin from "../images/doglogin.png"
import symbolwhite from "../images/symbolwhite.png"
import footer from "../images/footer.png"
import dogLoginMobile from "../images/dogLoginMobile.png"
import symbol from "../images/symbol.png"
import { Link as ReachLink } from "react-router-dom"


function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const from = location.state?.from?.pathname || "/";
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }
 


  return (
      <Flex direction={['column', 'row']}  mw={["480px", "1280px"]} 
      mh={["800px", "720px"]}>
    
        <Flex bgImage={[doglogin, dogLoginMobile]} bgRepeat={"no-repeat"} bgPosition={"center"} bgSize={"cover"}
         alt='' w={["", "768px"]} h={["262px", "720px"]} >

            <Flex display={['flex', 'none']} direction={"column"} m={"auto"} gap={"39px"}>
            <Image boxSize={"50px"} src={symbolwhite}  />
               <Text w={"100%"} color={"white"}
               fontSize={"36px"} fontWeight={"700"} lineHeight={"49px"} >
               Comece agora.<br/>
               Conecte-se já.
              </Text> 
            </Flex>

         <Flex display={['none', 'flex']} justifyContent={"center"} alignItems={"center"} w={"100%"}>
               <Image   w={"418px"} h={"103px"} src={logo}/>
               </Flex>
           </Flex>
          
  <Flex m="32px" w={["360","512px"]}  as={"start"} direction={"column"}>
 
     <Flex  display={['none', 'flex']} direction={"column"} mt={"22px"}>
             <Box>
               <Image   w={"76px"} h={"76px"} src={symbol}/>
              </Box>
               <Text w={"264px"} h={"98px"} color={"#00ACC1"}
               fontSize={"36px"} fontWeight={"700"}>
               Comece agora.
               Conecte-se já.
              </Text> 
             </Flex>
            
      <Text color="gray.900" mt={["","32px"]} mb={"32px"} fontSize="24px" fontWeight="600">Login</Text>

  
      <form onSubmit={handleSubmit} > 
      <Flex direction={"column"} >
     <FormLabel> Email:
      <Input  w={"100%"} pr='4.5rem' placeholder='E-mail'  name="email"  />
      </FormLabel> 
      <FormLabel pt={"2px"}> Senha:
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Senha'
        name="password"
        w={"100%"}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? <ViewOffIcon boxSize={6}/> : <ViewIcon  boxSize={6}/>}
        </Button>
      </InputRightElement>
    </InputGroup>
    </FormLabel>
        <Button mt={"36px"} colorScheme=" #00ACC1;"    w={"100%"}
         type="submit">Entrar</Button>
             </Flex>
      </form>
  

      <Text mb={"30px"} mt={"24px"} >
          Ainda não possui uma conta?{' '} <br/>
          <Text  as='u'>
          <Link  as={ReachLink} to='/signup' color='teal.500' href='#'>
            Cadastre-se
        </Link>  
        </Text>
   </Text>
   </Flex>
   <Box as={"center"} mb={"24px"}>
      <Image display={['flex', 'none']} src={footer} alt='' />
     </Box>
  </Flex>
  );
}

export default Login;