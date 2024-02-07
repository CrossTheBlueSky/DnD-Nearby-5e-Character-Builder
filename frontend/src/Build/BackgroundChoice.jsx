
import {Flex} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setBackgroundChoice} from './backgroundChoiceSlice'

        

function BackgroundChoice(props){

    const dispatch = useDispatch()
    const BackgroundData = useSelector((state) => state.allBackgroundData.backgrounds[0])

    const allBackgroundOptions = BackgroundData.map((BackgroundOption) => {
        return (
            <div key={BackgroundOption.name}>
                <input type="radio" id={BackgroundOption.id} name="Background-choice" value={BackgroundOption.name}/>
                <label htmlFor={BackgroundOption.id}>{BackgroundOption.name}</label>
            </div>
        )})


    function changeHandler(){
       const chosenBackground = document.querySelector('input[name="Background-choice"]:checked').value
       const backgroundInfo = BackgroundData.filter((background) => background.name === chosenBackground)
       dispatch(setBackgroundChoice(chosenBackground))
       props.setHeading(chosenBackground)
       props.setDescription(backgroundInfo[0].entries[1].entries[0])
    }

        return (
            <form onChange={changeHandler}>
            <fieldset>
                <legend>Please select your Background:</legend>
                <Flex justify = "flex-start" wrap="wrap">
                  {allBackgroundOptions}
                </Flex>
                <div>
                {/* <button type="submit">Submit</button> */}
                </div>
            </fieldset>
            </form>
        )
}

export default BackgroundChoice
