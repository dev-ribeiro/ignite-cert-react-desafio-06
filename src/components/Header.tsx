import { Box, Image } from '@chakra-ui/react'
import logoImage from '../assets/logo.png'
import Link from 'next/link'

interface Props {
    hasBackIcon?: boolean
}

export function Header({ hasBackIcon }: Props) {
    return (
        <Box
            maxW={["375px", "1160px"]}
            w="100%"
            mx="auto"
            p={7}
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            {hasBackIcon && (
                <Box
                    pl={["1rem", "5rem"]}
                    position="absolute"
                    left={0}
                >
                    <Link href="/">
                        <span className="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                    </Link>
                </Box>
            )}
            <Image
                src={logoImage.src}
                width={["81px", "184px"]}
                height={["20px", "45px"]}
                alt='Imagem de logo escrita worldtrip'
            />
        </Box>
    )
}
