import { Box } from "@chakra-ui/react"

export const Header = ({ recipe }) => {
    return (
        <Box overflow='hidden' minHeight='50vh' bgImage={`url(${recipe.image})`} bgSize='cover' bgRepeat='no-repeat' bgPosition='center'>
        </Box>
    )
}