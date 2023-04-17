import { Divider } from "@/components/Divider";
import { OptionCard } from "@/components/OptionCard";
import { Flex, VStack } from "@chakra-ui/react";

export function OptionsPanel() {

    return (
        <VStack>
            <Flex
                alignItems="stretch"
                justifyContent={["center", "center", "space-around"]}
                maxWidth={["275px", "275px", "1160px"]}
                margin="auto"
                wrap={["wrap", "wrap", "nowrap"]}
                gap={["4.4375rem", "4.4375rem", "8rem"]}
                my={["2.25rem", "2.25rem", "5rem"]}
                mx="auto"
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
        </VStack>
    )
}
