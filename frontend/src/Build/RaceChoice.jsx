import {Flex, Grid, Box, STYlE_PROPS_DATA} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setRaceChoice} from './raceChoiceSlice'

        

function RaceChoice(props){

    const dispatch = useDispatch()
    const completeRaceData = useSelector((state) => state.allRaceData)
    const raceData = completeRaceData.races[0].race
    const subraceData = completeRaceData.races[0].subrace
    const raceChoice = useSelector((state) => state.race.race)
    const noNPCMain = raceData.filter((race)=>{
        if(race.traitTags){
        return race.traitTags.includes("NPC Race") === false
        } else {
            return true
        }
    })
  
    const noNPC = [...noNPCMain, ...subraceData]
    noNPC.sort((a, b) => ((a.raceName || a.name) > (b.raceName || b.name)) ? 1 : -1)

    function abilityBonuses(ability){
        let abilityBonusString = ""
        if(ability){
        for(const [key, value] of Object.entries(ability[0])){
            if(Object.keys(ability[0]).length === 1){
                if (key === "cha"){
                    abilityBonusString += `Cha +${value} `
                }else{
                abilityBonusString += `Cha +2, ${key.charAt(0).toUpperCase() + key.slice(1)} +${value} `
                }
            }
            else if(key === "choose"){
                abilityBonusString += `Choose ${value.count} from ${value.from.map((ability) => ability.ability + " ")}`
            } else {
                abilityBonusString += `${key.charAt(0).toUpperCase() + key.slice(1)} +${value} `
            }
        }}else{
            abilityBonusString = "+2 (any) +1 (any) OR +1 to any three"
        }

        return abilityBonusString

    }

    const allRaceOptions = noNPC.map((raceOption) => {
        const abilityBonusString = abilityBonuses(raceOption.ability)
        if (raceChoice.split(' ')[0] === raceOption.name){
            props.setHeading(raceOption.name)
            const description = raceOption.entries.map((entry) => {
                return(
                    <Box key={entry.name}>
                    <p><strong>{entry.name}</strong></p>
                    <p>{entry.entries[0]}</p>
                    </Box>
                )})
            props.setDescription(description)
            return (<Grid key={raceOption.raceName + raceOption.page + raceOption.source + raceOption.name} >
                <Grid.Col span={4} >
                    <input type="radio" id={raceOption.name} name="race-choice" value={raceOption.name + " (" + raceOption.source + ")"} defaultChecked/>
                    <label htmlFor={raceOption.name}>{raceOption.raceName ? raceOption.raceName +" " + "(" + raceOption.name+")" : raceOption.name + " " + "(" + raceOption.source + ")"}</label>
                </Grid.Col>
                <Grid.Col span={4}>
                   <p>{abilityBonusString}</p>
                </Grid.Col>
                <Grid.Col span={4}>
                    <p>Size or source or something useful goes here</p>
                </Grid.Col>
                
                </Grid>)}
        else{
        return (<Grid key={raceOption.raceName + raceOption.page + raceOption.source + raceOption.name}>
            <Grid.Col span={4}>
                <input type="radio" id={raceOption.name} name="race-choice" value={raceOption.name +" (" + raceOption.source + ")"}/>
                <label htmlFor={raceOption.name}>{raceOption.raceName ? raceOption.raceName +" " + "(" + raceOption.name+")" : raceOption.name + " " + "(" + raceOption.source + ")"}</label>
            </Grid.Col>
            <Grid.Col span={4}>
            <p>{abilityBonusString}</p>
                </Grid.Col>
                <Grid.Col span={4}>
                    <p>Size or source or something useful goes here</p>
                </Grid.Col>
        </Grid>)}})


    // function abilityHandler(race){
    //     out = ""
    //     if(race.ability){ 
    //         if(race.ability.choose){

    //         }

    //     }

    // }

    function changeHandler(){
       const chosenRace = document.querySelector('input[name="race-choice"]:checked').value
       const chosenId = document.querySelector('input[name="race-choice"]:checked').id
       console.log(chosenId)
       console.log(chosenRace)

       dispatch(setRaceChoice(chosenRace))
       props.setHeading(chosenRace)
 
    }

        return (
            <form onChange={changeHandler}>

            <fieldset>
                <legend>Please select your race:</legend>
                            {allRaceOptions}

            </fieldset>

            </form>
        )
}

export default RaceChoice
