import { Flex, Heading, Image, Stack } from '@chakra-ui/react'

type IconType = "cocktail" | "building" | "earth" | "surf" | "museum"

interface Props {
    icon: IconType
    title: string
}

export function OptionCard({ icon, title }: Props) {

    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Image
                src={`/icons/${icon}.png`}
                alt={`Imagem de ${icon}`}
                boxSize="5rem"
            />
            <Heading
                fontSize="1.5rem"
                fontWeight="semibold"
            >{title}</Heading>
        </Flex>
    )
}
