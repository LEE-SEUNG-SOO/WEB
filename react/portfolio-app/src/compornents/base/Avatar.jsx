export function AvatarImage({src, alt, style}){
    return(
        <img src={src} alt={alt} className={style} />
    );
}