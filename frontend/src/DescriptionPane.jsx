import {Box} from '@mantine/core'
import React from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'

function DescriptionPane(){

    //location.pathname will be the current path
    const location = useLocation()
    const classChoice = useSelector((state) => state.class.class)
    const allClasses = useSelector((state) => state.allClassData.classes)
    // const allRaces = useSelector((state) => state.allRaceData.races)
    // const allBackgrounds = useSelector((state) => state.allBackgroundData.backgrounds)
    // const allSkills = useSelector((state) => state.allSkillData.skills)
    // const allFeats = useSelector((state) => state.allFeatData.feats)
    const buildTab = useSelector((state) => state.buildTab.buildTab)
    const [description, setDescription] = React.useState("This is a description")
    const [heading, setHeading] = React.useState("Description")

    React.useEffect(() => {
        descriptionSetter()
    },[classChoice, location.pathname])

    function descriptionSetter(){

    // home route. Should be tabbed to "Load" by default, with the choice pane showing 
    //previously made characters. "Create New" should point to the "Build tab"

    if(location.pathname === "/"){
        return(
        <Box h="100%" bg="violet.9" className="description-pane">
            <h3>Description</h3>
            <p>
                This is a description
            </p>
        </Box>)
    }
    
// build route and the tabs therein
//This should be refactored into a separate component but for now it's here

    else if(location.pathname === "/build"){

        //NESTED IF CHECKS BAYBEE. ONE FOR EACH TAB
        if(buildTab === "Class"){
            const describedClass = allClasses.filter((classOption) => classOption.name === classChoice)
            
            if (describedClass[0]){
                //Artificer has a different fluff array than the other classes. It's the ONLY ONE THAT DOES THIS
                if(describedClass[0].name === "Artificer"){
                setDescription(describedClass[0].fluff[0].entries[0])
                setHeading(describedClass[0].name)
                }else{
                    setDescription(describedClass[0].fluff[1].entries[1])
                    setHeading(describedClass[0].name)
                }}
        }else if(buildTab === "Race"){
            setHeading("Race Name Goes Here")
            setDescription("Race Traits go here")
        }else if(buildTab === "Background"){
            //background logic here
        }else if(buildTab === "Ability Scores"){
            //ability score logic here
        }else if(buildTab === "Skills"){
            //skills logic here
        }else if(buildTab === "Feats"){
            //feats logic here
        }else if(buildTab === "Retraining"){
            //retraining logic here
            //UNECESSARY FOR MVP
        }


        return(
        <Box h="100%" bg="violet.9" className="description-pane">
            <h3>{classChoice}</h3>
            <p>
                {description}
            </p>
        </Box>)

        }

        //Shop tab, which is NOT REQUIRED for mvp, so will not be focused on until after MVP is delivered
        }

        return(
            <Box h="100%" bg="violet.9" className="description-pane">
                <h3>{heading}</h3>
                <p>
                    {description}
                </p>
            </Box>)
    
}

export default DescriptionPane