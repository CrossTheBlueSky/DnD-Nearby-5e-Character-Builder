import {Badge} from '@mantine/core'
import {useSelector} from 'react-redux'

function MidParams(){

    const abilityScores = useSelector((state) => state.abilityScores.abilityScores)
    

    const allBadges = abilityScores ? Object.keys(abilityScores).map((key) => {
        return <Badge key={key}color="gray">{key}:{" " + abilityScores[key]}</Badge>
    }) : null

    return (<>
        {allBadges}
        </>
    )
}

export default MidParams