import {Grid, Container, rem, BackgroundImage} from '@mantine/core'
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
import './WindowGrid.css'

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
        <>
        <Container px=".5rem" py="1rem" miw="95vw" bg="#8797AF">

        <Grid bg="#3D080B" justify="flex-start" m="0" px="1rem" align="stretch">
            {/* <Grid.Col my="0" py="0" span={3}>
                <div className="logo">
                <img style={{height: "50%", margin: "0", padding: "0"}} src="src/assets/D&D.png" alt="D&D" />
                <br/>
                <img style={{height: "25%", margin: "0", padding: "0"}}  src="src/assets/Nearby.png" alt="Nearby"  />
                </div>
            </Grid.Col>
            <Grid.Col my="0" py="0" span={9} /> */}
            <Grid.Col py="1.5rem" span={3}>
                <Grid>
            <BackgroundImage style={{border : "solid black 2px"}}
            py="0" my="0"
            src="src/assets/old-rough-parchment-background.jpg" alt="old paper background" >
            <Grid.Col  py="0rem" my="0" span={12}>
                <CharacterPane/>

                </Grid.Col>
                </BackgroundImage>
                </Grid>
            </Grid.Col>
            <Grid.Col span={9}>
                <Grid grow>
                    <Grid.Col span={12}>
                        <SectionNav height={rem(80)} py="0" my="0"/>
                        {props.nav}
                    </Grid.Col>
                    <Grid.Col  span={5}>
                        <div>
                        {props.pane}
                        </div>
                    </Grid.Col>
                    <Grid.Col span={2}>
                    <BackgroundImage style={{border : "solid black 2px"}}
                        py="0" my="0"
                        src="src/assets/old-rough-parchment-background.jpg" alt="old paper background" >
                    <Grid.Col  h={rem(400)} span={12}>{props.description}</Grid.Col>
                    </BackgroundImage>
                    </Grid.Col>
                </Grid>
            </Grid.Col>

        </Grid>

        </Container>
        <Container w="80vh">
        <CharacterSheetPDF style={{width: "100%"}} />
        </Container>
        </>
    )

}

export default WindowGrid