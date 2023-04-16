import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Continent } from '@/@types/continent';
import Link from 'next/link';

interface Props {
    continents: Continent[]
}

export function Carousel({ continents }: Props) {
    return (
        <Flex
            w="100%"
            h={["15.625rem", "28.125rem"]}
            maxW="1240px"
            mx="auto"
            mb={["5", "10"]}
        >
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                wrapperTag='ul'
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                }}
                loop
                autoplay
                initialSlide={0}
            >
                {continents.map(continent => (
                    <SwiperSlide key={continent.id}>
                        <Link href={`/continent/${continent.slug}`}>
                            <Flex
                                w="100%"
                                h="100%"
                                align="center"
                                justify="center"
                                direction="column"
                                bgImage={`url('${continent.image}')`}
                                bgPosition="100% 30%"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                textAlign="center"
                            >
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold"
                                >
                                    {continent.name}
                                </Heading>
                                <Text
                                    fontWeight="bold"
                                    color="gray.300"
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    mt={["2", "4"]}
                                >
                                    {continent.summary}
                                </Text>
                            </Flex>
                        </Link>
                    </SwiperSlide>

                ))}
            </Swiper>
        </Flex>
    );
};
