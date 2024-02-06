import {Box} from '@mantine/core'
import React from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'

function DescriptionPane(){

    //location.pathname will be the current path
    const location = useLocation()
    const classChoice = useSelector((state) => state.class.class)
    const allClasses = useSelector((state) => state.allClassData.classes)
    const buildTab = useSelector((state) => state.buildTab.buildTab)
    const [description, setDescription] = React.useState("This is a description")
    const [heading, setHeading] = React.useState("Description")

    React.useEffect(() => {
        descriptionSetter()
    },[classChoice, location.pathname])

    function descriptionSetter(){
    if(location.pathname === "/"){
        return(
        <Box h="100%" bg="violet.9" className="description-pane">
            <h3>Description</h3>
            <p>
                This is a description
            </p>
        </Box>)
    }else if(location.pathname === "/build"){
        const describedClass = allClasses.filter((classOption) => classOption.name === classChoice)
        if (describedClass[0]){
            if(describedClass[0].name === "Artificer"){
            setDescription(describedClass[0].fluff[0].entries[0])
            setHeading(describedClass[0].name)
            }else{
                setDescription(describedClass[0].fluff[1].entries[1])
                setHeading(describedClass[0].name)
                console.log(buildTab)
            }
        }

        return(
        <Box h="100%" bg="violet.9" className="description-pane">
            <h3>{classChoice}</h3>
            <p>
                {description}
            </p>
        </Box>)

        }
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