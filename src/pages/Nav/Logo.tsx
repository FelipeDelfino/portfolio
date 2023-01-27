import { HStack, Box, Text } from "@chakra-ui/react";


export function Logo() {
    return (
        <>
            <Box display='flex' justifyContent='center'>
                <HStack>

                    <Text
                        fontSize={['md', 'xl', '2xl']}
                        >
                        <b>Felipe</b> Delfino
                    </Text>
                    <Text fontSize='2xl'>
                    </Text>
                </HStack>
            </Box>
        </>
    )
}