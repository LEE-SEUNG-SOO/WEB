import { useState } from "react";

export function Counter({click, total}){
    const [number, setNumber] = useState(0); // 상태 변경시 변수값 변경설정

    const handleClickIncrement = () => {
       if(number < 10 ) {
            setNumber(number+1);
            click(1);
       }else {
           alert(`10이상증가불가`);
       }
    }
    const handleClickDecrement = () => {
        if(number > 0) {
            setNumber(number-1);
            click(-1);
        } else {
            alert(`0이하감소불가`);
        }
    }
    const handleClickReset = () => {
        setNumber(0);
        click(-number);
    }

    return (
        <div className="counter-container">
            <div>
                <span className="number">{number}</span>
                <span>/</span>
                <span className="total-number">{total}</span>
            </div>
            <div>
                <button type="button" onClick={handleClickIncrement}>더하기</button>
                <button type="button" onClick={handleClickDecrement}>빼기</button>
                <button type="button" onClick={handleClickReset}>초기화</button>
            </div>
        </div>
    );
}