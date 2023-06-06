import { Box, Container, Flex, Grid, GridItem, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import RepoList from "./Carousel";
import Info from "./ProjectTrigger";



export default function Projects() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    const isSmallVersion = useBreakpointValue({
        base: true,
        lg: false
    })

    return (
        <Flex
            h={['62.5em', '62.5em']}
            maxW='100%'
            id="projects">
            <Container
                maxW='8xl'
                mt='120px'>
                <Grid
                    templateRows={['repeat 2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                    templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(5, 1fr)']}
                    gap={10}
                    h='700px'
                >
                    <GridItem
                        colSpan={[2, 2]}
                        rowSpan={[2, 1]}

                    >
                        <Box
                            display='flex'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <VStack gap={6}>
                                <Box 
                                display='flex' 
                                alignItems='center'
                                >
                                    <Text
                                        as='h2'
                                        fontSize='4xl'
                                        mr={3}>
                                        Projetos
                                    </Text>
                                    <Info />
                                </Box>
                                <Box>
                                    <Text 
                                    as='h4'
                                    textAlign='justify'
                                    > 
                                        Aqui você encontrará cada projeto desenvolvido,
                                        incluindo as etapas de desenvolvimento e as soluções implementadas.
                                        Também destaco as principais habilidades técnicas que foram aplicados em cada projeto,
                                        disponibilizando uma visão das minhas capacidades como programador.
                                    </Text>
                                </Box>
                            </VStack>
                        </Box>

                    </GridItem>

                    <GridItem
                        colSpan={[2, 3]}
                        rowSpan={[3]}>
                        <Flex>
                            <RepoList showRepo={isWideVersion} showSmallRepo={isSmallVersion} />
                        </Flex>
                    </GridItem>
                </Grid>
            </Container>
        </Flex>
    )
}