import { useState } from "react";

export function Counter({click, total, setTotal}){
    const [number, setNumber] = useState(0); // 상태 변경시 변수값 변경설정

    const handleClickIncrement = () => {
       if(number < 10 ) {
            setNumber(number+1);
            // click(1); // 부모의 click메소드실행으로 total값 변경
            setTotal(total+1); // 연계받은 setTotal의 함수를 자식이 사용해서 total값 변경
       }else {
           alert(`10이상증가불가`);
       }
    }
    const handleClickDecrement = () => {
        if(number > 0) {
            setNumber(number-1);
            // click(-1);
            setTotal(total-1);
        } else {
            alert(`0이하감소불가`);
        }
    }
    const handleClickReset = () => {
        setNumber(0);
        // click(-number);
        setTotal(total-number);
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