import { Box, SimpleGrid, Heading, Icon, Text } from "@chakra-ui/react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";


export default function Contact() {
    return (
        <>
            <SimpleGrid columns={3} spacing={1}>
                <Box w='85%'>

                    <Heading size='md' mb='8'>
                        E-mail
                        <Icon boxSize={5} as={HiOutlineMail} ml='4' />
                    </Heading>
                    <Text color='gray.400' mb='14' textAlign='justify'>
                        Entre em contato comigo pelo email!
                    </Text>
                    <Text as='b'>
                        felipe.delfino1508@gmail.com
                    </Text>

                </Box>
                <Box w='85%'>

                    <Heading size='md' mb='8'>
                        Telefone
                        <Icon boxSize={5} as={HiOutlinePhone} ml='4' />
                    </Heading>
                    <Text color='gray.400' mb='8' textAlign='justify'>
                        Entre em contato comigo por ligação ou mensagem no Whatsapp!
                    </Text>
                    <Text as='b'>
                        +55(11)96440-4327
                    </Text>
                </Box>
                <Box w='85%'>
                    <Heading size='md' mb='8'>
                        Linkedin
                        <Icon boxSize={5} as={AiOutlineLinkedin} ml='4' />
                    </Heading>
                    <Text color='gray.400' mb='14' textAlign='justify'>
                        Entre em contato comigo através do Linkedin!
                    </Text>
                    <Text as='b'>
                        linkedin.com/in/felipedelfinon
                    </Text>
                </Box>
            </SimpleGrid>
        </>
    )
}