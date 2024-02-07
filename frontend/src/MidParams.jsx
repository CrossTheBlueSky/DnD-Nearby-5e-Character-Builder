import {Badge} from '@mantine/core'
import {useSelector} from 'react-redux'

function MidParams(){

    const abilityScores = useSelector((state) => state.abilityScores.abilityScores)

    const allBadges = abilityScores ? Object.keys(abilityScores).map((key) => {
        return <Badge key={key}color="gray">{key}:{" " + abilityScores[key]}</Badge>
    }) : null

    return (<>
        {allBadges}
        {/* <Badge color="gray">Str:25</Badge>
        <Badge color="gray">Con:25</Badge>
        <Badge color="gray">Dex:25</Badge>
        <Badge color="gray">Int:25</Badge>
        <Badge color="gray">Wis:25</Badge>
        <Badge color="gray">Cha:25</Badge> */}
        </>
    )
}

export default MidParams