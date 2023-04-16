import { Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react"

interface Props {
    countries: number
    languages: number
    cities: number
}

export function CountryHighlight({ cities, countries, languages }: Props) {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            gap="2.625rem"
        >
            <Stack textAlign="center">
                <Text
                    fontSize="3rem"
                    color="highlight"
                    fontWeight="semibold"
                >
                    {countries}
                </Text>
                <Text
                    fontSize="1.5rem"
                    fontWeight="semibold"
                >
                    países
                </Text>
            </Stack>
            <Stack textAlign="center">
                <Text
                    fontSize="3rem"
                    color="highlight"
                    fontWeight="semibold"
                >
                    {languages}
                </Text>
                <Text
                    fontSize="1.5rem"
                    fontWeight="semibold"
                >
                    línguas
                </Text>
            </Stack>
            <Stack textAlign="center">
                <Text
                    fontSize="3rem"
                    color="highlight"
                    fontWeight="semibold"
                >
                    {cities}
                </Text>
                <Text
                    fontSize="1.5rem"
                    fontWeight="semibold"
                >
                    cidades
                    +100</Text>
            </Stack>
        </Flex>
    )
}
