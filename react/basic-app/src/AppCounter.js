import { Counter } from "./component/Counter.jsx";
import { useState } from "react";
import './App.css';

// 자식 > 부모(누적합) > 자식(결과)

export function App(){
    const [total, setTotal] = useState(0);

    const click = (number) =>{ // 자식 컴포넌트의 클릭이벤트 결과 가져오기
        setTotal(total + number); // 1씩 증감
    }

    return(
        <>
            <h1>Counter Test</h1>
            <Counter click={click} total={total}/>
            <Counter click={click} total={total}/>
        </>
    );
}