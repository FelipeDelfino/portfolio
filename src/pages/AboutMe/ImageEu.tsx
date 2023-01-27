import { Box, Img } from "@chakra-ui/react";

interface ImageProps {
    showImage?: boolean;
}

export function Iimage({ showImage = true }: ImageProps) {
    return (
        <>
            {showImage && (
                <Box
                    display='flex'
                    justifyContent='center'>
                    <Img
                        borderRadius='full'
                        boxSize='250px'
                        src='https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/89765409_2652618391730562_2145174256969842688_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFpQHcPyy0OIaeQXqlGniThhdiHKTc41QGF2IcpNzjVAfAoVp7AqTYqhoC-BtUs51jISIvN8fUIsO6fBLB6j62j&_nc_ohc=fdsO3ph6NfsAX_8XDZt&_nc_ht=scontent-gru1-1.xx&oh=00_AfDSag00HEP9_PupytHNNqRL5V0PUODKcHDRFPOptaOMbA&oe=63F29B09'
                        alt='Felipe Delfino'
                    />

                </Box>
            )}
        </>

    )
}