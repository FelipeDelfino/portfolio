import { Box, Link, Text } from "@chakra-ui/react";

interface LinkProps {
    showLinks?: boolean;
}

export function NavLinks({showLinks = true}: LinkProps) {
    return (
        <>
            {showLinks && (
                <Box
                    display='flex'
                    h='100%'
                    alignItems='center'
                    justifyContent='center'

                >

                    <Link mr='6'
                        href="#aboutme"
                        _hover={{
                            textDecoration: "none",
                            color: "yellow.400",
                        }}
                    >
                        <Text fontSize='18px'> Sobre Mim </Text>
                    </Link>
                    <Link mr='6'
                        href="#projects"
                        _hover={{
                            textDecoration: "none",
                            color: "yellow.400",
                        }}
                    >
                        <Text fontSize='18px'> Projetos </Text>
                    </Link>
                    <Link href="#contact"
                        _hover={{
                            textDecoration: "none",
                            color: "yellow.400",
                        }}
                    >
                        <Text fontSize='18px'> Contato </Text>
                    </Link>
                </Box>
            )}
        </>
    )
}