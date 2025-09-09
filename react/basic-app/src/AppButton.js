import { MyButton } from "./component/MyButton.jsx";
import './App.css';

export function App(){
    // function handleProps(){};
    // const handleProps = function() {};
    const handleProps = (result) => {
        console.log(`(부모)result --->`, result);
    };

    return(
        <div>
            <MyButton name="Button #1" type="button" className="button" handleProps={handleProps}/>
            <MyButton name="Button #2" type="button" className="button" handleProps={handleProps}/>
        </div>
    );
}