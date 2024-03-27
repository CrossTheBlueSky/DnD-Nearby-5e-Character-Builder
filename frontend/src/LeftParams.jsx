import {Badge} from '@mantine/core'
import {useSelector} from 'react-redux'

function LeftParams(props){

    const abilityScores = useSelector((state) => state.abilityScores.abilityScores)
    const characterClass = useSelector((state) => state.class.class || null)
    const selectedClassDetails = useSelector((state) => state.allClassData.classes.filter((classOption) => classOption.class[0].name === characterClass))
    const raceAndSource = useSelector((state) =>state.race.race || null)
    const allRaces = useSelector((state) => state.allRaceData.races[0] || null )
    const selectedRaceDetails = allRaces ? allRaces.race.filter((race)=> race.name + " (" + race.source + ")" === raceAndSource) : null
    
    const hitDice = characterClass ? selectedClassDetails[0].class[0].hd.faces : null
    const conMod = Math.floor((abilityScores.constitution - 10) / 2)
    const hitPoints = hitDice + conMod
    const speed = raceAndSource ? selectedRaceDetails[0].speed : 30



    return (<div style={{marginLeft : ".25rem"}}>
        <Badge color="#16425B">HP: {hitPoints}</Badge>
        <Badge color="#16425B">Speed: {speed}</Badge>
        <Badge color="#16425B">Init:+3</Badge>
        <Badge color="#16425B">AC:16</Badge>
        </div>
    )
}

export default LeftParams;