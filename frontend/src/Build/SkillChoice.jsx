
import {Flex} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setSkillChoice} from './skillChoiceSlice'

        

function SkillChoice(){

    const dispatch = useDispatch()
    const SkillData = useSelector((state) => state.allSkillData.skills[0])
    const SkillChoice = useSelector((state) => state.skill.skill)
    const allSkillOptions = SkillData.map((SkillOption) => {
        return (
            <div key={SkillOption.page + SkillOption.source + SkillOption.name}>
                <input type="radio" id={SkillOption.id} name="Skill-choice" value={SkillOption.name}/>
                <label htmlFor={SkillOption.id}>{SkillOption.name}</label>
            </div>
        )})


    function changeHandler(){
       const chosenSkill = document.querySelector('input[name="Skill-choice"]:checked').value

       dispatch(setSkillChoice(chosenSkill))
    }

        return (
            <form onChange={changeHandler}>
            <fieldset>
                <legend>Please select your skills:</legend>
                <Flex justify = "flex-start" wrap="wrap">
                  {allSkillOptions}
                </Flex>
                <div>
                {/* <button type="submit">Submit</button> */}
                </div>
            </fieldset>
            </form>
        )
}

export default SkillChoice
