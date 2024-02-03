import {Box, Container, Stack, rem} from '@mantine/core'

function BuildChoicePane(){
    return (
        <Stack h={rem(500)}>
                <Box h="70%" bg={{base: "gray.8"}}>
                    <Container>
                    <h1>Build Choices</h1>
                    <p>Many Accordions will go here</p>
                    </Container>
                </Box> 

                <Box h="30%" bg={{base:"gray.6"}}>
                    <Container>
                    <h2>Build Checklist</h2>
                    <p>Choice clickies go here</p>
                    </Container>
                </Box>
        </Stack>
    )
}

export default BuildChoicePane