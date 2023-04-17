import { Box, BoxProps, Image } from "@chakra-ui/react"

interface Props extends BoxProps {
    src: string
}

export function Banner({ src, ...props }: Props) {
    return (
        <Box
            w="100%"
            h={["163px", "368px"]}
            bgImage={src}
            bgSize={["cover", "contain"]}
            bgRepeat="no-repeat"
            {...props}
        />
    )
}
