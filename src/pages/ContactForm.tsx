
import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, Text, Heading, Input, Stack, Textarea, useToast } from "@chakra-ui/react";


import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import emailjs from '@emailjs/browser';


interface ContactInputs {
    name: string,
    email: string,
    message: string
}

const schema = yup.object().shape({
    name: yup.string().min(3, "O nome precisa ter pelo menos 3 letras*").required("Nome obrigatório*"),
    email: yup.string().email("Digite um e-mail válido.").required("E-mail obrigatório*"),
    message: yup.string().required("Mensagem obrigatória*")
}).required();


export default function EmailForm(data: ContactInputs) {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactInputs>({
        resolver: yupResolver(schema)
    });

    const toast = useToast()
    const handlerEmailSend: SubmitHandler<ContactInputs> = async (data) => {

        await new Promise(resolve => setTimeout(resolve, 1500));


        const templateParams = {
            from_name: data.name,
            message: data.message,
            email: data.email

        }

        emailjs.send('service_hlkhgy6', 'template_xqd5lcr', templateParams, 'o6WL1hATjUkbp8vhC')
            .then((result: { text: any; }) => {
                console.log(result.text);
                toast({
                    title: 'E-mail enviado com Sucesso!',
                    status: 'success',
                    position: 'bottom-right',
                    isClosable: true,
                })
            }, (error: { text: any; }) => {
                console.log(error.text);
                toast({
                    title: 'Falha ao enviar o E-mail!',
                    status: 'error',
                    position: 'bottom-right',
                    isClosable: true,
                })
            });

    }
    return (
        <>
            <Card
                as="form"
                bg='gray.800'
                color='white'
                w='100%'
                h='80%'
                onSubmit={handleSubmit(handlerEmailSend)}
            >
                <CardHeader>
                    <Heading size='md'>Escreva agora um E-mail!</Heading>
                </CardHeader>

                <CardBody>

                    <Stack spacing='7'>
                        <Box>
                            <FormControl>

                                <Input
                                    type='text'
                                    bgColor='gray.900'
                                    borderRadius='md'
                                    focusBorderColor="teal.100"
                                    placeholder='Digite seu Nome'
                                    {...register('name')}
                                />
                                <Text color='red.500' fontSize='smaller' mb='-4' mt='1'>
                                    <ErrorMessage
                                        errors={errors} name="name" />

                                </Text>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>

                                <Input
                                    type='text'

                                    focusBorderColor="teal.100"
                                    bgColor='gray.900'
                                    borderRadius='md'
                                    placeholder='Digite um E-mail válido'
                                    {...register('email')}
                                />
                                <Text color='red.500' fontSize='smaller' mb='-4' mt='1'>

                                    <ErrorMessage
                                        errors={errors} name="email" />
                                </Text>
                            </FormControl>

                        </Box>
                        <Box>

                            <Textarea

                                focusBorderColor="teal.100"
                                bgColor='gray.900'
                                borderRadius='md'
                                placeholder='Digite sua mensagem'
                                h='200px'
                                resize={"none"}
                                {...register('message')}

                            />
                            <Text color='red.500' fontSize='smaller' mt='1'>

                                <ErrorMessage
                                    errors={errors} name="message" />
                            </Text>

                        </Box>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Button
                        type="submit"
                        variant="outline"
                        colorScheme="white"
                        _hover={{
                            background: "teal.500",
                            borderColor: "teal.500",
                            color: "white",
                        }}
                        isLoading={isSubmitting}
                    >
                        Enviar
                    </Button>
                </CardFooter>
            </Card>
        </>

    )
}