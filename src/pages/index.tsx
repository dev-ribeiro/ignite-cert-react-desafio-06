import { Header } from '@/components/Header'
import bannerImage from '../assets/banner.png'
import { Flex, Heading, Stack } from '@chakra-ui/react'
import { Banner } from '@/components/Banner'
import { OptionCard } from '@/components/OptionCard'
import { Divider } from '@/components/Divider'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { Carousel } from '@/components/Carousel'
import { Continent } from '@/@types/continent'

async function fetchContinentsFromApi() {
  try {
    const response = await api.get('/continents')

    return (response.data) as Continent[]
  } catch (error) {
    throw new Error()
  }
}

export default function Home() {
  const { data } = useQuery('continents', fetchContinentsFromApi, {
    retry: false
  })

  return (
    <>
      <Head>
        <title>Worldtrip | Ignite</title>
      </Head>
      <Flex
        direction="column"
        bg="light.500"
      >
        <Header />
        <Banner
          src={bannerImage.src}
          alt="Imagem de banner"
        />
        <Stack
          alignItems="center"
        >
          <Flex
            alignItems="stretch"
            justifyContent="space-around"
            maxWidth="1160px"
            margin="auto"
            gap="8rem"
            m="5rem"
          >
            <OptionCard
              icon='cocktail'
              title='vida noturna'
            />
            <OptionCard
              icon='surf'
              title='praia'
            />
            <OptionCard
              icon='building'
              title='moderno'
            />
            <OptionCard
              icon='museum'
              title='clássico'
            />
            <OptionCard
              icon='earth'
              title='e mais...'
            />
          </Flex>
          <Divider />
        </Stack>
        <Stack
          my="3.25rem"
          alignItems="center"
        >
          <Heading
            fontSize="2.25rem"
            fontWeight="medium"
          >
            Vamos nessa?
          </Heading>
          <Heading
            fontSize="2.25rem"
            fontWeight="medium"
          >
            Então escolha seu continente
          </Heading>
        </Stack>
        {data && (
          <Flex>
            <Carousel
              continents={data}
            />
          </Flex>
        )}
      </Flex>
    </>
  )
}
