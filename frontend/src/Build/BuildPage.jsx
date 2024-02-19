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
import DescriptionPane from '../DescriptionPane';


function BuildPage(){

    const [description, setDescription] = React.useState("This is a description")
    const [heading, setHeading] = React.useState("Description")

    const [renderedTab, setRenderedTab] = React.useState(<ClassChoice/>)

    const buildTab = useSelector((state) => state.buildTab.buildTab)

    React.useEffect(() => {

        if(buildTab === "Class"){
            setRenderedTab(<ClassChoice setHeading={setHeading} setDescription={setDescription}/>)
        }else if(buildTab === "Race"){
        setRenderedTab(<RaceChoice setHeading={setHeading} setDescription={setDescription}/>)
        }else if(buildTab === "Background"){
        setRenderedTab(<BackgroundChoice setHeading={setHeading} setDescription={setDescription}/>)
        }else if(buildTab === "Skills"){
        setRenderedTab(<SkillChoice setHeading={setHeading} setDescription={setDescription}/>)}
        else if(buildTab === "Feats"){
        setRenderedTab(<FeatChoice setHeading={setHeading} setDescription={setDescription}/>)}
        else if(buildTab === "Ability Scores"){
        setRenderedTab(<AbilityScoreChoice setHeading={setHeading} setDescription={setDescription}/>)
        }
    }, [buildTab])





    return (
        <WindowGrid nav={<BuildNav/>} 
        pane={<BuildChoicePane tab={renderedTab} bg="transparent"/>} 

        description={<DescriptionPane heading={heading} description={description}/>}
        />

    )
}

export default BuildPage;