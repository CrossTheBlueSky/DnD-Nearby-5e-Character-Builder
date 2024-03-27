import {Badge} from '@mantine/core'
import {useSelector} from 'react-redux'

function LeftParams(props){

    const abilityScores = useSelector((state) => state.abilityScores.abilityScores)
    const characterClass = useSelector((state) => state.class.class)
    const selectedClassDetails = useSelector((state) => state.allClassData.classes.filter((classOption) => classOption.class[0].name === characterClass))
    const hitDice = selectedClassDetails[0].class[0].hd.faces
    const conMod = Math.floor((abilityScores.constitution - 10) / 2)
    const hitPoints = hitDice + conMod
    // console.log(selectedClassDetails[0].class[0].hd.faces) ---- Get the hit dice
    // console.log(findModifier(abilityScores.constitution)) ------ Get the modifier
    // const healthVal = selectedClassDetails[0].class[0].hd.faces + findModifier(abilityScores.constitution)  ---- Get the health value



    return (<div style={{marginLeft : ".25rem"}}>
        <Badge color="#16425B">HP: {hitPoints}</Badge>
        <Badge color="#16425B">Speed:30</Badge>
        <Badge color="#16425B">Init:+3</Badge>
        <Badge color="#16425B">AC:16</Badge>
        </div>
    )
}

export default LeftParams;