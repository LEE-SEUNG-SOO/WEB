import { TextInput } from './TextInput.jsx';
import { useState } from 'react';

export function UserInfo2(){
    const forms = [
        {"label":"이름", "type":"text", "name":"name", "msg":"이름을 입력해주세요." },
        {"label":"나이", "type":"text", "name":"age", "msg":"나이를 입력해주세요." },
        {"label":"주소", "type":"text", "name":"addr", "msg":"주소를 입력해주세요." },
        {"label":"이메일", "type":"text", "name":"email", "msg":"이메일을 입력해주세요." },
        {"label":"취미", "type":"text", "name":"hobby", "msg":"취미를 입력해주세요." }
    ];

    const [formData, setFormData] = useState({name:"", age:"", addr:"", email:"", hobby:""}); 
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]:value})
    }

    console.log(formData);

    const formSubmit = () => {

    }

    return(
        <div>
            <h1>UserInfo2</h1>
            <form onSubmit={formSubmit}>
                <ul>
                {
                    !forms || forms.map( (item) => 
                        <li>
                            {/* <TextInput labe={item.label} type={item.type} name={item.name} msg={item.msg} /> */}
                            <TextInput item={item} handleChange={handleChangeForm} value={formData[item.name]}/>
                        </li>
                     )
                }
                </ul>    
            </form>      
        </div>
    );
}