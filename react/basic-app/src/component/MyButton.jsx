
// export function MyButton(props){ // props = {name:"회원가입"} 으로 설정
//     return(
//         <button type={props.type} className={props.className}>{props.name}</button>
//     );
// }
export function MyButton({name, type, className}){ // props = {name:"회원가입"} 으로 설정
    return(
        <button type={type} 
        className={className}>{name}</button>
    );
}
// export function MyButton({name}){ // {name}으로 설정할 경우 구조 분해 할당으로 설정
//     return(
//         <button type={type} class="mybutton">{name}</button>
//     );
// }