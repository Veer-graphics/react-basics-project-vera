import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { data } from "../utils/data"
import { useEffect, useState } from "react"
import { SearchBar } from "../components/SearchBar";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ selectItem }) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setRecipes(data.hits)
    }, []);

    const searchResult = recipes.filter((recipe) =>
        recipe.recipe.label.toLowerCase().includes(search.toLowerCase()) ||
        recipe.recipe.dietLabels.some((label) => label.toLowerCase().includes(search.toLowerCase())) ||
        recipe.recipe.healthLabels.some((label) => label.toLowerCase().includes(search.toLowerCase())) ||
        recipe.recipe.cautions.some((label) => label.toLowerCase().includes(search.toLowerCase()))
    )

    return (
        <Container maxW='1200px' w='100%' p={10}>
            <Box m='auto' mb={10} maxW='md' textAlign='center'>
                <Heading mb={5} color='white'>Winc Recipe Checker</Heading>
                <SearchBar value={search} handleChange={setSearch} />
            </Box>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                {searchResult.map((recipe) => (
                    <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} selectItem={selectItem} />
                ))}
            </SimpleGrid>
        </Container>
    )
}