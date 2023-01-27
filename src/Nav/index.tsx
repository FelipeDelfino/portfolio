import { Container, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import  Logo  from "./Logo";
import  NavLinks  from "./NavLinks";
import  ButtonsLink  from './Buttons';



export default function Nav() {

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