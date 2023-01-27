import { Box, Container, Link, SimpleGrid, VStack, Text } from "@chakra-ui/react";

import Image from "next/image";
import imgeu from '../../../public/art1.png'
import { TextMain } from './TextMain';


export function Main() {
    return (
        <>
            <Container maxW={['md', '7xl']} minH={['20em', '30em', '62em']} mt='12'>
                <SimpleGrid columns={2} spacing={5}>
                    <TextMain />
                    <Box
                        display='flex'
                        h='100%'
                        alignItems='center'
                        justifyContent='center'
                        height={['65%', 
                            '65%', 
                            '80%', 
                            '100%', 
                        ]}
                        width={['65%', 
                            '65%', 
                            '80%', 
                            '100%', 
                        ]}>
                        <Image src={imgeu} alt='Felipe Delfino' />
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    )
}