/**
 * onSubmit타입으로 설정.
 * action, method등은 핸들 처리
 */

import { useState, useRef } from "react"; 

export function Login(){
    // ReactDOM에서 DOM으로 레퍼런스하기 위한 설정
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const initForm = {id:"", password:""};
    const [form, setForm] = useState(initForm);

    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }    

    const handleSubmit = (event) => {
        event.preventDefault();        
        // const id = document.querySelector("#id").value;
        // console.log(id);
        // if(id === ""){
        //     alert("아이디 입력");
        //     document.querySelector("#id").focus();
        // }

        if(idRef.current.value === ""){
           alert("아이디 입력");
           idRef.current.focus();
        } else if(passwordRef.current.value === ""){
           alert("패스워드 입력");
           passwordRef.current.focus();
        }

        console.log('서버 연동 전송데이터 --> ', form);
    }

    const handleFormReset = () => {
        setForm(initForm);
    }

    return(
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit} name="login-form">
            <ul>
                <li>
                    <label>아이디 : </label>
                    <input type="text" name="id" id="id" value={form.id} ref={idRef}
                            onChange={handleChangeForm}/>
                </li>
                <li>
                    <label>패스워드 : </label>
                    <input type="password" name="password" value={form.password}  ref={passwordRef}
                            onChange={handleChangeForm}/>
                </li>
                <li>
                    <button type="submit">로그인</button>
                    <button type="reset"
                            onClick={handleFormReset}>취소</button>
                </li>
            </ul>

          </form>
        </div>
    )
}