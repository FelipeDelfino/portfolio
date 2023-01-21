import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, Heading, Input, Stack, StackDivider, Text, Textarea } from "@chakra-ui/react";

export default function EmailForm() {
    return (
        <>
            <FormControl isRequired>
                <Card bg='gray.800' color='white' w='100%' h='80%'>
                    <CardHeader>
                        <Heading size='md'>Escreva agora um E-mail!</Heading>
                    </CardHeader>

                    <CardBody>

                        <Stack spacing='8'>
                            <Box>
                                <Input variant='flushed' focusBorderColor="teal.100" placeholder='Digite seu Nome*' />
                            </Box>
                            <Box>
                                <Input type='email' variant='flushed' focusBorderColor="teal.100" placeholder='Digite um E-mail valido*' />

                            </Box>
                            <Box>

                                <Textarea variant='flushed' focusBorderColor="teal.100" placeholder='Digite sua mensagem*' h='200px' resize={"none"} />
                            </Box>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Button
                            variant='outline'
                            colorScheme="white"
                            _hover={{
                                background: "white",
                                color: "teal.500",
                            }}
                        >
                            Enviar
                        </Button>
                    </CardFooter>
                </Card>
            </FormControl>

        </>

    )
}