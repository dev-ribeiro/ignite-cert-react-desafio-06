import { Heading, VStack } from "@chakra-ui/react";

export function CallToAction() {
    return (
        <VStack
            my={["1.5rem", "1.5rem", "3.25rem"]}
            alignItems="center"
        >
            <Heading
                fontSize={["1.25rem", "1.25rem", "2.25rem"]}
                fontWeight="medium"
            >
                Vamos nessa?
            </Heading>
            <Heading
                fontSize={["1.25rem", "1.25rem", "2.25rem"]}
                fontWeight="medium"
            >
                Então escolha seu continente
            </Heading>
        </VStack>
    )
}
