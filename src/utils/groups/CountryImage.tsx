import { Box, Heading } from "@chakra-ui/react"

interface Props {
    name: string
    image: string
}

export function CountryImage({ image, name }: Props) {
    return (
        <Box
            h={["150px", "150px", "500px"]}
            bgImage={`url(${image})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center"
            objectFit="contain"
            p={[0, 0, "5rem"]}
        >
            <Heading
                maxW={["100%", "100%", "1240px"]}
                h="100%"
                display="flex"
                alignItems={["center", "center", "flex-end"]}
                justifyContent={["center", "center", "flex-start"]}
                color="light.900"
                fontSize="1.75rem"
            >
                {name}
            </Heading>
        </Box>
    )
}
