import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import React from "react";
import { Flex, 
  Input, 
  InputGroup, 
  InputRightElement, 
  Button,
   Box, 
   Image, 
   Link, 
   Text, 
   FormLabel} from "@chakra-ui/react";
import { ViewIcon , ViewOffIcon } from '@chakra-ui/icons'
import dogRegister from "../images/dogRegister.png"
import symbolwhite from "../images/symbolwhite.png"
import footer from "../images/footer.png"
import dogRegisterMobile from "../images/dogRegisterMobile.png"
import logo from "../images/logo.png"
import  symbol from "../images/symbol.png";
import { Link as ReachLink } from "react-router-dom"

const Register = () => {
  
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

        <Flex bgImage={[dogRegisterMobile, dogRegister]} bgRepeat={"no-repeat"} bgPosition={"center"} bgSize={"cover"}
         alt='' w={["360px", "768px"]} h={["143px", "720px"]} >

           <Flex display={['flex', 'none']}  m={"auto"} gap={"39px"}>
            <Image boxSize={"50px"} src={symbolwhite}  />
              </Flex>

              <Flex display={['none', 'flex']} justifyContent={"center"} alignItems={"center"} w={"100%"}>
               <Image   w={"418px"} h={"103px"} src={logo}/>
               </Flex>
               </Flex>

       <Flex w={["296px","522px"]} m={"32px"} as={"start"} direction={"column"} >

       <Flex  display={['none', 'flex']} direction={"column"} mt={"22px"}>
             <Box>
               <Image   w={"76px"} h={"76px"} src={symbol}/>
              </Box>
             </Flex> 

         <Text color="gray.900" mt={["","32px"]} fontSize="24px" fontWeight="600">Cadastro</Text>

      <form onSubmit={handleSubmit} > 
      <Flex direction={"column"} >
      <FormLabel pt={"24px"}> Nome:
      <InputGroup>
      <Input  w={"100%"} pr='4.5rem'  placeholder='Nome' name="name" />
      </InputGroup>
      </FormLabel>

      <FormLabel  pt={"2px"}> Email:
      <InputGroup>
      <Input  w={"100%"} pr='4.5rem'  placeholder='E-mail'  name="email"  />
      </InputGroup>
      </FormLabel>

      <FormLabel  pt={"2px"}> Nome de usuário:
      <InputGroup>
      <Input  w={"100%"} pr='4.5rem' placeholder='Ex.:@doguinho'  name="username"  />
      </InputGroup>
      </FormLabel>
      <FormLabel  pt={"2px"}> Senha:
        <InputGroup >
       <Input  w={"100%"} pr='4.5rem'  placeholder='Senha' name="password"
        type={show ? 'text' : 'password'}/>
      <InputRightElement >
        <Button h='13px' onClick={handleClick} width="20px" position="absolute">
          {show ? <ViewOffIcon boxSize={6}/>  : <ViewIcon  boxSize={6}/>}
        </Button>
      </InputRightElement>
    </InputGroup>
    </FormLabel> 

    <Text  fontSize="10" fontWeight="400">Deve conter no mínimo oito números e uma letra maiúscula </Text>
        <Button colorScheme=" #00ACC1;" w={"100%"} mt={"36px"}  type="submit">Cadastrar</Button>
        </Flex>
      </form>
      
      <Text mt={"24px"}>
  Já possui cadastro? {''}
  <Text  as='u'>
  <Link as={ReachLink} to='/login' color='teal.500' href='#'>
   Faça login.
  </Link>
</Text>
</Text>
</Flex>

   <Box as={"center"}>
      <Image display={['flex', 'none']} src={footer} alt='' />
     </Box>
    </Flex>
  );
}

export default Register;