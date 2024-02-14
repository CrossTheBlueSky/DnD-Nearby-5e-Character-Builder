import {Box, Container, Stack, rem} from '@mantine/core'
import {useSelector} from 'react-redux'
import React from 'react'

function BuildChoicePane(props){

    const classChoice = useSelector((state) => state.class.class)
    const raceChoice = useSelector((state) => state.race.race)
    const backgroundChoice = useSelector((state) => state.background.background)
    const skillChoice = useSelector((state) => state.skills.skills)
    const featChoice = useSelector((state) => state.feats.feats)
    const abilityScores = useSelector((state) => state.abilityScores.abilityScores)
    let chosenScores = null

    React.useEffect(() => {
    if(abilityScores !== undefined){
        for (const [key, value] of Object.entries(abilityScores)) {
            if(value !== null){
                chosenScores = true
            }else{
                chosenScores = false
            }
        }

    }}, [abilityScores])


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
                    {classChoice || "Choose a class"}
                    <br />
                    {raceChoice || "Choose a race"}
                    <br />
                    {backgroundChoice ||"Choose a background"}
                    <br />
                    {chosenScores ?  "Ability scores chosen" : "Choose ability scores"}
                    <br />
                    {skillChoice[0] ?  skillChoice.length + " skills chosen" : "Choose skills"}
                    <br />
                    {featChoice.length + " feats chosen" || "Choose feats"}
                    <br />


                    </Container>
                </Box>
        </Stack>
    )
}

export default BuildChoicePane