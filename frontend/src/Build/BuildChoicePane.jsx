import {Box, Container, Stack, rem} from '@mantine/core'

function BuildChoicePane(props){



    return (
        <Stack h={rem(675)}>
                <Box h="75%" style={{overflow:"scroll"}} bg={{base: "gray.8"}}>
                    <Container fluid>
                        {props.tab}
                    </Container>
                </Box> 

                <Box bottom h="25%" style={{overflow:"scroll"}} bg={{base:"gray.6"}}>
                    <Container fz=".75rem" >
                    <h4 style={{marginTop : ".5rem", marginBottom : ".5rem"}}>Build Checklist</h4>
                    Choose a class
                    <br />
                    Choose a race
                    <br />
                    Choose a background
                    <br />
                    Choose skills
                    <br />
                    Choose feats
                    <br />


                    </Container>
                </Box>
        </Stack>
    )
}

export default BuildChoicePane