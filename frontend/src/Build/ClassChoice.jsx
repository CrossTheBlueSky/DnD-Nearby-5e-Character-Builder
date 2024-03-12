
import {clampUseMovePosition, useDisclosure} from '@mantine/hooks'
import {Flex, Modal, Button, ScrollArea} from '@mantine/core'
import {useToggle} from '@mantine/hooks'
import {useSelector, useDispatch} from 'react-redux'
import {setClassChoice} from './classChoiceSlice'
import React, {useState, useEffect} from 'react'
import { popGraphicsState } from 'pdf-lib'
import {setBuildTab} from './buildTabSlice';
        

function ClassChoice(props){

    const dispatch = useDispatch()
    const classData = useSelector((state) => state.allClassData.classes)
    const classChoice = useSelector((state) => state.class.class)
    const currentClass = classData.filter((classOption) => classOption.class[0].name === classChoice)
    const [features, setFeatures] = useState([])
    const [opened, { open, close }] = useDisclosure(false);
    const [followups, setFollowups] = useState([])
    const [value, toggle] = useToggle(['blue', 'goldenrod'])

    React.useEffect(() => {
        if(props.setDescription){
        descriptionHandler(classData.filter((classOption) => classOption.class[0].name === classChoice))}}, [])
  
    const allClassOptions = classData.map((classOption) => {
        if (classChoice === classOption.class[0].name){
            return (
                <div key={classOption.class[0].name}>
                    <input type="radio" id={classOption._id} name="class-choice" value={classOption.class[0].name} defaultChecked/>
                    <label htmlFor={classOption._id}>{classOption.class[0].name}</label>
                </div>
            )
        }else{
        return (
            <div key={classOption.class[0].name}>
                <input type="radio" id={classOption._id} name="class-choice" value={classOption.class[0].name} />
                <label htmlFor={classOption._id}>{classOption.class[0].name}</label>
            </div>
        )}})



    function changeHandler(){
       const chosenClass = document.querySelector('input[name="class-choice"]:checked').value
       dispatch(setClassChoice(chosenClass))
            const describedClass = classData.filter((classOption) => classOption.class[0].name === chosenClass)
            descriptionHandler(describedClass)
            
 
    }

    function descriptionHandler(describedClass){
            const hitDie = <div>
                <p><strong>Hit Die: d{describedClass[0].class[0].hd.faces}</strong></p>
            </div>

        if (describedClass[0]){
            //Artificer has a different fluff array than the other classes. It's the ONLY ONE THAT DOES THIS
            if(describedClass[0].class[0].name === "Artificer"){
            props.setDescription(<>{
                hitDie}{
                describedClass[0].class[0].fluff[0].entries[0]
                }<br/><Button onClick={open}>Class Features</Button></>)
            props.setHeading(describedClass[0].class[0].name)
            featuresPopulate(describedClass)
            }else{
                props.setDescription(<>{hitDie}{describedClass[0].class[0].fluff[1].entries[1]}<br/><Button onClick={open}>Class Features</Button></>)
                props.setHeading(describedClass[0].class[0].name)
                featuresPopulate(describedClass)
            }
        }


    }

    function featuresPopulate(chosenClass){

        const selectedFeatures = chosenClass[0].classFeature
        let count = 0
        const allFeatures = selectedFeatures.map((feature) => {
            count++
            return (
                <div key={feature.name + count}>
                    <h3>{feature.name}</h3>
                    <p>{feature.entries[0]}</p>
                </div>
            )
        })

        setFeatures(allFeatures)
    }


    function followupChoices(){
        const equipmentChoices = currentClass[0].class[0].startingEquipment
        const proficiencyChoices = currentClass[0].class[0].startingProficiencies

        console.log(proficiencyChoices)
        console.log(equipmentChoices.goldAlternative)
        let equipChoiceCount = 0

        const equipFollow = equipmentChoices.default.map((choice) => {
            const option1= choice.split(" or ")[0]
            const option2= choice.split(" or ")[1]
 
                if(option1 && !option2){
                return (
                    <div key={choice}>
                        {choice}
                    </div>
                )}else if (option2){
                    equipChoiceCount++
                return (
                    <div key={choice} style={{margin: ".3rem 0"}}>
                        <input type="radio" id={option1} name={"equipment-choice"+equipChoiceCount} value={option1}/>
                        <label htmlFor={option1}>{option1 + " "}</label>
                        <strong>or</strong>
                        <input type="radio" id={option2} name={"equipment-choice"+equipChoiceCount} value={option2}/>
                        <label htmlFor={option2}>{" "+ option2}</label>
                    </div>

                )}}
                )

        

        if(value === 'goldenrod'){
        setFollowups(<>

            <fieldset>
                <legend>Select Starting Equipment:</legend>
                
                <Flex justify="flex-start" wrap="wrap">
                    {equipFollow}
                </Flex>
            </fieldset>
                    </>)} else{
                        setFollowups(<>
                            <fieldset>
                                <legend>Starting Gold:</legend>
                                <p>{equipmentChoices.goldAlternative}</p>
                            </fieldset>
                        </>)}
    }

    

        return (
            <>
            <form onChange={changeHandler}>
            <fieldset>
                <legend>Please select your class:</legend>
                <Flex justify = "flex-start" wrap="wrap">
                  {allClassOptions}
                </Flex>
            </fieldset>

            {classChoice && <div>Start with <Button color={value} onClick={() => {
                toggle()
                followupChoices()
                }}>
            {value === 'blue' ? 'Equipment' : 'Gold'}
             </Button>
                {classChoice && followups}
             </div>
             
             }
            {/* {followups} */}

            </form>
            <Modal opened={opened} h={600} onClose={close} title="Class Features" centered scrollAreaComponent={ScrollArea.Autosize}>
                    {features}              
            </Modal>
            </>
        )
}

export default ClassChoice
