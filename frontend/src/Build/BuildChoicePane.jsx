import React from 'react'
import {Box, Container, Stack, rem} from '@mantine/core'
import axios from 'axios'
import ClassChoice from './ClassChoice.jsx'

function BuildChoicePane(){

    const [selectedTab, setSelectedTab] = React.useState("Class")
    const [renderedTab, setRenderedTab] = React.useState(<ClassChoice/>)

    // if (selectedTab === "Class"){


    //     setRenderedTab(<ClassChoice/>)
    
    // }



    return (
        <Stack h={rem(500)}>
                <Box h="70%" bg={{base: "gray.8"}}>
                    <Container>
                        {renderedTab}
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