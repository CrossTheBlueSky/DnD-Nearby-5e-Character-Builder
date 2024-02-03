import WindowGrid from '../WindowGrid';
import BuildNav from './BuildNav';
import BuildChoicePane from './BuildChoicePane';

function BuildPage(){

    return (
        <WindowGrid nav={<BuildNav/>} choice={<BuildChoicePane/>}/>

    )
}

export default BuildPage;