import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RecipePage } from './pages/RecipePage';
import { RecipeListPage } from './pages/RecipeListPage';
import { Theme } from './theme'

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (recipe) => {
    setSelectedItem(recipe);
  }

  const goBack = () => {
    setSelectedItem(null);
  }


  return (
    <ChakraProvider theme={Theme}>
      {selectedItem ? (
        <RecipePage recipe={selectedItem} goBack={goBack} />
      ) : (
        <RecipeListPage selectItem={handleSelectItem} />
      )}
    </ChakraProvider>
  )
}

export default App
