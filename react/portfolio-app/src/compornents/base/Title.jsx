export function Title({title}){
    return(
        <h2 className="title">{title}</h2>
    );
}

export function SubTitle({subTitle}){
    return(
        <p class="description">{subTitle}</p>
    );
}



export function Description(style){
    return(
        <p className={style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum facere ad iusto quam saepe aperiam iure rem nostrum
                reiciendis reprehenderit recusandae quidem nesciunt,
                ipsa adipisci debitis tenetur. Provident, dolorum modi.
        </p>
    );
}

