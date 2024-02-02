import WindowGrid from '../WindowGrid';
import ShopNav from './ShopNav';
import ShopChoicePane from './ShopChoicePane';

function ShopPage(){

    return (
        <WindowGrid nav={<ShopNav/>} choice={<ShopChoicePane/>}/>

    )
}

export default ShopPage;