export function List({list}){
    return(
        <ul>
            { list &&
                list.map( data =>
                    <li>{data}</li>
                 )
            }
        </ul>
    )
}