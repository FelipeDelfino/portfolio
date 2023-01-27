import { Box, Grid, GridItem, Img, Text } from "@chakra-ui/react";

interface IconsProps {
    showIcons?: boolean;
}

export default function Imageicon({ showIcons = true }: IconsProps) {
    return (
        <>
            {showIcons && (
                <Box
                    display='flex'
                    mt='8'>
                    <Grid
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(3, 1fr)'
                        gap={1}>
                        <GridItem>
                            <Box
                                display='flex'
                                h='100%' 
                                justifyContent='center'>
                                <Text fontSize=''>
                                    FrontEnd
                                </Text>
                            </Box>
                        </GridItem>

                        <GridItem>

                            <Box
                                display='flex'
                                h='100%'
                                justifyContent='center'>
                                <Text fontSize=''>
                                    BackEnd
                                </Text>
                            </Box>
                        </GridItem>
                        <Box
                            display='flex'
                            h='100%'
                            justifyContent='center'>
                            <Text fontSize=''>
                                Mobile
                            </Text>
                        </Box>
                        <GridItem>
                            <Box
                                display='flex'
                                h='100%'
                                ml='45px'>

                                <Img
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://cdn-icons-png.flaticon.com/512/1532/1532556.png'
                                    alt='Html'
                                    mr='1'
                                />
                                <Img
                                    borderRadius='3px'
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
                                    alt='Javascript'
                                    mr='1'
                                />
                                <Img
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://cdn-icons-png.flaticon.com/512/5968/5968358.png'
                                    alt='Sass'
                                    mr='1'
                                />
                                <Img
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png'
                                    alt='React.js'

                                />
                            </Box>
                        </GridItem>

                        <GridItem>
                            <Box
                                display='flex'
                                h='100%'
                                ml='50px'>

                                <Img
                                    borderRadius='full'
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png'
                                    alt='Node.js'
                                    mr='1'
                                />
                                <Img
                                    borderRadius='3px'
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://cdn0.iconfinder.com/data/icons/flat-round-system/512/java-512.png'
                                    alt='Java'
                                    mr='1'
                                />
                                <Img
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://cdn-icons-png.flaticon.com/512/6132/6132221.png'
                                    alt='C#'
                                    mr=''
                                />
                                <Img
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://cdn-icons-png.flaticon.com/512/2306/2306173.png'
                                    alt='SQL'
                                />
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box display='flex' h='100%' ml='55px'>

                                <Img
                                    borderRadius='full'
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png'
                                    alt='React Native'
                                    mr='1'
                                />
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
            )}
        </>
    )
}