import { Button, Stack, Center } from "@chakra-ui/react" 
import { BrowserRouter, Route, Link } from "react-router-dom";

const Action = () => (
    <Center height={"55vh"} position={'relative'} zIndex={1}>
        <Stack spacing={1} direction={'row'} position={'absolute'} top={10}>
            <Button rounded={'lg'} px={50} height={"20%"} bg={'blackAlpha.700'} 
            color={'gray.100'} _hover={{ color: '#FFD700', bg:'whiteAlpha.500' }}>
                <Link to="/tokenomics">
                Eat
                </Link>
            </Button>
            <Button
                height={"20%"}
                rounded={'lg'}
                px={50}
                color={'#FFD700'}
                bg={'blackAlpha.700'}
                _hover={{ bg: 'whiteAlpha.500' }}
                fontFamily='El Messiri'>
                    <Link to="/info">
                Sleep
                </Link>
            </Button>
            <Button
                height={"2%"}
                rounded={'lg'}
                px={50}
                color= {'gray.100'}
                bg={'blackAlpha.700'}
                _hover={{ color: '#FFD700', bg:'whiteAlpha.500' }}
                fontFamily='El Messiri'>
                <Link to="/roadmap">
                Grind
                </Link>
            </Button>
        </Stack>
    </Center>
)

export default Action