import {Flex, Grid} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setRaceChoice} from './raceChoiceSlice'

        

function RaceChoice(){

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


    const allRaceOptions = noNPC.map((raceOption) => {
        // console.log(raceOption)
        console.log(raceOption)
        if (raceChoice === raceOption.name){
            return (<Grid key={raceOption.raceName + raceOption.page + raceOption.source + raceOption.name} >
                <Grid.Col span={4} >
                    <input type="radio" id={raceOption.id} name="race-choice" value={raceOption.name + raceOption.source} defaultChecked/>
                    <label htmlFor={raceOption.id}>{raceOption.raceName ? raceOption.raceName +" " + "(" + raceOption.name+")" : raceOption.name + " " + "(" + raceOption.source + ")"}</label>
                </Grid.Col>
                <Grid.Col span={4}>
                    <p>Ability Scores go here</p>
                </Grid.Col>
                <Grid.Col span={4}>
                    <p>Size or source or something useful goes here</p>
                </Grid.Col>
                
                </Grid>)}
        else{
        return (<Grid key={raceOption.raceName + raceOption.page + raceOption.source + raceOption.name}>
            <Grid.Col span={4}>
                <input type="radio" id={raceOption.id} name="race-choice" value={raceOption.name + raceOption.source}/>
                <label htmlFor={raceOption.id}>{raceOption.raceName ? raceOption.raceName +" " + "(" + raceOption.name+")" : raceOption.name + " " + "(" + raceOption.source + ")"}</label>
            </Grid.Col>
            <Grid.Col span={4}>
                    <p>Ability Scores go here</p>
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

       dispatch(setRaceChoice(chosenRace))
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
