import {Grid, Container, Skeleton, rem} from '@mantine/core'
import SectionNav from './SectionNav.jsx'
import CharacterPane from './CharacterPane.jsx'
import DescriptionPane from './DescriptionPane.jsx'

function WindowGrid(props){

    return (
        <Container  p="2.5rem" miw="90vw" >
        <Grid>
            <Grid.Col span={3}><CharacterPane height={rem(500)}/></Grid.Col>
            <Grid.Col span={9}>
                <Grid grow>
                    <Grid.Col span={12}>
                        <SectionNav height={rem(100)} />
                        {props.nav}
                    </Grid.Col>
                    <Grid.Col span={5}> 
                    <div style={{marginTop: "1.15rem"}}>
                    {props.choice}
                    </div>
                     </Grid.Col>
                    <Grid.Col span={2}><DescriptionPane/></Grid.Col>
                </Grid>
            </Grid.Col>
        </Grid>
        </Container>
    )

}

export default WindowGrid