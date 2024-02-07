
import {Flex} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setFeatChoice} from './featChoiceSlice'

        

function FeatChoice(){

    const dispatch = useDispatch()
    const FeatData = useSelector((state) => state.allFeatData.feats[0].feat)
    const FeatChoice = useSelector((state) => state.feat.feat)
    const allFeatOptions = FeatData.map((FeatOption) => {
        return (
            <div key={FeatOption.page + FeatOption.source + FeatOption.name}>
                <input type="radio" id={FeatOption.id} name="Feat-choice" value={FeatOption.name}/>
                <label htmlFor={FeatOption.id}>{FeatOption.name}</label>
            </div>
        )})


    function changeHandler(){
       const chosenFeat = document.querySelector('input[name="Feat-choice"]:checked').value

       dispatch(setFeatChoice(chosenFeat))
       console.log(FeatChoice)
    }

        return (
            <form onChange={changeHandler}>
            <fieldset>
                <legend>Please select your feat:</legend>
                <Flex justify = "flex-start" wrap="wrap">
                  {allFeatOptions}
                </Flex>
                <div>
                {/* <button type="submit">Submit</button> */}
                </div>
            </fieldset>
            </form>
        )
}

export default FeatChoice
