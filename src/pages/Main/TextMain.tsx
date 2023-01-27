import { Box, Link, VStack, Text } from "@chakra-ui/react";


export function TextMain() {
    return (
        <>
            <Box display='flex' alignItems='center' justifyContent='center'>
                <VStack align='stretch' >
                    <Text fontSize={['lg', '2xl', '4xl']}>
                        Olá, bem vindo!
                    </Text>
                    <Text fontSize={['xl', '3xl', '5xl']}>
                        Eu sou o <b> Felipe</b>,
                    </Text>
                    <Text fontSize={['md', 'xl', '3xl']}>
                        Desenvolvedor Full Stack

                    </Text>
                    <Link href='https://api.whatsapp.com/send?phone=5511964404327p&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%2C%20vamos%20conversar%3F'
                        fontSize={['sm', 'md', 'xl']}
                        color='teal.100'
                        textStyle='textDecoration'
                        _hover={{
                            
                            textDecoration: "none",
                            color: "yellow.400",
                        }}
                    >
                        Vamos Conversar!
                    </Link>
                </VStack>
            </Box>
        </>
    )
}
