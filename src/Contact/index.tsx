import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import EmailForm from "./ContactForm";
import ContactInfos from "./ContactInfos";


export default function ContactMain() {
    return (
        <Flex
            h={['125em','105em','100em', '62.5em']}
            maxW='100%'
            bg='#13141C'
            id="contact">
            <Container
                maxW='8xl'
                mt=''>
                <Grid

                    templateRows={['repeat 3, 1fr)', 'repeat(3, 1fr)', 'repeat(3)', 'repeat(3)']}
                    templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(6, 1fr)']}
                    gap={10}
                    h='700px'
                >
                    <GridItem
                        colSpan={4}
                        rowSpan={1} >
                        <Box
                            display='flex'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'>
                            <Text fontSize='4xl'>
                                Contato
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem
                        h='1000px'
                        colSpan={[4, 4, 4, 2]}
                        rowSpan={[1, 1, 1, 3]} >
                        <Box
                            display='flex'
                            h='100%'
                            w='100%'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <EmailForm name={""} email={""} message={""} />
                        </Box>
                    </GridItem>
                    <GridItem
                        colSpan={[4, 4, 4, 4]}
                        rowSpan={1} >
                        <ContactInfos />
                    </GridItem>
                </Grid>
            </Container>
        </Flex>
    )
}