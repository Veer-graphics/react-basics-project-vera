import { Input } from "@chakra-ui/react"

export const SearchBar = ({ value, handleChange }) => {
    return (
        <Input
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search recipes"
            bgColor='white'
            boxShadow='lg'
        />
    )
}