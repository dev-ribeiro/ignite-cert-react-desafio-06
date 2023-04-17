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
            justifyContent={["space-between", "space-between", "center"]}
            gap="2.625rem"
        >
            <Stack textAlign={["start", "start", "center"]}>
                <Text
                    fontSize={["1.5rem", "1.5rem", "3rem"]}
                    color="highlight"
                    fontWeight="semibold"
                >
                    {countries}
                </Text>
                <Text
                    fontSize={["1.125rem", "1.125rem", "1.5rem"]}
                    fontWeight="semibold"
                >
                    países
                </Text>
            </Stack>
            <Stack textAlign={["start", "start", "center"]}>
                <Text
                    fontSize={["1.5rem", "1.5rem", "3rem"]}
                    color="highlight"
                    fontWeight="semibold"
                >
                    {languages}
                </Text>
                <Text
                    fontSize={["1.125rem", "1.125rem", "1.5rem"]}
                    fontWeight="semibold"
                >
                    línguas
                </Text>
            </Stack>
            <Stack textAlign={["start", "start", "center"]}>
                <Text
                    fontSize={["1.5rem", "1.5rem", "3rem"]}
                    color="highlight"
                    fontWeight="semibold"
                >
                    {cities}
                </Text>
                <Text
                    fontSize={["1.125rem", "1.125rem", "1.5rem"]}
                    fontWeight="semibold"
                >
                    cidades
                    +100</Text>
            </Stack>
        </Flex>
    )
}
