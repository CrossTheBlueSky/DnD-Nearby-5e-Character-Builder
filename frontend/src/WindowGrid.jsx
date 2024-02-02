import {Grid, Container, Skeleton, rem} from '@mantine/core'
import SectionNav from './SectionNav.jsx'

function WindowGrid(props){

    return (
        <Container  style={{width: "100vw"}}>
        <Grid>
            <Grid.Col span={3}><Skeleton height={rem(500)}/></Grid.Col>
            <Grid.Col span={9}>
                <Grid grow>
                    <Grid.Col span={12}>
                        <SectionNav height={rem(100)} />
                        {props.nav}
                    </Grid.Col>
                    <Grid.Col span={5}> <Skeleton height={rem(425)}/></Grid.Col>
                    <Grid.Col span={2}><Skeleton height={rem(425)}/></Grid.Col>
                </Grid>
            </Grid.Col>
        </Grid>
        </Container>
    )

}

export default WindowGrid