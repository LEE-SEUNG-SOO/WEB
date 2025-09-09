export function Avatar({img, name}){
    return (
        <div className="avatar">
            <AvatarImage img={img} style="avatar-img-circle"/>
            <p>{name}</p>
        </div>
    )
}

export function AvatarList({AvatarList}){
    return (
        <div className="avatarList">
            {
                AvatarList.map( (item, index) => 
                <Avatar img={item.img} name={item.name} key={index}/>
                )
            }
        </div>
    )
}

export function AvatarImage({img, style}){
    return (
        // <img src="https://th.bing.com/th?id=ORMS.77d87d7df74620fff691ffb163e948a2&pid=Wdp&w=240&h=129&qlt=90&c=1&rs=1&dpr=1&p=0"></img>
        <img src={img} alt="img" className={style}></img>
    );
}

export function AvatarImageList({imgList}){
    return (
        imgList.map( (item,index) =>
            <AvatarImage img={item.img} style={item.style} key={index}/>
        )
    )
}