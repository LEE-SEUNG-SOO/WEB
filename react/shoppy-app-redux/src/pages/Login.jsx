import { useState, useRef, useContext } from "react"
import { FaUser, FaLock } from "react-icons/fa";
import { validateFormCheck } from "../utils/validate.js";
import { useAuth } from "../hooks/useAuth.js";

export function Login(){
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const [formData, setFormData] = useState({});
    const [text, setText] = useState({'id':'', 'pwd':''});
    const { checkUser } = useAuth();

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        if(validateFormCheck(idRef, pwdRef, setText)){
            checkUser(formData.id, formData.pwd, idRef);
        }
    }

    const handleFormChange = (e) => {
        const {name, value}= e.target;
        setFormData({...formData, [name]:value});
        setText({...text, [name]:''});
    }

    return(
        <div className="content">
        <div className="center-layout login-form">
            <h1 className="center-title">로그인</h1>
            <form onSubmit={handleLoginSubmit}>
                <ul>
                    <li>
                        <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <FaUser />
                            <input type="text" 
                                    name="id" 
                                    value={formData.id} 
                                    ref={idRef} 
                                    onChange={handleFormChange} 
                                    placeholder="아이디를 입력해주세요"/>
                        </div>
                        <span>{text.id}</span>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <FaLock />
                            <input type="password" 
                                    name="pwd" 
                                    value={formData.pwd} 
                                    ref={pwdRef} 
                                    onChange={handleFormChange} 
                                    placeholder="비밀번호를 입력해주세요"/>
                        </div>
                        <span>{text.pwd}</span>
                    </li>
                    <li>
                        <button className="btn-main-color" type="submit">로그인</button>
                    </li>
                    <li>
                        <div>
                            <input type="checkbox" name="status"/>
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a> 
                            <span>&gt;</span>
                            <a href="#">비밀번호 찾기</a> 
                            <span>&gt;</span>
                        </div>
                    </li>
                    <li>
                        <button className="btn-main-color-naver">네이버 로그인</button>
                    </li>
                </ul>
                <div>
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt=""/>
                </div>
            </form>
        </div>
    </div>
    )
}