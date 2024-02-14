
import {Flex, Button, Affix} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setBackgroundChoice} from './backgroundChoiceSlice'
import React from 'react'
import {setBuildTab} from './buildTabSlice'

        

function BackgroundChoice(props){

    React.useEffect(()=>{
        if(document.querySelector('input[name="Background-choice"]:checked')){
        const userBackground = document.querySelector('input[name="Background-choice"]:checked').value
        const backgroundInfo = BackgroundData[0].filter((background) => background.name === userBackground)
        descriptionHandler(userBackground, backgroundInfo)
        }else{
            const userBackground = "Acolyte"
            const backgroundInfo = BackgroundData[0].filter((background) => background.name === userBackground)
            descriptionHandler(userBackground, backgroundInfo)
        }
    
    }, [])

    const dispatch = useDispatch()
    const BackgroundData = useSelector((state) => state.allBackgroundData.backgrounds)
    const BackgroundChoice = useSelector((state) => state.background.background)

    const allBackgroundOptions = BackgroundData[0].map((BackgroundOption) => {
        if(BackgroundOption.name.includes("Baldur") || BackgroundOption.source.includes("AL")){
            return null}
        else if (BackgroundChoice === BackgroundOption.name){
            return (
                <div key={BackgroundOption.name}>
                    <input type="radio" id={BackgroundOption.id} name="Background-choice" value={BackgroundOption.name} defaultChecked/>
                    <label htmlFor={BackgroundOption.id}>{BackgroundOption.name}</label>
                </div>
            )
        }else{
        return (
            <div key={BackgroundOption.name}>
                <input type="radio" id={BackgroundOption.id} name="Background-choice" value={BackgroundOption.name}/>
                <label htmlFor={BackgroundOption.id}>{BackgroundOption.name}</label>
            </div>
        )}})

    function descriptionHandler(userBackground, backgroundInfo){
        console.log(backgroundInfo)
        props.setHeading(backgroundInfo[0].name)
        if(backgroundInfo[0].entries){
               const description = backgroundInfo[0].entries.map((entry) => {
                 let subDescription
                 if(entry.type === "list"){
                     subDescription = entry.items.map((item) => {
                         return(
                             <div key={item.name}>
                             <p><strong>{item.name}</strong></p>
                             <p>{item.entry}</p>
                             </div>
                         )
                     })
                     return subDescription
                 }else{
                 return(
                      <div key={entry.name}>
                      <p><strong>{entry.name}</strong></p>
                      <p>{entry.entries[0]}</p>
                      </div>
                 )}})
               props.setDescription(description)
     }else if(backgroundInfo[0]._copy){
         const copiedBackground = BackgroundData[0].filter((background) => background.name === backgroundInfo[0]._copy.name)
         const description = copiedBackground[0].entries.map((entry) => {
             let subDescription
             if(entry.type === "list"){
                 subDescription = entry.items.map((item) => {
                    console.log("breaks in list")
                     return(
                         <div key={item.name}>
                         <p><strong>{item.name}</strong></p>
                         <p>{item.entry}</p>
                         </div>
                     )
                 })
                 return subDescription
             }else{
                console.log("breaks in final else")
             return(
                  <div key={entry.name}>
                  <p><strong>{entry.name}</strong></p>
                  <p>{entry.entries[0]}</p>
                  </div>
             )}})
           props.setDescription(description)}}

    


    function changeHandler(){
       const userBackground = document.querySelector('input[name="Background-choice"]:checked').value
       const backgroundInfo = BackgroundData[0].filter((background) => background.name === userBackground)
       dispatch(setBackgroundChoice(userBackground))
        descriptionHandler(userBackground, backgroundInfo)


    }

    

        return (
            <>
            <form onChange={changeHandler}>
            <fieldset>
                <legend>Please select your Background:</legend>
                <Flex justify = "flex-start" wrap="wrap">
                  {allBackgroundOptions}
                </Flex>
                <div>
                {/* <button type="submit">Submit</button> */}
                </div>
            </fieldset>
            </form>
            <Affix position={{bottom: 85, right: 100}}>
            <Button style={{position : "sticky"}} type="button" onClick={() => dispatch(setBuildTab("Ability Scores"))}>Next</Button>
            </Affix>
            </>
        )
}

export default BackgroundChoice
