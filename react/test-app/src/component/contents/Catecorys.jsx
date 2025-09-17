import { useState } from "react"

export function Catecorys(){
    const catecorys = [
        { "title":"All", "value":"8" },
        { "title":"Front-end", "value":"4" },
        { "title":"Back-end", "value":"2" },
        { "title":"Mobile", "value":"2" }
    ]

    const [style, setStyle] = useState('All');

    const click = (text) => {
        setStyle(text);
    }

    return(
        <ul class="work-catecorys">
            { catecorys &&
                catecorys.map( category => <Category data={category}
                    style = { category.title === style ? "category selected" : "category" }
                    click={click}
                />)
            }
        </ul>
    )
}

export function Category({data, style, click}){
    return(
        <li>
            <button class={style} onClick={ () => click(data.title) }>{data.title}
                <span class="category-count">{data.value}</span>
            </button>
        </li>
    )
}