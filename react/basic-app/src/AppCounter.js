import { Counter } from "./component/Counter.jsx";
import { useEffect, useState } from "react";
import './App.css';

// 자식 > 부모(누적합) > 자식(결과)
export function App(){
    const [total, setTotal] = useState(0);
    const [init, setInit] = useState(0);

    const click = (number) =>{ // 자식 컴포넌트의 클릭이벤트 결과 가져오기
        setTotal(total + number); // 1씩 증감
    }
    // 값이 변경될때 마다 재호출
    useEffect( ()=>{
        setInit(0)
    }, [init]);

    // useEffect(콜백함수,  dependencies);
// useState의 set함수를 파라미터로 연계해도 가능 total의 값을 실시간 변경 가능.
    return(
        <>
            <h1>Counter Test</h1>
            <Counter click={click} total={total} setTotal={setTotal}/>
            <Counter click={click} total={total} setTotal={setTotal}/>
        </>
    );
}