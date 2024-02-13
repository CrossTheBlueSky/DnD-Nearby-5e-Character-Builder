import {Grid, Container, Skeleton, rem} from '@mantine/core'
import SectionNav from './SectionNav.jsx'
import CharacterPane from './CharacterPane.jsx'
import DescriptionPane from './DescriptionPane.jsx'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {setAllClassData} from './Build/allClassSlice'
import React from 'react'
import {setAllRaceData} from './Build/allRaceSlice'
import {setAllBackgroundData} from './Build/allBackgroundSlice'
import {setAllSkillData} from './Build/allSkillSlice'
import {setAllFeatData} from './Build/allFeatSlice'
import CharacterSheetPDF from './Build/CharacterSheetPDF.jsx'

function WindowGrid(props){

    const dispatch = useDispatch()


//gets all of the data required for the Build route
    React.useEffect(() => {        
    axios.get('http://localhost:5000/classes')
    .then(response => {
        dispatch(setAllClassData(response.data))})
    
    
    axios.get('http://localhost:5000/races')
    .then(response => {
        dispatch(setAllRaceData(response.data))})

    axios.get('http://localhost:5000/backgrounds')
    .then(response => {
        dispatch(setAllBackgroundData(response.data))})
    axios.get('http://localhost:5000/skills')
    .then(response => {
        dispatch(setAllSkillData(response.data))})
    axios.get('http://localhost:5000/feats')
    .then(response => {
        dispatch(setAllFeatData(response.data))})
    }
,[])

    


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
                    {props.pane}
                    </div>
                     </Grid.Col>
                    <Grid.Col h={rem(500)} span={2}>{props.description}</Grid.Col>
                </Grid>
            </Grid.Col>
        </Grid>

        <CharacterSheetPDF />
        </Container>
    )

}

export default WindowGrid