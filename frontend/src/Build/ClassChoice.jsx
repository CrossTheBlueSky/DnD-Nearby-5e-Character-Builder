import axios from "axios"
import React from "react"
import {Flex} from '@mantine/core'
import {useDispatch} from 'react-redux'
import {setClassChoice} from './classChoiceSlice'
import {setAllClassData} from './allClassSlice'
        

function ClassChoice(){

    const [classData, setClassData] = React.useState([])
    const dispatch = useDispatch()


        React.useEffect(() => {        
        axios.get('http://localhost:5000/classes')
        .then(response => {
            setClassData(response.data)
            dispatch(setAllClassData(response.data))})
    },[])

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
