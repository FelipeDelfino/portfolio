import { VStack, Heading, Highlight, Box, Text } from "@chakra-ui/react";


export default function TextAboutMe() {
    return (
        <Box
            display='flex'
            h='100%'
            p={6}
            mt='15'>
            <VStack
                spacing={5}
                align='stretch'>

                <Text
                    textAlign='justify'
                    fontSize={['sm', 'md']}>
                    Me chamo Felipe, tenho 21 anos, sou apaixonado por música e amante da
                    tecnologia, conheci a programação em 2016 na qual até hoje estudo e busco novos conhecimentos em diferentes linguagens.
                    Levo comigo que não devemos ter medo de errar e de recomeçar, mas
                    sempre retirar bons aprendizados daquilo que surge como um
                    desafio.
                </Text>
                <Heading
                    fontSize={['md', 'lg', 'xl']} as='b'>
                    Formação
                </Heading>
                <Text
                    fontSize={['xs', 'sm', 'md']}>
                    - Formado no curso Tecnico em Informática pela ETEC-Itaquaquecetuba (2016-2018).
                </Text>
                <Text
                    fontSize={['xs', 'sm', 'md']}>
                    - Cursando Tecnólogo em Gestão da Tecnologia da Informação pela FATEC-Itaquaquecetuba. (2019 - Atualmente)
                </Text>
                <Text
                    fontSize={['xs', 'sm', 'md']}>
                    - Cursando Bootcamp de Especialização IGNITE pela Rocketseat. (2022 - Atualmente)
                </Text>

                <Heading
                    fontSize={['md', 'lg', 'xl']} as='b'>
                    Principais Competências
                </Heading>
                <Text
                    fontSize={['xs', 'sm', 'md']}>
                    <Highlight
                        query={[' Javascript', ' React.js', ' Node.js', 'React Native', ' Java', ' SQL', ' C#']}
                        styles={{ px: '1', py: '1', rounded: 'full', bg: 'teal.100', fontSize: 'sm' }}
                    >
                        Linguagens/Frameworks: Javascript, React.js, Node.js, React Native, Java, SQL e C#.
                    </Highlight>
                </Text>
                <Text
                    textAlign='justify'
                    fontSize={['xs', 'sm', 'md']}>
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
    )

}