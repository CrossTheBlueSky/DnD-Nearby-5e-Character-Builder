import {Box, Container, Stack, rem} from '@mantine/core'

function DetailsPane(){
    return (
        <Stack h={rem(500)}>
                <Box h="70%" bg={{base: "gray.8"}}>
                    <Container>
                    <h1>Will need to do Details and level-up based on state, methinks</h1>
                    <p>One is a form and the other I think is just 2 buttons?</p>
                    </Container>
                </Box> 

                <Box h="30%" bg={{base:"gray.6"}}>
                    <Container>
                    <h2>Character Status</h2>
                    <p>Anything you still need to do to make a character</p>
                    </Container>
                </Box>
        </Stack>
    )
}

export default DetailsPane