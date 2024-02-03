import {Grid, Image, Accordion, Button} from '@mantine/core'
import LeftParams from './LeftParams.jsx'  
import MidParams from './MidParams.jsx'
import RightParams from './RightParams.jsx'

function CharacterPane(){
    return (
        <Grid>
            <Grid.Col align="center" span={12}>
                <h1 style={{marginBottom: ".25rem", paddingBottom: "0"}}>Character</h1>
                <Image h={200} w={200} src="https://via.placeholder.com/150" alt="character portrait" />
            </Grid.Col>
            <Grid.Col span={12}>
                <Grid>
                    <Grid.Col span={4}>
                        <LeftParams />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <MidParams />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <RightParams />
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col h={100} span={12}>
                <Accordion variant="contained" label="feats">
                    <Accordion.Item label="feats" value="feats">
                        <Accordion.Control>Feats</Accordion.Control>
                        <Accordion.Panel>This is a feat</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item label="skills" value="skills">
                        <Accordion.Control>Skills</Accordion.Control>
                        <Accordion.Panel>This is a skill</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Grid.Col>
            <Grid.Col  mt=".5rem" align="center" span={12}>
                <Button>Character Sheet</Button>
            </Grid.Col>
            <Grid.Col align="center" span={12}>
                <Button>Save Character</Button>
            </Grid.Col>
        </Grid>
    )
}

export default CharacterPane