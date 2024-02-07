
import {Flex} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setClassChoice} from './classChoiceSlice'

        

function ClassChoice(){

    const dispatch = useDispatch()
    const classData = useSelector((state) => state.allClassData.classes)



    const allClassOptions = classData.map((classOption) => {
        return (
            <div key={classOption.name}>
                <input type="radio" id={classOption.id} name="class-choice" value={classOption.name}/>
                <label htmlFor={classOption.id}>{classOption.name}</label>
            </div>
        )})


    function changeHandler(){
       const chosenClass = document.querySelector('input[name="class-choice"]:checked').value

       dispatch(setClassChoice(chosenClass))
    }

        return (
            <form onChange={changeHandler}>
            <fieldset>
                <legend>Please select your class:</legend>
                <Flex justify = "flex-start" wrap="wrap">
                  {allClassOptions}
                </Flex>
                <div>
                <button type="submit">Submit</button>
                </div>
            </fieldset>
            </form>
        )
}

export default ClassChoice
