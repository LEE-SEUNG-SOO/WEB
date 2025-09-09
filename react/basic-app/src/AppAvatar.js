import './App.css';
import './css/Avatar.css';
import { Avatar, AvatarList, AvatarImage, AvatarImageList } 
    from './component/Avatar.jsx';
    
// return은 한그룹만 설정해서 보내기. (여러개를 보낼경우 하나의 그룹(div,<>)으로 묶을것.)
export function App() {
  const list = [
    { "img":"/images/people1.webp", "style":"avatar-img" },
    { "img":"/images/people2.webp", "style":"avatar-img-circle" },
    { "img":"/images/people3.webp", "style":"avatar-img" }
  ];
  const aList = [
    { "img":"/images/people1.webp", "name":"Tomato" },
    { "img":"/images/people2.webp", "name":"Ann" },
    { "img":"/images/people3.webp", "name":"john" }
  ];

  return (
    <>
      <AvatarImage img="/images/people1.webp" style="avatar-img-circle"/>
      <AvatarImage img="/images/people2.webp" style="avatar-img"/>
      <AvatarImage img="/images/people3.webp" style="avatar-img-circle"/>
      <hr></hr>
      <AvatarImageList imgList={list}/>
      <hr></hr>
      <div className="avatarList">
        <Avatar img="/images/people2.webp" name="tomato"/>
        <Avatar img="/images/people3.webp" name="John"/>
      </div>
      <hr></hr>
      <AvatarList AvatarList={aList}/>
      </>
  );
}