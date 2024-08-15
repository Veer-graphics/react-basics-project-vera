import { Box, Button, Image } from "@chakra-ui/react"

export const DetailNav = ({ goBack }) => {
    return (
        <Box w='100%' p={5} top='0%' left='0%' right='0%' position='relative'>
            <Box display='flex' justifyContent='center'>
                <Image src="./public/winc-logo.svg" w='50px' maxW='100%' />
            </Box>
            <Button onClick={goBack} position='absolute' top='50%' transform='translateY(-50%)' left='2%' _hover={{ bgColor: 'blue.400' }} transition='0.2s ease all'><Image src="./public/chevron-left-solid.svg" /></Button>
        </Box>
    )
}