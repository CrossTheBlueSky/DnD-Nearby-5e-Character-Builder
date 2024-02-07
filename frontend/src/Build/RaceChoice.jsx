
import {Flex} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setRaceChoice} from './raceChoiceSlice'

        

function RaceChoice(){

    const dispatch = useDispatch()
    const raceData = useSelector((state) => state.allRaceData.races[0])
    const raceChoice = useSelector((state) => state.race.race)
    const allRaceOptions = raceData.map((raceOption) => {
        return (
            <div key={raceOption.page + raceOption.source + raceOption.name}>
                <input type="radio" id={raceOption.id} name="race-choice" value={raceOption.name}/>
                <label htmlFor={raceOption.id}>{raceOption.name}</label>
            </div>
        )})


    function changeHandler(){
       const chosenRace = document.querySelector('input[name="race-choice"]:checked').value

       dispatch(setRaceChoice(chosenRace))
       console.log(raceChoice)
    }

        return (
            <form onChange={changeHandler}>
            <fieldset>
                <legend>Please select your race:</legend>
                <Flex justify = "flex-start" wrap="wrap">
                  {allRaceOptions}
                </Flex>
                <div>
                <button type="submit">Submit</button>
                </div>
            </fieldset>
            </form>
        )
}

export default RaceChoice
