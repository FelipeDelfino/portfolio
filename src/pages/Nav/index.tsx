import { Container, Grid, GridItem, HStack, IconButton, Box, Text, Link, useBreakpointValue } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { ButtonsLink } from './Buttons';



export function Nav() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg:true
    })

    return (


        <Container maxW='' h='' bg='#1F212D' opacity='' color='#d7d7d7' >
            <Grid templateColumns='repeat(3, 1fr)' gap={12} p='3'>
                <GridItem>
                    <Logo/>
                </GridItem>
                    
                <GridItem>
                    <NavLinks showLinks={isWideVersion}/>
                </GridItem>

                <GridItem >
                    <ButtonsLink/>
                </GridItem>
            </Grid>


        </Container>

    )
}