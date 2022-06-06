
import {signup} from "../services/auth.js"
import React from "react";
import { Flex, Input, InputGroup, InputRightElement, Button, Box, Image, Link, Text, FormLabel,
   } from "@chakra-ui/react";
import { ViewIcon , ViewOffIcon } from '@chakra-ui/icons'
import dogRegister from "../images/dogRegister.png"
import symbolwhite from "../images/symbolwhite.png"
import footer from "../images/footer.png"
import dogRegisterMobile from "../images/dogRegisterMobile.png"
import logo from "../images/logo.png"
import  symbol from "../images/symbol.png";
import { Link as ReachLink } from "react-router-dom"

const SignUp = () => {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
 
  async function handleSubmit(event) {
    try{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data2 ={ name:formData.get("name"), 
    email:formData.get("email"), 
    username:formData.get("username"), 
    password:formData.get("password")}
    console.log(data2);
    await signup(data2);
    alert("Usuário criado com sucesso!")
  } catch (error){
    alert("Esse usuário já foi criado!")

  };
  }

  
  return (
      
    <Flex direction={['column', 'row']}  mw={["480px", "1280px"]} 
    mh={["800px", "720px"]}>

        <Flex bgImage={[dogRegisterMobile, dogRegister]} bgRepeat={"no-repeat"} bgPosition={"center"} bgSize={"cover"}
         alt='' w={["", "768px"]} h={["143px", "720px"]} >

           <Box display={['flex', 'none']} justifyContent={"end"} alignItems={"center"} m={"38px"}  >
            <Image boxSize={"50px"} src={symbolwhite}  />
              </Box>

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
        <Button h='13px' onClick={handleClick} width="20px" position="absolute" bg={'none'}>
          {show ? <ViewOffIcon boxSize={6}/>  : <ViewIcon  boxSize={6}/>}
        </Button>
      </InputRightElement>
    </InputGroup>
    </FormLabel> 

    <Text  fontSize="10" fontWeight="400">Deve conter no mínimo oito números e uma letra maiúscula </Text>
        <Link colorScheme=" #00ACC1;" w={"100%"} mt={"36px"}  type="submit" >Cadastrar</Link>
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

export default SignUp;