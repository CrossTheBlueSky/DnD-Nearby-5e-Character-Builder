import axios from 'axios'
import React from 'react'
import CharacterCard from './CharacterCard'
import {useDispatch, useSelector} from 'react-redux'
import {setClassChoice} from '../Build/classChoiceSlice'
import {setRaceChoice} from '../Build/raceChoiceSlice'
import {setFeatChoice} from '../Build/featChoiceSlice'
import {setAbilityScoreChoice} from '../Build/abilityScoreChoiceSlice'
import {setBackgroundChoice} from '../Build/backgroundChoiceSlice'
import {setCharacterId} from '../currentCharacterIdSlice'
import {useNavigate } from 'react-router-dom'
import {Flex} from '@mantine/core'


function Characters(){

    const [characterList, setCharacterList] = React.useState([])
    const dispatch = useDispatch()
    const classChoice = useSelector((state) => state.class.class)
    React.useEffect(() => {
        updateCharacterList()

    }, [])
    const navigate = useNavigate()

    function updateCharacterList(){

        axios.get('http://localhost:5000/characters').then((response) => {
            setCharacterList(response.data)
        })

    }

    function loadHandler(character){

        dispatch(setClassChoice(character.class))
        dispatch(setRaceChoice(character.race))
        dispatch(setFeatChoice(character.feats))
        dispatch(setAbilityScoreChoice(character.abilityScores))
        dispatch(setBackgroundChoice(character.background))
        dispatch(setCharacterId(character._id))
        console.log(character)
        navigate('/build')
        

    }

    function deleteHandler(id){
        axios.delete(`http://localhost:5000/characters/`, {id: id})
        .then((response) => {
            console.log(response)
            updateCharacterList()
        })

    }

    const allCharacterCards = characterList.map((character) => {
        return (
            <CharacterCard character={character} id={character._id} key={character._id} load={loadHandler} delete={deleteHandler}/>)})



    return (
        <div style={{margin:"0", padding:"0"}}>
            <h3 style={{margin: "0", padding: "0"}}>Characters</h3>
            <Flex left gap="md">
            {allCharacterCards}
            </Flex>
        </div>
    )
    



}

export default Characters