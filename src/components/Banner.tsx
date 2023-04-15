import { Flex, FlexProps, Image } from "@chakra-ui/react"

interface Props extends FlexProps {
    src: string
    alt: string
}

export function Banner({ src, alt, ...props }: Props) {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            {...props}
        >
            <Image
                src={src}
                alt={alt}
            />
        </Flex>
    )
}
