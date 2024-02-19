import {Badge} from '@mantine/core'
import {useSelector} from 'react-redux'

function MidParams(){

    const abilityScores = useSelector((state) => state.abilityScores.abilityScores)
    

    const allBadges = abilityScores ? Object.keys(abilityScores).map((key) => {
        return <Badge mx="2rem" align="center" key={key} color="#16425B">{key.slice(0,3)}:{" " + abilityScores[key]}</Badge>
    }) : null

    return (<>
        {allBadges}
        </>
    )
}

export default MidParams