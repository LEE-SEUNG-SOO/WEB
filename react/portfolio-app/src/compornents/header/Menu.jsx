export function Menu({href, style, text, click}){
    return(
        <a href={href} className={style}
        onClick={() => { click(text) }}>{text}</a>
    );
}