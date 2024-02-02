import {Grid, rem} from '@mantine/core'

function BuildChoicePane(){
    return (
        <Grid>
            <Grid.Col span={12} height={rem(300)}> Choices go here </Grid.Col>
            <Grid.Col span={12} height={rem(200)}> Checklist goes here </Grid.Col>
        </Grid>
    )
}

export default BuildChoicePane