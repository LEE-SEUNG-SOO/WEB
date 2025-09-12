import { useState, useRef } from "react";

export function UserInfo(){
    const initForm = {name:"", age:"", addr:""};
    const [form, setForm] = useState(initForm);
    const refs = { "name":useRef(null),
                    "age":useRef(null),
                    "addr":useRef(null) };

    // 전송
    const handleSubmit = (event) => {
        event.preventDefault();

        if(refs.name.current.value === ""){
            alert("name");
        } else if(refs.age.current.value === ""){
            alert("age");
        } else if(refs.addr.current.value === ""){
            alert("addr");
        }

        console.log('서버 연동 전송데이터 --> ', form);
    }

    // 입력
    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]:value}); // {} 쓰는 이유 : 오브젝트로 만들었기 때문에 사용. 만약 배열이였다면 []
    }
    
    // 취소
    const handleFormReset = () =>{
        setForm(initForm);
    }

    return(
        <div>
            <h1>UserInfo</h1>
            <form name="userInfo" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>이름 : </label>
                        <input type="text" name="name" onChange={handleChangeForm} value={form.name} ref={refs.name}/>
                    </li>
                    <li>
                        <label>나이 : </label>
                        <input type="text" name="age" onChange={handleChangeForm} value={form.age} ref={refs.age}/>
                    </li>
                    <li>
                        <label>주소 : </label>
                        <input type="text" name="addr" onChange={handleChangeForm} value={form.addr} ref={refs.addr}/>
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="button" onClick={handleFormReset}>취소</button>
                    </li>
                </ul>


            </form>
        </div>
    )
}