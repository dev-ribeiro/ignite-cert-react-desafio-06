import { Header } from '@/components/Header'
import bannerImage from '../assets/banner.png'
import { Box, Flex, Heading, Stack } from '@chakra-ui/react'
import { Banner } from '@/components/Banner'
import { OptionCard } from '@/components/OptionCard'
import { Divider } from '@/components/Divider'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { Carousel } from '@/components/Carousel'
import { Continent } from '@/@types/continent'
import { OptionsPanel } from '@/utils/groups/OptionsPanel'
import { CallToAction } from '@/utils/groups/CallToAction'

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
      <Box
        display="flex"
        flexDirection="column"
        bg="light.500"
      >
        <Header />
        <Banner
          src={bannerImage.src}
        />
        <OptionsPanel />
        <CallToAction />
        {data && (<Carousel continents={data} />)}
      </Box>
    </>
  )
}
