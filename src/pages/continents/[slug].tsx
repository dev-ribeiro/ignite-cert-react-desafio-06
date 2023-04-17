import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { GetServerSideProps } from 'next'
import { api } from '@/lib/axios'
import { Continent } from '@/@types/continent'
import { Header } from '@/components/Header'
import { AxiosResponse } from 'axios'
import { CountryHighlight } from '@/components/CountryHighlight'
import { CitiesPanel } from '@/components/CitiesPanel'

interface Props {
    slug: string;
}

export default function ContinentPage({ slug }: Props) {
    async function fetchContinentDataBySlug(): Promise<Continent[] | undefined> {
        try {
            const response: AxiosResponse<Continent[]> = await api.get(`/continents?slug=${slug}`)

            return response.data
        } catch (error) {
            console.log(error);
            throw new Error();
        }
    }

    const { data, isLoading } = useQuery('continents', fetchContinentDataBySlug)

    if (isLoading) {
        return (
            <div>
                <span>Carregando...</span>
            </div>
        )
    }

    if (!data) {
        return (
            <div>
                <span>Não foi possível carregar os dados</span>
            </div>
        )
    }

    const { image, name, description, amountDetails, countries } = data[0];

    return (
        <Box
            w="full"
            paddingBottom="2.1875rem"
            display="flex"
            flex={1}
            flexDirection="column"
            bg="light.500"
        >
            <Header hasBackIcon />
            <Box
                h="500px"
                bgImage={`url(${image})`}
                bgRepeat="no-repeat"
                bgSize="cover"
                objectFit="cover"
                p="5rem"
            >
                <Heading
                    maxW="1240px"
                    h="100%"
                    display="flex"
                    alignItems="flex-end"
                    color="light.900"
                >
                    {name}
                </Heading>
            </Box>
            <Flex
                my="5rem"
                w="100%"
                justifyContent="center"
                alignItems="center"
                gap="4.375rem"
            >
                <Text
                    maxW="600px"
                    fontSize="1.5rem"
                    textAlign="justify"
                >
                    {description}
                </Text>
                <CountryHighlight
                    {...amountDetails}
                />
            </Flex>
            <CitiesPanel
                title="Cidades +100"
                countries={countries}
            />
        </Box>
    )
}

export const getServerSideProps: GetServerSideProps<{}, { slug: string }> = async ({ params }) => {
    const { slug } = params!;

    return {
        props: {
            slug: slug
        }
    }
}
