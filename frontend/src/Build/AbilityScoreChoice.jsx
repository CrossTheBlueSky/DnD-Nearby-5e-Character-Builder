import {Grid, Container} from '@mantine/core'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setAbilityScoreChoice} from './abilityScoreChoiceSlice'

function AbilityScoreChoice(){

    const dispatch = useDispatch()


    const statArr = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
    const rolls = []
    const statObj = useSelector((state) => state.abilityScores.abilityScores)
    const [statColumns, setStatColumns] = React.useState([])
    const [rolled, setRolled] = React.useState({})

    function rolledStats(){


        setRolled({})
        for(let i = 0; i < 6; i++){
            let roll = []
 
            for(let j = 0; j < 4; j++){
                roll.push(Math.floor(Math.random() * 6) + 1)
            }
            roll.sort((a, b) => a - b)
            roll.shift()
            rolls.push(roll.reduce((a, b) => a + b))
        }
        let columns = []
        for(let i = 0; i < 6; i++){
        
            columns.push([statArr[i], rolls[i]])
            setRolled(prev => ({...prev, [statArr[i]] : rolls[i]}))
            
            
        }
        setStatColumns(columns)
        dispatch(setAbilityScoreChoice(rolled))
    }




    const allStatColumns = statColumns.map((statColumn) => {

        return (<>
        <Grid.Col span={6} key={statColumn + "Stat"}> {statColumn[0]}</Grid.Col>
        <Grid.Col span={6} key={statColumn + "Value"}> {statColumn[1]}</Grid.Col>
        </>
        )}
    )


    return (
        <div>
            <h4 style={{marginTop : ".25rem", marginBottom : ".5rem"}}>Ability Scores</h4>
            <Grid>
                {allStatColumns}
            </Grid>
            
           <Container mt=".5rem"> <button onClick={rolledStats} >Roll for Stats </button>
           </Container>
        </div>
    )
}

export default AbilityScoreChoice