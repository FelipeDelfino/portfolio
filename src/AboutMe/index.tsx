import { Flex, Container, GridItem, VStack, Heading, Highlight, Img, Box, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import  TextAboutMe  from "./TextAboutMe";
import  Iimage  from './ImageEu';
import  Imageicon  from "./ImageIcon";



export default function Aboutme() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            h={['90em','em','70em','68em','62.5em']}
            maxW='100%'
            bg='#13141C'
            id="aboutme">
            <Container
                maxW='8xl'
                mt={['50px','50px','40px','160px']} >

                <Grid
                    templateRows={['repeat 2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']}
                    templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)', 'repeat(5, 1fr)']}
                    gap={10}
                    h={['0px','0px','0px','700px']}
                >
                    <GridItem
                        colSpan={[1, 2]}
                        >
                        <Box
                            display='flex'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'>
                            <Text
                                fontSize={['2xl','4xl']}
                                fontWeight='semibold'>
                                Sobre Mim
                            </Text>
                        </Box>
                    </GridItem>

                    <GridItem
                        colSpan={3}
                        rowSpan={3}
                        >
                        <TextAboutMe/>

                    </GridItem>


                    <GridItem
                        colSpan={2}
                        rowSpan={1}
                        >
                        <Iimage showImage={isWideVersion}/>
                    </GridItem>
                    <GridItem
                        colSpan={2}
                        ml='10'>
                        <Imageicon showIcons={isWideVersion}/>
                    </GridItem>
                </Grid>
            </Container>
        </Flex>
    )
}