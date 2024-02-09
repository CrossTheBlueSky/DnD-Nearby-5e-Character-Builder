
import {Button} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setFeatChoice} from './featChoiceSlice'

        

function FeatChoice(props){

    const dispatch = useDispatch()
    const FeatData = useSelector((state) => state.allFeatData.feats[0].feat)
    const FeatChoice = useSelector((state) => state.feat.feat)

    const allFeatCheckboxes = FeatData.map((FeatOption) => {
        if (FeatChoice.includes(FeatOption.name)){
            return (
                <div key={FeatOption.name}>
                <input type="checkbox" name={FeatOption.name} className='featChoice' value={FeatOption.name} defaultChecked/>
                <label htmlFor={FeatOption.name}>{FeatOption.name}</label>
                <Button onClick={()=>descriptionPopulator(FeatOption)} mx=".5rem" h="1rem" size="compact-xs"type="button">?</Button>
                </div>
            )
        }else{
        return (
            <div key={FeatOption.name}>
            <input type="checkbox" name={FeatOption.name} className='featChoice' value={FeatOption.name}/>
            <label htmlFor={FeatOption.name}>{FeatOption.name}</label>
            <Button onClick={()=>descriptionPopulator(FeatOption)} mx=".5rem" h="1rem" size="compact-xs"type="button">?</Button>
            </div>
        )
    }})

    function descriptionPopulator(feat){
        props.setHeading(feat.name)
        props.setDescription(feat.entries[0])

    }

    function changeHandler(){

       const chosenFeats = document.querySelectorAll('.featChoice:checked')
       const featsArr = []
       chosenFeats.forEach((feat) => {
              featsArr.push(feat.value)
       })

       dispatch(setFeatChoice(featsArr))

    }


        return (
            <form onChange={changeHandler}>
                <div id="feat-choice">
                {allFeatCheckboxes}
                </div>
            </form>
        )
}

export default FeatChoice
