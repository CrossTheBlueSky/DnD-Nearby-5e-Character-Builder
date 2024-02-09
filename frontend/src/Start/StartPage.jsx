import WindowGrid from '../WindowGrid';
import StartNav from './StartNav';
import Characters from './Characters';

function StartPage(){

    return (
        <WindowGrid 
        nav={<StartNav/>}
        pane={<Characters/>}
        />

    )
}

export default StartPage;