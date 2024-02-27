import WindowGrid from '../WindowGrid';
import React from 'react';
import ManageNav from './ManageNav';
import DetailsTab from './DetailsTab';
import LevelUpTab from './LevelUpTab';
import SummaryTab from './SummaryTab';
import ManageChoicePane from './ManageChoicePane';
import DescriptionPane from '../DescriptionPane';
import {useSelector} from 'react-redux';

function ManagePage(){

    const [renderedTab, setRenderedTab] = React.useState(<DetailsTab/>)
    const manageTab = useSelector((state) => state.manageTab.manageTab)

    React.useEffect(() => {

        if(manageTab === "Details"){
            setRenderedTab(<DetailsTab/>)
        }else if(manageTab === "Level Up"){
            setRenderedTab(<LevelUpTab/>)}
        else if(manageTab === "Summary"){
            setRenderedTab(<SummaryTab/>)}
    }, [manageTab])





    return (
        <WindowGrid nav={<ManageNav/>} 
        pane={<ManageChoicePane tab={renderedTab} bg="transparent"/>} 

        description={<DescriptionPane heading={<p>Placeholder</p>} description={<p>Placeholder</p>}/>}
        />

    )
}

export default ManagePage;