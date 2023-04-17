import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import logoImage from '../assets/logo.png'
import Link from 'next/link'

interface Props {
    hasBackIcon?: boolean
}

export function Header({ hasBackIcon }: Props) {
    return (
        <Box
            maxW="1160px"
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
                    pl="5rem"
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
                src={logoImage}
                width={184}
                height={46}
                alt='Imagem de logo escrita worldtrip'
            />
        </Box>
    )
}
