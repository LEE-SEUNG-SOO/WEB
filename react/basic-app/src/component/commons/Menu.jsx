export function Menu({href, menuName, style, isIcon, icon}){
    return(
        <a href={href}
            className="menu-item"
            style={{
                width:style.w,
                height:style.h,
                backgroundColor:style.bg,
                color:style.color,
                fontSize:style.fs
            }}>{isIcon === "true" ? icon : ""}{menuName}</a>
    )
}