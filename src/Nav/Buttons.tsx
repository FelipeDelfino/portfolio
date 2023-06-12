import { Box, Link, IconButton } from "@chakra-ui/react"
import { AiOutlineGithub } from "react-icons/ai"
import { TiSocialLinkedin } from "react-icons/ti"

export default function ButtonsLink(){
    return(
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
                                    color: "#00a0dc",
                                }}
                                icon={<TiSocialLinkedin size='26' />}
                            />
                        </Link>
                    </Box>
    )
}