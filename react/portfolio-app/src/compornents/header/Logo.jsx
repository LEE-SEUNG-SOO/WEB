import { AvatarImage } from "../base/Avatar";

export function Logo({img, name}){
    return(
        <div className="header-logo">
            <AvatarImage src={img} alt="header-logo" style="header-logo-img" />
            <h3 className="header-logo-text">{name}</h3>
        </div>
    );
}