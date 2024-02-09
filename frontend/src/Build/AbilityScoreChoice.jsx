import {Grid, Container, Tabs} from '@mantine/core'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setAbilityScoreChoice} from './abilityScoreChoiceSlice'
import PointBuyCalculator from './PointBuyCalculator.jsx'
import StatRoller from './StatRoller.jsx'
import StandardArray from './StandardArray.jsx'

function AbilityScoreChoice(){

    const dispatch = useDispatch()


    const statArr = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
    const rolls = []
    const statObj = useSelector((state) => state.abilityScores.abilityScores)
    const [statColumns, setStatColumns] = React.useState([])

    function rolledStats(){
        let rolled = {}
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
            rolled = {...rolled, [statArr[i]] : rolls[i]}
            
            
        }
        setStatColumns(columns)
        dispatch(setAbilityScoreChoice(rolled))
    }



    return (
        <Tabs>
            <Tabs.List>
                <Tabs.Tab value="rolled">Roll Stats</Tabs.Tab>
                <Tabs.Tab value="pointBuy">Point Buy</Tabs.Tab>
                <Tabs.Tab value="standard">Standard Array</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="rolled">
                <StatRoller />
            </Tabs.Panel>
            <Tabs.Panel value="pointBuy">
                <PointBuyCalculator />
            </Tabs.Panel>
            <Tabs.Panel value="standard">
                <StandardArray />
            </Tabs.Panel>
        </Tabs>
    )
}

export default AbilityScoreChoice