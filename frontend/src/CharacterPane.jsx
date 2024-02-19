import {Grid, rem, Image, Accordion, Button, BackgroundImage, Badge, Container, Stack} from '@mantine/core'
import LeftParams from './LeftParams.jsx'  
import MidParams from './MidParams.jsx'
import RightParams from './RightParams.jsx'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCharacterId} from './currentCharacterIdSlice.js'
import CharacterSheetPDF from './Build/CharacterSheetPDF.jsx'

function CharacterPane(props){

    const chosenClass = useSelector((state) => state.class.class)
    const chosenBackground = useSelector((state) => state.background.background)
    const chosenRace = useSelector((state) => state.race.race)
    const chosenSkills = useSelector((state) => state.skills.skills)
    const chosenFeats = useSelector((state) => state.feats.feats)
    const abilityScores = useSelector((state) => state.abilityScores.abilityScores)
    const currentCharacterId = useSelector((state) => state.characterId.characterId)
    const dispatch = useDispatch()


    function postHandler(){
        axios.post('http://localhost:5000/characters', {
            name: "Karlach",
            class: chosenClass,
            background: chosenBackground,
            race: chosenRace,
            skills: chosenSkills,
            feats: chosenFeats,
            abilityScores: abilityScores
        }).then((response) => {

            dispatch(setCharacterId(response.data.insertedId))
        })
    }

    function patchHandler(){
        const patchObj = {name: "Unnamed Character",
        class: chosenClass,
        background: chosenBackground,
        race: chosenRace,
        skills: chosenSkills,
        feats: chosenFeats,
        abilityScores: abilityScores}
        axios.patch(`http://localhost:5000/characters/`, {
           id: { id: currentCharacterId}, patch : patchObj})
            
    }


    return (

        <Grid my="0" py="0" h={rem(550)}>

            <Grid.Col align="center" py=".35rem" span={12}>
                <Badge my=".35rem" py=".35rem" style={{backgroundColor: "#16425B"}}>
                {currentCharacterId === '65cf8a970e25d8831390da3d' ?  <span> Karlach </span> : <span>Unnamed Character</span>}</Badge>
                <Image h={100} 
                maw={150}
                src={currentCharacterId === '65cf8a970e25d8831390da3d' ?  'src/assets/karlach.jpg' : 'src/assets/nameless-one.png'}
                alt="character portrait" />
            </Grid.Col>
            <Grid.Col span={12}>
                <Grid>
                    <Grid.Col span={4}>
                        <LeftParams />
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <MidParams />
                    </Grid.Col>
                    {/* <Grid.Col span={4}>
                        <RightParams />
                    </Grid.Col> */}
                </Grid>
            </Grid.Col>
            <Grid.Col h={100} span={12}>
                <Container>
                <Stack>
                <Accordion  bg="#4084B0" fz=".75rem" size="5rem" transitionDuration={1000} variant="contained">
                    <Accordion.Item label="feats" value="feats">
                        <Accordion.Control>Feats</Accordion.Control>
                        <Accordion.Panel>{chosenFeats}</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item label="skills" value="skills">
                        <Accordion.Control>Skills</Accordion.Control>
                        <Accordion.Panel>{chosenSkills}</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>

            {/* </Grid.Col>
            <Grid.Col  mb="0" mt=".75rem" py="0" align="center" span={12}> */}
                {/* <Button>Character Sheet</Button> */}
                <Button variant="gradient"
                gradient={{ from: 'rgba(105, 1, 1, 1)', to: 'red', deg: 360 }}
                align="center" my="0" py="0" fz=".6rem" size="compact-sm" onClick={patchHandler}>Save Character</Button>
            {/* </Grid.Col>
            <Grid.Col my=".25rem" pt="0" align="center" span={12}> */}
                <Button variant="gradient"
                    gradient={{ from: 'rgba(105, 1, 1, 1)', to: 'red', deg: 360 }}
                    align="center" my="0" py="0" fz=".6rem" size="compact-sm" onClick={postHandler}>Save As New Character</Button>


                <CharacterSheetPDF />

                    </Stack>

                    </Container>
            </Grid.Col>

        </Grid>

    )
}

export default CharacterPane