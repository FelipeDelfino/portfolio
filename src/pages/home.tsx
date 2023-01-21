import { Box, Container, Flex, Grid, GridItem, Heading, Highlight, HStack, Icon, IconButton, Img, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { RiLinkedinLine } from 'react-icons/ri'
import { TiSocialLinkedin } from 'react-icons/ti'
import Image from "next/image";
import imgeu from '../../public/art1.png'



import RepoList from '../carousel/RepoList';
import Info from "./ProjectTrigger";
import Contact from "./Contact";
import EmailForm from './ContactForm';


export default function Index() {
    return (
        <>
            <Container maxW='' h='' bg='#1F212D' opacity='' color='#d7d7d7' >
                <Grid templateColumns='repeat(3, 1fr)' gap={12} p='3'>
                    <GridItem>
                        <Box display='flex' justifyContent='center'>
                            <HStack>

                                <Text fontSize='2xl' mr=''>
                                    <b> Felipe</b> Delfino
                                </Text>
                                <Text fontSize='2xl'>
                                </Text>
                            </HStack>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box display='flex' h='100%' alignItems='center' justifyContent='center' >

                            <Link mr='6' href="#aboutme">
                                <Text fontSize='18px'> Sobre Mim </Text>
                            </Link>
                            <Link mr='6' href="#projects">
                                <Text fontSize='18px'> Projetos </Text>
                            </Link>
                            <Link href="#contact">
                                <Text fontSize='18px'> Contato </Text>
                            </Link>
                        </Box>
                    </GridItem>

                    <GridItem >
                        <Box display='flex'
                            h='100% '
                            alignItems='center'
                            justifyContent='center'>
                            <Link href='https://github.com/FelipeDelfino'>
                                <IconButton
                                    size='sm'
                                    mr='4'
                                    borderRadius='full'
                                    aria-label="Github"
                                    bg='#262A39'
                                    colorScheme=""
                                    _hover={{
                                        background: "gray.200",
                                        color: "gray.800",
                                    }}
                                    icon={<AiOutlineGithub size='26' />}
                                />
                            </Link>
                            <Link href='https://www.linkedin.com/in/felipedelfinon/'>
                                <IconButton
                                    size='sm'
                                    borderRadius='full'
                                    aria-label="Linkedin"
                                    colorScheme='linkedin'
                                    _hover={{
                                        background: "gray.200",
                                        color: "#0e76a8",
                                    }}
                                    icon={<TiSocialLinkedin size='26' />}
                                />
                            </Link>
                        </Box>
                    </GridItem>

                </Grid>


            </Container>
            <Container maxW='7xl' minH='860px' mt='12'>

                <SimpleGrid columns={2} spacing={5}>
                    <Box display='flex' alignItems='center' justifyContent='center'>

                        <VStack align='stretch' >

                            <Text fontSize='4xl'>
                                Olá, bem vindo!
                            </Text>
                            <Text fontSize='5xl'>
                                Eu sou o <b> Felipe</b>,
                            </Text>
                            <Text fontSize='3xl'>
                                Desenvolvedor Full Stack

                            </Text>
                            <Link href='https://api.whatsapp.com/send?phone=5511964404327e+21&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%2C%20vamos%20conversar%3F'
                                fontSize='1xl'
                                color='teal.100'
                                textDecoration=''>
                                Vamos Conversar!
                            </Link>

                        </VStack>
                    </Box>
                    <Box>
                        <Image src={imgeu} alt='Felipe Delfino' />
                    </Box>
                </SimpleGrid>
            </Container>

            <Flex h='1000px' maxW='100%' bg='#13141C' id="aboutme">
                <Container maxW='8xl' mt='160px' >

                    <Grid templateRows='repeat(3, 1fr)'
                        templateColumns='repeat(5, 1fr)'
                        gap={10}
                        h='700px'
                    >


                        <GridItem colSpan={2}>
                            <Box display='flex' h='100%' justifyContent='center' alignItems='center'>
                                <Text fontSize='4xl' fontWeight='semibold'>
                                    Sobre Mim
                                </Text>
                            </Box>
                        </GridItem>

                        <GridItem colSpan={3} rowSpan={3}>
                            <Box display='flex' h='100%' p={6} mt='15'>
                                <VStack spacing={5} align='stretch'>

                                    <Text textAlign='justify'>
                                        Me chamo Felipe, tenho 21 anos, sou apaixonado por música e amante da
                                        tecnologia, conheci a programação em 2016 na qual até hoje estudo e busco novos conhecimentos em diferentes linguagens.
                                        Levo comigo que não devemos ter medo de errar e de recomeçar, mas
                                        sempre retirar bons aprendizados daquilo que surge como um
                                        desafio.
                                    </Text>
                                    <Heading fontSize='xl' as='b'>
                                        Formação
                                    </Heading>
                                    <Text>
                                        - Formado no curso Tecnico em Informática pela ETEC-Itaquaquecetuba (2016-2018).
                                    </Text>
                                    <Text>
                                        - Cursando Tecnólogo em Gestão da Tecnologia da Informação pela FATEC-Itaquaquecetuba. (2019 - Atualmente)
                                    </Text>
                                    <Text>
                                        - Cursando Bootcamp de Especialização IGNITE pela Rocketseat. (2022 - Atualmente)
                                    </Text>

                                    <Heading fontSize='xl' as='b'>
                                        Principais Competências
                                    </Heading>
                                    <Text>

                                        <Highlight query={[' Javascript', ' React.js', ' Node.js', 'React Native', ' Java', ' SQL', ' C#']}
                                            styles={{ px: '1', py: '1', rounded: 'full', bg: 'teal.100', fontSize: 'sm' }}>
                                            Linguagens: Javascript, React.js, Node.js, React Native, Java, SQL e C#.
                                        </Highlight>
                                    </Text>
                                    <Text textAlign='justify'>
                                        Conhecimento utilizando React.js: Next.js, Typescript, Hooks,
                                        Styled Components, SASS, Stitches, Framer Motion, API, API
                                        Routes/Next.js, Radix, Next Auth, React Query, Jest, Headless
                                        CMS, JAMStack com GraphQL, Deploy, CodeGen, Cypress, Server
                                        Components, Suspense API e Streaming SSR.
                                        <br />
                                        Conhecimento utilizando Node.js: Typescript, APIs com Swagger,
                                        Docker, TypeORM, JWT, bcrypt, Jest, supertest, CI/CD para deploy,
                                        Serverles e Microsserviços.
                                        <br />
                                        Conhecimento utilizando React Native: Typescript, Hooks, Styled
                                        Components, Async Storage, OAuth Authetication, Consumo de API,
                                        UX e Animações, Offline Firste e CI/CD.
                                        <br />
                                        Conhecimento utilizando Java: POO, Spring, Thymeleaf, Lombok,
                                        Jquery e MVC.
                                    </Text>
                                </VStack>
                            </Box>

                        </GridItem>


                        <GridItem colSpan={2} rowSpan={1}>
                            <Box display='flex' justifyContent='center'>
                                <Img
                                    borderRadius='full'
                                    // border='2px'
                                    // borderColor='cyan.500'
                                    boxSize='250px'
                                    src='https://scontent.fgru10-1.fna.fbcdn.net/v/t1.6435-9/66521270_2419282158397521_4315367334094045184_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH7uDy2DuCbNh61wYrCVuxOhazE1FRBMYmFrMTUVEExiaaAMJqlBk_7OOZsLUM3nznUNxj2Lpn9drdC_j6KqTaP&_nc_ohc=GRtdqITRQqEAX-st-Fu&tn=Xsx6VLr5e4EkQraa&_nc_ht=scontent.fgru10-1.fna&oh=00_AfARSv-V0RjsDW0rysKl26DH2Br33KVMlOP7vqxVgn7rZA&oe=6394F2EF'
                                    alt='Felipe Delfino'
                                />

                            </Box>
                        </GridItem>
                        <GridItem colSpan={2} ml='10'>
                            <Box display='flex' mt='8'>


                                <Grid templateRows='repeat(2, 1fr)'
                                    templateColumns='repeat(3, 1fr)'
                                    gap={1}>
                                    <GridItem>

                                        <Box display='flex' h='100%' justifyContent='center'>
                                            <Text fontSize=''>
                                                FrontEnd
                                            </Text>
                                        </Box>
                                    </GridItem>

                                    <GridItem>

                                        <Box display='flex' h='100%' justifyContent='center'>
                                            <Text fontSize=''>
                                                BackEnd
                                            </Text>
                                        </Box>
                                    </GridItem>
                                    <Box display='flex' h='100%' justifyContent='center'>
                                        <Text fontSize=''>
                                            Mobile
                                        </Text>
                                    </Box>
                                    <GridItem>
                                        <Box display='flex' h='100%' ml='45px'>

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
                                        <Box display='flex' h='100%' ml='50px'>

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
                        </GridItem>
                    </Grid>
                </Container>
            </Flex>


            <Flex h='1000px' maxW='100%' id="projects">
                <Container maxW='8xl' mt='120px'>
                    <Grid templateRows='repeat(3, 1fr)'
                        templateColumns='repeat(5, 1fr)'
                        gap={10}
                        h='00px'
                    >



                        <GridItem bg='' colSpan={3} rowSpan={3}>

                            <Flex>

                                <RepoList />

                            </Flex>

                        </GridItem>

                        <GridItem colSpan={2}>
                            <Box display='flex' h='100%' justifyContent='center' alignItems='center'>
                                <Text fontSize='4xl' mr={3}>
                                    Projetos
                                </Text>
                                <Info />
                            </Box>
                        </GridItem>

                        <GridItem bg='' colSpan={2} rowSpan={2}>

                        </GridItem>
                    </Grid>
                </Container>
            </Flex>
            <Flex h='1000px' maxW='100%' bg='#13141C' id="contact">
                <Container maxW='8xl' mt='160px'>
                    <Grid templateRows='repeat(3, 1fr)'
                        templateColumns='repeat(6, 1fr)'
                        gap={10}
                        h='700px'
                    >
                        <GridItem colSpan={4} rowSpan={1} >
                            <Box display='flex'
                                h='100%'
                                justifyContent='center'
                                alignItems='center'>
                                <Text fontSize='4xl'>
                                    Contato
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={2} rowSpan={3} >
                            <Box display='flex'
                                h='100%'
                                w='100%'
                                justifyContent='center'
                                alignItems='center'
                            >

                                <EmailForm />

                            </Box>
                        </GridItem>
                        <GridItem colSpan={4} rowSpan={2} >
                            {/* <Box display='flex'
                            h='100%' 
                            justifyContent='center' 
                            alignItems='center'> */}
                            <Contact />

                            {/* </Box> */}

                        </GridItem>
                    </Grid>
                </Container>
            </Flex>
        </>
    )
}