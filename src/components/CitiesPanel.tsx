import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react"

interface Props {
    title: string
    countries: {
        country: string;
        city: string;
        image: string;
        flag: string;
    }[]
}

export function CitiesPanel({ title, countries }: Props) {
    return (
        <Box maxW="1160px" mx="auto">
            <Heading>{title}</Heading>
            <Grid
                gridTemplateColumns="repeat(4,1fr)"
                gap="2.8125rem"
                mt="5rem"
            >
                {countries.map(({ city, country, flag, image }) => (
                    <Box key={city}>
                        <Image
                            src={image}
                            alt=""
                            maxW="256px"
                            h="173px"
                            borderTopLeftRadius="4px"
                            borderTopRadius="4px"
                        />
                        <Flex
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                gap="0.75rem"
                            >
                                <Heading
                                    fontSize="1.25rem"
                                    fontWeight="semibold"
                                >
                                    {country}
                                </Heading>
                                <Text
                                    fontSize="1rem"
                                    fontWeight="medium"
                                    color="dark.100"
                                >
                                    {city}
                                </Text>
                            </Box>
                            <Box
                                as="span"
                                className={flag}
                                w="30px"
                                h="30px"
                                borderRadius="999px"
                            />
                        </Flex>
                    </Box>
                ))}
            </Grid>
        </Box>
    )
}
