import { Box, Container, SimpleGrid, Text, Heading } from "@chakra-ui/react"
import { DetailNav } from "../components/DetailNav"
import { Header } from "../components/Header"
import { Tag } from "../components/ui/Tag"

export const RecipePage = ({ recipe, goBack }) => {
    return (
        <Container maxW='1200px' w='100%' p={10}>
            <Box bgColor='white' borderRadius='lg' boxShadow='lg' position='relative'>
                <DetailNav goBack={goBack} />
                <Header recipe={recipe} />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} p={5}>
                    <Box>
                        <Box mb={3}>
                            <Text textTransform='uppercase' mb={2} fontWeight='semibold' color='gray.500' fontSize='sm'>{recipe.mealType}</Text>
                            <Heading color='gray.700' size='md' fontWeight='medium' mb={4}>{recipe.label}</Heading>
                            <Text display='flex' gap={2}>Total cooking time: <Text fontWeight='semibold'>{recipe.totalTime} minutes</Text></Text>
                            <Text display='flex' gap={2}>Servings: <Text fontWeight='semibold'>{recipe.yield}</Text></Text>
                        </Box>
                        <Box>
                            <Heading size='md' fontWeight='semibold' mb={1}>Ingredients:</Heading>
                            {recipe.ingredientLines.map((ingredient, index) => (
                                <Text key={index}>{ingredient}</Text>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Box mb={4}>
                            <Text mb={2}>Health labels:</Text>
                            <Box display='flex' gap={2} flexWrap='wrap'>
                                {recipe.healthLabels.map((label, index) => (
                                    <Tag key={index} label={label} type='health' />
                                ))}
                            </Box>
                        </Box>
                        <Box mb={4}>
                            <Text mb={2}>Diet:</Text>
                            <Box display='flex' gap={2} flexWrap='wrap'>
                                {recipe.dietLabels.map((label, index) => (
                                    <Tag key={index} label={label} type='diet' />
                                ))}
                            </Box>
                        </Box>
                        <Box mb={4}>
                            <Text mb={2}>Cautions:</Text>
                            <Box display='flex' gap={2} flexWrap='wrap'>
                                {recipe.cautions.map((label, index) => (
                                    <Tag key={index} label={label} type='cautions' />
                                ))}
                            </Box>
                        </Box>
                        <Box>
                            <Heading size='md' fontWeight='semibold' mb={2}>Total nutrients:</Heading>
                            <Box display='flex' flexWrap='wrap' gap={5}>
                                <Box>
                                    <Text>{recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0)}</Text>
                                    <Text textTransform='uppercase' fontWeight='medium'>{recipe.totalNutrients.ENERC_KCAL.unit}</Text>
                                </Box>
                                <Box>
                                    <Text>{recipe.totalNutrients.PROCNT.quantity.toFixed(0)}</Text>
                                    <Text textTransform='uppercase' fontWeight='medium'>{recipe.totalNutrients.PROCNT.unit}</Text>
                                </Box>
                                <Box>
                                    <Text>{recipe.totalNutrients.FAT.quantity.toFixed(0)}</Text>
                                    <Text textTransform='uppercase' fontWeight='medium'>{recipe.totalNutrients.FAT.unit}</Text>
                                </Box>
                                <Box>
                                    <Text>{recipe.totalNutrients.CHOCDF.quantity.toFixed(0)}</Text>
                                    <Text textTransform='uppercase' fontWeight='medium'>{recipe.totalNutrients.CHOCDF.unit}</Text>
                                </Box>
                                <Box>
                                    <Text>{recipe.totalNutrients.CHOLE.quantity.toFixed(0)}</Text>
                                    <Text textTransform='uppercase' fontWeight='medium'>{recipe.totalNutrients.CHOLE.unit}</Text>
                                </Box>
                                <Box>
                                    <Text>{recipe.totalNutrients.NA.quantity.toFixed(0)}</Text>
                                    <Text textTransform='uppercase' fontWeight='medium'>{recipe.totalNutrients.NA.unit}</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Box>
        </Container>
    )
}