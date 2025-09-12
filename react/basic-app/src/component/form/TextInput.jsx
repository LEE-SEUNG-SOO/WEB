export function TextInput({item, handleChange, value}){
    const {label, name, msg, type} = item;

    return(
        <div>
            <label>{label} : </label>
            <input type={type} name={name} placeholder={msg} onChange={handleChange} value={value}/>
            {/* <input type={type} name={name} placeholder={msg} onChange={ (e) => { handleChange(e) }}/> */}
        </div>
    )
}