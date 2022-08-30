import {
    Container,
    Heading,
    Center,
    Text,
    Button,
    Stack
  } from '@chakra-ui/react';
  import {Link} from 'react-router-dom'
  
  export default function Hero() {
    return (
      <Center width={'100vw'} bg={'gray.900'}>
      <Container>
        <Stack 
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontFamily='Goblins'
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            style={{
              color: "#fff",
              textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #DC143C, 0 0 40px #DC143C, 0 0 50px #DC143C, 0 0 60px #DC143C, 0 0 70px #DC143C"
            }}
            >
            GOBLINS{' '}
            <Text as={'span'} color={'red.700'}>
            FEED
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'} fontSize={'xl'}>
          When things get dark, {' '}
          <Text as={'span'} color={'red.700'} fontFamily='Goblins'>
            the Goblins{' '}
            </Text>
          are {' '}
          <Text as={'span'} color={'red.700'} fontFamily='Goblins'>
            ready {' '}
            </Text> . 
          </Text>
          <Text color={'gray.400'}>
            And it shall be so, <Text as={'span'} color={'red.700'} fontFamily='Goblins'>
            if:</Text></Text>
          <Text color={'gray.500'} maxW={'3xl'}>
          </Text>
          <Button rounded={'sm'} px={9} height={"2%"} bg={'gray.600'} color={'gray.300'} _hover={{'bg':'gray.700'}}>
                <Link to="/">
                Return
                </Link>
            </Button>
            <Button
                height={"2%"}
                rounded={'sm'}
                px={9}
                colorScheme={'red'}
                bg={'red.700'}
                _hover={{ bg: 'red.500' }}
                fontFamily='VTCGoblinHand'>
                Atone
            </Button>
        </Stack>
      </Container>
      </Center>

    );
  }