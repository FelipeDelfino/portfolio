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
                        
                        
        </>
    )

}


            // {props.project.name}
            
            // {props.project.full_name}
            
            // {props.project.html_url}
            
            // {props.project.description}
            
            // {props.project.language}