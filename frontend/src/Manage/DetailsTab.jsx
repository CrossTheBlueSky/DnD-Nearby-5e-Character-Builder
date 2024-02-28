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
        <Container fz=".75rem" justify="left">
            <h5 style={{margin: ".25rem"}}>Character Details</h5>
            <form onChange={changeHandler}>
            <label htmlFor="name">Character Name: </label>
            <input size="20" type="text" name="name" placeholder="Character Name" />
            <br/>
            <label htmlFor="age">Age: </label>
            <input type="text" name="age" placeholder="Age" />
            <br/>
            <label htmlFor="height">Height: </label>
            <input type="text" name="height" placeholder="Height" />
            <br/>
            <label htmlFor="weight">Weight: </label>
            <input type="text" name="weight" placeholder="Weight" />
            <br/>
            <label htmlFor="alignment">Alignment: </label>
            <input type="text" name="alignment" placeholder="Alignment" />
            <br/>
            <label htmlFor="player">Player Name: </label>
            <input type="text" name="player" placeholder="Player Name" />
            <br/>
            <label htmlFor="eyes">Eye Color: </label>
            <input type="text" name="eyes" placeholder="Eye Color" />
            <br/>
            <label htmlFor="hair">Hair Color: </label>
            <input type="text" name="hair" placeholder="Hair Color" />
            <br/>
            <label htmlFor="skin">Skin Color: </label>
            <input type="text" name="skin" placeholder="Skin Color" />
            <br/>
            </form>
        </Container>
        </>
        
    )
}

export default DetailsTab