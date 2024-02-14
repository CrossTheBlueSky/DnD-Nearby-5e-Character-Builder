
import {Button, Affix} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setSkillChoice} from './skillChoiceSlice'
import {setBuildTab} from './buildTabSlice'

        

function SkillChoice(props){

    const dispatch = useDispatch()
    const SkillData = useSelector((state) => state.allSkillData.skills[0])
    const SkillChoice = useSelector((state) => state.skills.skills)

    const allSkillCheckboxes = SkillData.map((SkillOption) => {

        if (SkillChoice.includes(SkillOption.name)){
            return (
                <div key={SkillOption.name}>
                <input type="checkbox" name={SkillOption.name} className='skillChoice' value={SkillOption.name} defaultChecked/>
                <label htmlFor={SkillOption.name}>{SkillOption.name}</label>
                <Button onClick={()=>descriptionPopulator(SkillOption)} mx=".5rem" h="1rem" size="compact-xs"type="button">?</Button>

                </div>
            )
        }else{
        return (
            <div key={SkillOption.name}>
            <input type="checkbox" name={SkillOption.name} className='skillChoice' value={SkillOption.name}/>
            <label htmlFor={SkillOption.name}>{SkillOption.name}</label>
            <Button onClick={()=>descriptionPopulator(SkillOption)} mx=".5rem" h="1rem" size="compact-xs"type="button">?</Button>
            </div>
        )
    }})

    function descriptionPopulator(skill){

        props.setHeading(skill.name)
        props.setDescription(skill.entries[0])

    }

    function changeHandler(){
       const chosenSkills = document.querySelectorAll('.skillChoice:checked')
       const skillsArr = []
       chosenSkills.forEach((skill) => {
              skillsArr.push(skill.value)
       })

       dispatch(setSkillChoice(skillsArr))

       console.log(SkillChoice)
    }

        return (
            <>
            <form onChange={changeHandler}>
                <div id="skill-choice">
                {allSkillCheckboxes}
                </div>
            </form>
            <Affix position={{bottom: 85, right: 100}}>
            <Button style={{position : "sticky"}} type="button" onClick={() => dispatch(setBuildTab("Feats"))}>Next</Button>
        </Affix>
        </>
        )
}

export default SkillChoice
