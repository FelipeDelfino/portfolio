import { Box, Img } from "@chakra-ui/react";

interface ImageProps {
    showImage?: boolean;
}

export default function Iimage({ showImage = true }: ImageProps) {
    return (
        <>
            {showImage && (
                <Box
                    display='flex'
                    justifyContent='center'>
                    <Img
                        borderRadius='full'
                        boxSize='250px'
                        src='https://avatars.githubusercontent.com/u/54292547?v=4'
                        alt='Felipe Delfino'
                    />

                </Box>
            )}
        </>

    )
}