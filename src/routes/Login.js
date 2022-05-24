import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import React from "react";
import { Div, TitleInit } from "./styled";
import { Input, InputGroup, InputLeftAddon, InputRightElement, Button, Stack, Box, Image} from "@chakra-ui/react";




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
      
    <Div>

        <Box boxSize='sm'>
         <Image src="https://s2.glbimg.com/BzsxE5ZJi8kswxX0BrYxoE1N5LU=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/03/23/fotos-de-cachorros-trabalhando-home-office-instagram_2.jpg" alt='' />
        </Box>

   
        <Box boxSize='sm' >
         <Image src="https://www.figma.com/file/eZslU4AtcIY5A5AhwglSKj/Petwitter---V2?node-id=8%3A362" alt="" />
       </Box>
       
       <TitleInit>
        <h1>Comece agora.</h1>
        <h1>Conecte-se já!</h1>
      </TitleInit>
  

      <Stack spacing={4} width='auto' direction="column">
      <form onSubmit={handleSubmit}> 
      <InputGroup>
    <InputLeftAddon children='E-mail' />
         
      <Input placeholder='E-mail'  pr='4.5rem' size='md'  width='auto'  />
      </InputGroup>

        <InputGroup size='md'>
        <InputLeftAddon children='Senha' />
      <Input width='auto'
          pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Digite a senha'/>
      <InputRightElement width='4.5rem'>
        <Button h='1.75 rem' size='sm' onClick={handleClick} >
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
  
    </InputGroup>

        <Button colorScheme=" #00ACC1;"  type="submit">Entrar</Button>
      </form>
  </Stack>

  
    </Div>
  );
}

export default Login;