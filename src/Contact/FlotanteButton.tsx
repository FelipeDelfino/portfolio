import { Box, IconButton, Icon } from '@chakra-ui/react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaFacebookF } from 'react-icons/fa';


export default function FlotanteButton() {
    const handleWhatsAppClick = () => {
        window.open('https://api.whatsapp.com/send?phone=5511964404327p&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%2C%20vamos%20conversar%3F', '_blank')
    };
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/felipe_delfino_/', '_blank')
    };
    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/Felipe.Delfino.N', '_blank')
    };
    return (
        <>
            <Box
                position="fixed"
                bottom="8"
                right="8"
                zIndex="999"

            >
                <IconButton
                    onClick={handleWhatsAppClick}
                    aria-label='whatsapp'
                    variant="solid"
                    colorScheme="whatsapp"
                    borderRadius="full"
                    size='lg'
                    icon={<Icon as={FaWhatsapp} boxSize={6} />}
                />
            </Box>
            <Box
                position="fixed"
                bottom="90px"
                right="8"
                zIndex="999"

            >
                <IconButton
                    onClick={handleInstagramClick}
                    aria-label='instagram'
                    variant="solid"
                    bgGradient='linear(to-tr, #7928CA, #ff006a)'
                    borderRadius="full"
                    size='lg'
                    icon={<Icon as={FaInstagram} boxSize={6} />}
                    _hover={{
                        bgGradient: 'linear(to-tr, #6a28ac, #e4005f,)'

                    }}
                />
            </Box>
            <Box
                position="fixed"
                bottom="148px"
                right="8"
                zIndex="999"
            >

                    <IconButton
                        onClick={handleInstagramClick}
                        aria-label='facebook'
                        variant="solid"
                        colorScheme='facebook'
                        borderRadius="full"
                        size='lg'
                        icon={<Icon as={FaFacebookF} boxSize={6} />}

                    />
            </Box>
        </>
    )
}