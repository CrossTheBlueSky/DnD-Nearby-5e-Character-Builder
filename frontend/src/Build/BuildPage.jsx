import WindowGrid from '../WindowGrid';
import BuildNav from './BuildNav';
import BuildChoicePane from './BuildChoicePane';
import React from 'react'
import {useSelector} from 'react-redux';
import ClassChoice from './ClassChoice';
import RaceChoice from './RaceChoice';
import BackgroundChoice from './BackgroundChoice';
import SkillChoice from './SkillChoice';
import FeatChoice from './FeatChoice';
import AbilityScoreChoice from './AbilityScoreChoice';


function BuildPage(){

    const [renderedTab, setRenderedTab] = React.useState(<ClassChoice/>)

    const buildTab = useSelector((state) => state.buildTab.buildTab)

    React.useEffect(() => {

        if(buildTab === "Class"){
            setRenderedTab(<ClassChoice/>)
        }else if(buildTab === "Race"){
        setRenderedTab(<RaceChoice/>)
        }else if(buildTab === "Background"){
        setRenderedTab(<BackgroundChoice/>)
        }else if(buildTab === "Skills"){
        setRenderedTab(<SkillChoice/>)}
        else if(buildTab === "Feats"){
        setRenderedTab(<FeatChoice/>)}
        else if(buildTab === "Ability Scores"){
        setRenderedTab(<AbilityScoreChoice/>)
        }
    }, [buildTab])



    return (
        <WindowGrid nav={<BuildNav/>} pane={<BuildChoicePane tab={renderedTab}/>} />

    )
}

export default BuildPage;