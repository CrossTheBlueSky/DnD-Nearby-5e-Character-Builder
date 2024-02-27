import {Box, Container, Stack, rem} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setDetails} from './detailsSlice'


function DetailsTab(){

    const dispatch = useDispatch()
    const characterDetails = useSelector((state) => state.details.details)

    function changeHandler(e){
        const {name, value} = e.target
        dispatch(setDetails({...characterDetails, [name]: value}))
        console.log(characterDetails)
    }



    return (
        <>
        <Container  align="center">
            <h5 style={{margin: ".25rem"}}>Character Details</h5>
            <form onChange={changeHandler}>
            <input type="text" name="name" placeholder="Character Name" />
            <input type="text" name="gender" placeholder="Gender" />
            <input type="text" name="age" placeholder="Age" />
            <input type="text" name="height" placeholder="Height" />
            <input type="text" name="weight" placeholder="Weight" />
            <input type="text" name="alignment" placeholder="Alignment" />
            <input type="text" name="deity" placeholder="Deity (if any)" />
            <input type="text" name="company" placeholder="Adventuring Company" />
            <input type="text" name="player" placeholder="Player Name" />
            </form>
        </Container>
        </>
        
    )
}

export default DetailsTab