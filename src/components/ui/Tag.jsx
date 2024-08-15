import { Badge } from "@chakra-ui/react"

export const Tag = ({ type, label }) => {
    const bgColor = type === "health" ? "purple.100" : type === "diet" ? "green.100" : "red.100"
    const textColor = type === "health" ? "purple.700" : type === "diet" ? "green.700" : "red.700"

    return (
        <Badge bgColor={bgColor} color={textColor} textTransform='uppercase' p={1} borderRadius='md'>{label}</Badge>
    )
}