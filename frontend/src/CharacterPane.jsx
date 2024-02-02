import {Grid, Image, Accordion} from '@mantine/core'
import LeftParams from './LeftParams.jsx'  
import MidParams from './MidParams.jsx'
import RightParams from './RightParams.jsx'

function CharacterPane(){
    return (
        <Grid>
            <Grid.Col span={12}>
                <h1>Character</h1>
                <Image src="https://via.placeholder.com/150" alt="character portrait" />
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
            <Grid.Col span={12}>
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
        </Grid>
    )
}

export default CharacterPane