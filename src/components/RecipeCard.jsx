import { Box, Card, Heading, Image, Text } from "@chakra-ui/react"
import { Tag } from "./ui/Tag"

export const RecipeCard = ({ recipe, selectItem }) => {

    return (
        <Card bgColor='white' boxShadow='lg' borderRadius='md' w='100%' overflow='hidden' onClick={() => selectItem(recipe)} h='450px' cursor='pointer' _hover={{ boxShadow: 'xl', transform: 'scale(1.01)' }} transition='0.2s ease all'>
            <Box w='100%' h='200px' overflow='hidden'>
                <Image src={recipe.image} alt={recipe.label} w='100%' h='100%' objectFit='cover' />
            </Box>
            <Box p={4} textAlign='center' h='100%'>
                <Box>
                    <Box>
                        <Text textTransform='uppercase' mb={2} fontWeight='semibold' color='gray.500' fontSize='sm'>{recipe.mealType}</Text>
                        <Heading color='gray.700' size='md' fontWeight='medium' mb={4}>{recipe.label}</Heading>
                    </Box>
                    <Box display='flex' flexDirection='column' gap={2}>
                        <Box display='flex' justifyContent='center' gap={2}>
                            {recipe.healthLabels.includes("Vegan") && (
                                <Tag type='health' label='vegan' />
                            )}
                            {recipe.healthLabels.includes("Vegetarian") && (
                                <Tag type='health' label='Vegetarian' />
                            )}
                        </Box>
                        <Box display='flex' flexWrap='wrap' justifyContent='center' gap={2}>
                            {recipe.dietLabels.map((label) => (
                                <Tag type='diet' label={label} key={label} />
                            ))}
                        </Box>
                        <Box>
                            <Text display='flex' justifyContent='center' gap={1}>Dish: <Text fontWeight='semibold'>{recipe.dishType}</Text></Text>
                        </Box>
                        <Box>
                            {recipe.cautions && (
                                <Box>
                                    <Text mb={1}>Cautions</Text>
                                    <Box display='flex' justifyContent='center' gap={2} flexWrap='wrap'>
                                        {recipe.cautions.map((label) => (
                                            <Tag type='caution' label={label} key={label} />
                                        ))}
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}