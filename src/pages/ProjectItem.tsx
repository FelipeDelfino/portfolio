import { Box, Heading, Link, Text, VStack, } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


interface ProjectProps {
    project: {
        id: number;
        name: string;
        full_name: string;
        html_url: string;
        description: string;
        language: string;
    }
        
}

export default function Repository(props: ProjectProps) {

    return (
        <>
                    {/* <Box borderRadius='5' 
                    backgroundColor='#13141C' 
                    mb='3' 
                    p='3' 
                    color='#d7d7d7'
                    display='flex'
                    
                    >
                        <VStack align='stretch'> */}

                            {/* <Text  mb='2' >
                                <Heading fontSize='lg' as='b'>
                                    Projeto: 
                                </Heading>
                                {" " + props.project.name} {" - " + props.project.full_name}
                            </Text>
                            <Text textAlign='justify' mb='2'> 
                                <Heading fontSize='lg' as='b'>
                                    Descrição: 
                                </Heading>
                                {" " + props.project.description}
                            </Text>
                            <Text mb='2'>
                                <Heading fontSize='lg' as='b'>
                                    Linguagem: 
                                </Heading> 
                                {" " + props.project.language}
                            </Text>
                            <Link href={props.project.html_url} 
                            color='teal.200' 
                            h='100%'
                            >
                            <Text> Ver no GitHub </Text>
                            </Link> */}
                            <Card color='#d7d7d7' bg='#13141C' size ='lg'>
                                <CardHeader>
                                    <Heading size='md'> {props.project.name} </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text textAlign='justify' mb='5'>{props.project.description}</Text>
                                    <Text>Linguagem:{" " + props.project.language}</Text>
                                </CardBody>
                                <CardFooter>
                                <Link href={props.project.html_url} 
                                color='teal.200' 
                                h='100%'
                                >
                            <Text> Ver no GitHub </Text>
                            </Link>
                                </CardFooter>
                            </Card>
                        
                        {/* </VStack>
                    </Box> */}
            
                
            
            
            
        </>
    )

}


            // {props.project.name}
            
            // {props.project.full_name}
            
            // {props.project.html_url}
            
            // {props.project.description}
            
            // {props.project.language}