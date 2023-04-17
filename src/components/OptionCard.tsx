import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react'

type IconType = "cocktail" | "building" | "earth" | "surf" | "museum"

interface Props {
    icon: IconType
    title: string
}

export function OptionCard({ icon, title }: Props) {

    return (
        <Box
            display="flex"
            flexDirection={["row", "row", "row", "column"]}
            justifyContent="center"
            alignItems="center"
            gap={["0.5rem", "0.5rem", "0.5rem", 0]}
            my="auto"
        >
            <Image
                display={["none", "none", "none", "block"]}
                src={`/icons/${icon}.png`}
                alt={`Imagem de ${icon}`}
                boxSize="5rem"
            />
            <Box
                display={["block", "block", "block", "none"]}
                w="8px"
                h="8px"
                bg="highlight"
                borderRadius="999px"
            />
            <Heading
                fontSize={["1.125rem", "1.125rem", "1.125rem", "1.5rem"]}
                fontWeight="semibold"
            >
                {title}
            </Heading>
        </Box>
    )
}
