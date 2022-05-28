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
import doglogin from "../images/doglogin.png"
import symbolwhite from "../images/symbolwhite.png"
import footer from "../images/footer.png"
import dogRegisterMobile from "../images/dogRegisterMobile.png"
import logo from "../images/logo.png"
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

        <Flex bgImage={[doglogin, dogRegisterMobile]} bgRepeat={"no-repeat"} bgPosition={"center"} bgSize={"cover"}
         alt='' w={["", "768px"]} h={["143px", "720px"]} >

          <Flex display={['flex', 'none']}  ml={"32px"} mt={"45px"}> >
            <Image ml={"32px"} mt={"46px"} w={"52px"} src={symbolwhite} position={"absolute"}/>
              </Flex>

              <Flex display={['none', 'flex']} justifyContent={"center"} alignItems={"center"} w={"100%"}>
               <Image   w={"418px"} h={"103px"} src={logo}/>
               </Flex>

       <Flex w={["360","512px"]} alignContent={"center"} direction={"column"}>
         <Text color="gray.900" mt={["","32px"]} fontSize="24px" fontWeight="600">Cadastro</Text>

      <form onSubmit={handleSubmit} > 
      <Flex direction={"column"} >
      <FormLabel> Nome:
      <InputGroup>
      <Input  w={"100%"} pr='4.5rem'  placeholder='Nome' name="name" />
      </InputGroup>
      </FormLabel>

      <FormLabel > Email:
      <InputGroup>
      <Input  w={"100%"} pr='4.5rem'  placeholder='E-mail'  name="email"  />
      </InputGroup>
      </FormLabel>

      <FormLabel > Nome de usuário:
      <InputGroup>
      <Input  w={"100%"} pr='4.5rem' placeholder='Ex.:@doguinho'  name="username"  />
      </InputGroup>
      </FormLabel>
      <FormLabel > Senha:
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
        <Button colorScheme=" #00ACC1;" width={296} padding={5}  type="submit">Entrar</Button>
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

   <Box as={"center"}>
      <Image display={['flex', 'none']} src={footer} alt='' />
     </Box>
    </Flex>
    </Flex>
    </Flex> 
  );
}

export default Register;