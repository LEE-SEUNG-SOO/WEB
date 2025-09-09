
// export function MyButton(props){ // props = {name:"회원가입"} 으로 설정
//     return(
//         <button type={props.type} className={props.className}>{props.name}</button>
//     );
// }
export function MyButton({name, type, className, handleProps}){
    const handleClick = ()=> {
        console.log(`(자식)버튼 클릭!------> ${name}`);
        handleProps(`버튼 클릭!------> ${name}`);
    };

    return(
        <button type={type} 
        className={className}
        onClick={handleClick}>{name}</button>
        // onClick={handleClick()}>{name}</button> handleClick()으로 실행하게되면 클릭한것처럼 인식
    );
}
// export function MyButton({name}){ // {name}으로 설정할 경우 구조 분해 할당으로 설정
//     return(
//         <button type={type} class="mybutton">{name}</button>
//     );
// }