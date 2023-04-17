import { Box, Flex, Grid, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"

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
        <Box
            my="2rem"
            mx="auto"
            maxW={["375px", "375px", "1160px"]}
        >
            <Heading
                ml={["1rem", 0]}
                fontSize="2.625rem"
                fontWeight="medium"
                color="dark.500"
                textAlign={["center", "center", "start"]}
            >
                {title}
            </Heading>
            <Box
                display="flex"
                flexDir={["column", "row"]}
                flexWrap={["nowrap", "wrap"]}
                justifyContent={["center", "center", "space-around"]}
                gap="2.8125rem"
                mt="5rem"
            >
                {countries.map(({ city, country, flag, image }) => (
                    <Box
                        borderWidth="1px"
                        borderStyle="solid"
                        borderColor="highlight"
                        borderTopLeftRadius="4px"
                        borderTopRadius="4px"
                        overflow="hidden"
                        key={city}
                    >
                        <Image
                            src={image}
                            alt=""
                            w="256px"
                            h="173px"
                        />
                        <Flex
                            justifyContent="space-between"
                            alignItems="center"
                            p="1.5rem"
                        >
                            <Stack gap="0.75rem">
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
                            </Stack>
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
            </Box>
        </Box>
    )
}
