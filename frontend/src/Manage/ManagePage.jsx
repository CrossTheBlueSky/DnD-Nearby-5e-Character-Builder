import WindowGrid from '../WindowGrid';
import ManageNav from './ManageNav';
import DetailsPane from './DetailsPane';
function ManagePage(){

    return (
        <WindowGrid nav={<ManageNav/>} choice={<DetailsPane/>}/>

    )
}

export default ManagePage;