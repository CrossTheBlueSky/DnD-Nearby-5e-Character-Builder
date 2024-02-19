
import {Button, Affix} from '@mantine/core'
import {useSelector, useDispatch} from 'react-redux'
import {setFeatChoice} from './featChoiceSlice'
import {setBuildTab} from './buildTabSlice'

        

function FeatChoice(props){

    const dispatch = useDispatch()
    const FeatData = useSelector((state) => state.allFeatData.feats[0].feat)
    const FeatChoice = useSelector((state) => state.feats.feats)

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
        const description = feat.entries.map((entry) => {
            if (entry.type === 'list'){
                let keyBase = entry.name
                let count = 0
                const subDescription = entry.items.map((subEntry) => {
                    count++
                    return <p key={keyBase+ `${count}`}>{subEntry}</p>
                })
                return subDescription
            }
            return entry})
        props.setDescription(description)

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
            <>
            <form onChange={changeHandler}>
                <div id="feat-choice">
                {allFeatCheckboxes}
                </div>
            </form>

            </>
        )
}

export default FeatChoice
