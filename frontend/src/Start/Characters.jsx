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
import {useNavigate} from 'react-router-dom'


function Characters(){

    const [characterList, setCharacterList] = React.useState([])
    const dispatch = useDispatch()
    const classChoice = useSelector((state) => state.class.class)
    const navigate = useNavigate()

    React.useEffect(() => {
        updateCharacterList()

    }, [])

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
        <div>
            <h1>Characters</h1>
            {allCharacterCards}
        </div>
    )
    



}

export default Characters