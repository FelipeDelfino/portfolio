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
                    as='h6'
                    textAlign='justify'
                    fontSize={['sm', 'md']}>
                    Me chamo Felipe, tenho 22 anos, sou apaixonado por música e amante da
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
                    as='h6'
                    fontSize={['xs', 'sm', 'md']}>
                    - Formado no curso Tecnico em Informática pela ETEC-Itaquaquecetuba (2016-2018).
                </Text>
                <Text
                    as='h6'
                    fontSize={['xs', 'sm', 'md']}>
                    - Cursando Tecnólogo em Gestão da Tecnologia da Informação pela FATEC-Itaquaquecetuba. (2019 - Atualmente)
                </Text>
                <Text
                    as='h6'
                    fontSize={['xs', 'sm', 'md']}>
                    - Cursando Bootcamp de Especialização IGNITE pela Rocketseat. (2022 - Atualmente)
                </Text>

                <Heading
                    fontSize={['md', 'lg', 'xl']} as='b'>
                    Principais Competências
                </Heading>
                <Text
                    as='h6'
                    fontSize={['xs', 'sm', 'md']}>
                    <Highlight
                        query={[' Javascript', ' React.js', ' Node.js', 'React Native', ' Java', ' SQL', ' C#']}
                        styles={{ px: '1', py: '1', rounded: 'full', bg: 'teal.100', fontSize: 'sm' }}
                    >
                        Linguagens/Frameworks: Javascript, React.js, Node.js, React Native, Java, SQL e C#.
                    </Highlight>
                </Text>
                <Text
                    as='h6'
                    textAlign='justify'
                    fontSize={['xs', 'sm', 'md']}>
                    React.js: Desenvolvimento de aplicações utilizando Next.js, Typescript,
                    Hooks, Styled Components, SASS, Stitches, Framer Motion e APIs, com destaque
                    para API Routes/Next.js. Implementação de recursos avançados como Radix, Next
                    Auth e React Query. Testes conduzidos com Jest, gerenciamento de conteúdo via
                    Headless CMS e adoção da arquitetura JAMStack com GraphQL. Experiência em Deploy,
                    CodeGen, Cypress, Server Components, Suspense API e Streaming SSR.
                    <br />
                    Node.js: Construção de aplicações robustas com Typescript, incluindo a documentação
                    de APIs utilizando Swagger. Utilização de Docker para a gestão de ambientes, reforçando
                    a segurança com JWT e bcrypt. Realização de testes automatizados com Jest e supertest,
                    juntamente com a implementação de práticas de CI/CD para deploy. Conhecimento
                    em Serverless e Microsserviços.
                    <br />
                    React Native: Desenvolvimento de aplicativos móveis com Typescript, aproveitando Hooks
                    e Styled Components para uma experiência de usuário otimizada. Utilização de Async Storage,
                    implementação de OAuth Authentication e integração de APIs. Foco na UX, incluindo animações
                    de alta qualidade, além da implementação da abordagem Offline First e práticas de CI/CD.
                    <br />
                    Experiência em Java: Domínio das tecnologias Spring, Thymeleaf, Lombok e conhecimento sólido em Jquery.
                </Text>
            </VStack>
        </Box>
    )

}