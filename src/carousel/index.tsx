import React, { useRef, useState } from "react";
// Import Swiper React components

import { Card, CardBody, CardFooter, CardHeader, Heading, Link, Text } from "@chakra-ui/react";



interface ProjectProps {
  project: {
    id: string;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    language: string;
  }

}



export default function Carousel(props: ProjectProps) {
  return (
    <>



      <Card color='#d7d7d7' bg='#13141C' size='lg' w='100%' h='100%'>
        <CardHeader>
          <Heading size='md'> {props.project.name} </Heading>
        </CardHeader>
        <CardBody>
          <Text textAlign='justify' mb='5' fontSize='sm'>Descrição: {props.project.description}</Text>
          <Text textAlign='initial' fontSize='sm'>Linguagem:{" " + props.project.language}</Text>
        </CardBody>
        <CardFooter>
          <Link href={props.project.html_url}
            color='teal.200'
            h='100%'
            _hover={{
              textDecoration: "none",
              color: "yellow.400",
            }}
          >
            <Text fontSize='sm'> Ver no GitHub </Text>
          </Link>
        </CardFooter>
      </Card>




    </>
  );
}
