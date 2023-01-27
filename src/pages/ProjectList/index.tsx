import { Box, Container, Flex, Grid, GridItem, Text, useBreakpointValue } from "@chakra-ui/react";
import RepoList from "./Carousel";
import Info from "./ProjectTrigger";



export function Projects() {

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
                        colSpan={[1, 2]}
                        rowSpan={[2, 1]}

                    >
                        <Box
                            display='flex'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'

                        >
                            <Text
                                fontSize='4xl'
                                mr={3}>
                                Projetos
                            </Text>
                            <Info />
                        </Box>


                    </GridItem>

                    <GridItem

                        colSpan={[2, 3]}
                        rowSpan={[3]}>
                        <Flex>
                            <RepoList showRepo={isWideVersion} showSmallRepo={isSmallVersion}/>
                        </Flex>
                    </GridItem>

                </Grid>
            </Container>
        </Flex>
    )
}