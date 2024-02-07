import {Grid, Container} from '@mantine/core'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setAbilityScoreChoice} from './abilityScoreChoiceSlice'

function AbilityScoreChoice(){

    const dispatch = useDispatch()
    const abilityScores = useSelector((state) => state.abilityScores.abilityScores)

    const statArr = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
    const rolls = []
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
        

            columns.push(<Grid.Col key={statArr[i]} span={6}>{statArr[i]}</Grid.Col>)
            columns.push(<Grid.Col key={statArr[i] + rolls[i]} span={6}>{rolls[i]}</Grid.Col>)
            setRolled(prev => ({...prev, [statArr[i]] : rolls[i]}))
            
            
        }
        setStatColumns(columns)
        dispatch(setAbilityScoreChoice(rolled))
    }




    



    return (
        <div>
            <h4 style={{marginTop : ".25rem", marginBottom : ".5rem"}}>Ability Scores</h4>
            <Grid>
                {statColumns}
            </Grid>
            
           <Container mt=".5rem"> <button onClick={rolledStats} >Roll for Stats </button>
           </Container>
        </div>
    )
}

export default AbilityScoreChoice