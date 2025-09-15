import { useState, useRef } from "react";
import { validateLoginCheck } from "../../util/validate";


export function Login2(){
    const initForm = {id:'', pass:''}; 
    const refs = {
        idRef: useRef(null),
        passRef: useRef(null),
        idmsgRef: useRef(null),
        passmsgRef: useRef(null)
    }
    
    const [form, setForm] = useState(initForm); // 폼의 입력데이터 저장
    const [msg, setMsg] = useState(initForm);

    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value })
    }

    const handleResetForm = () => {
        setForm(initForm);
        setMsg(initForm);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // 브라우저(DOM객체) 이벤트 중지

        // validation 체크(유효성 체크)
        if(validateLoginCheck(refs, setMsg)){
            console.log("submit ==> ", form);
        } 
    }

    console.log(form);
    
    return(
        <>
            <h1>Login2</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디 : </label>
                        <input type="text"
                                name="id"
                                value={form.id}
                                ref={refs.idRef}
                                onChange={handleChangeForm} />
                        <span ref={refs.idmsgRef}>{msg.id}</span>
                    </li>
                    <li>
                        <label>패스워드 : </label>
                        <input type="text"
                                name="pass"
                                value={form.pass}
                                ref={refs.passRef}
                                onChange={handleChangeForm} />
                        <span ref={refs.passmsgRef}>{msg.pass}</span>
                    </li>
                    <li>
                        <button type="submit">Login</button>
                        <button type="button" onClick={handleResetForm}>reset</button>
                    </li>
                </ul>
            </form>
        </>
    );
}