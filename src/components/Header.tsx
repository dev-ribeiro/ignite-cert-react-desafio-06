import { Container } from '@chakra-ui/react'
import Image from 'next/image'
import logoImage from '../assets/logo.png'

export function Header() {
    return (
        <Container
            p={7}
            centerContent
        >
            <Image
                src={logoImage}
                width={184}
                height={46}
                alt='Imagem de logo escrita worldtrip'
            />
        </Container>
    )
}
