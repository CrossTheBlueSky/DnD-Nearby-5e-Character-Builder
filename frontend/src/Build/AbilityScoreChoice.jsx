import {Grid, Container} from '@mantine/core'
import React from 'react'

function AbilityScoreChoice(){

    const statArr = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
    const rolls = []
    const [statColumns, setStatColumns] = React.useState([])
    function rolledStats(){
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
        

            columns.push(<Grid.Col span={6}>{statArr[i]}</Grid.Col>)
            columns.push(<Grid.Col span={6}>{rolls[i]}</Grid.Col>)
            
        }
        setStatColumns(columns)
    }




    



    return (
        <div>
            <h4 style={{marginTop : ".25rem", marginBottom : ".5rem"}}>Ability Scores</h4>
            <Grid>
                {statColumns}
            </Grid>
            
           <Container> <button onClick={rolledStats} >Roll for Stats </button></Container>
        </div>
    )
}

export default AbilityScoreChoice