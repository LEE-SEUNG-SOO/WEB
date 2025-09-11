import './css/Menu.css';
import { HeaderLeft } from './component/menus/HeaderLeft.jsx';

export function App(){
    return(
        <div style={{"display":"flex"}}>
            <HeaderLeft />
        </div>
    );
}