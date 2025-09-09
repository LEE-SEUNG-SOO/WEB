import logo from './logo.svg';
import './App.css';
import { MyTitle, MyTitle3 } from './component/MyTitle.jsx';
import { MyButton } from './component/MyButton.jsx';
import { Menu, Menu2, MenuList } from './component/Menu.jsx';
import { AvatarImage } from './component/AvatarImage.jsx';

// return은 한그룹만 설정해서 보내기. (여러개를 보낼경우 하나의 그룹(div)으로 묶을것.)
export function App() {
  const menu = {
    "title":"네이버",
    "color":"red",
    "bg":"yellow",
    "href":"https://www.naver.com"
  }

  const menus = [
  {
    "title":"네이버",
    "color":"red",
    "bg":"yellow",
    "href":"https://www.naver.com"
  },
  {
    "title":"구글",
    "color":"yellow",
    "bg":"green",
    "href":"https://www.naver.com"
  },
  {
    "title":"다음",
    "color":"blue",
    "bg":"tomato",
    "href":"https://www.naver.com"
  }
  ];

  return (
    <>
      <MyTitle />
      <MyTitle3 />
      <MyButton name = "회원가입" type="button" className = "button"/>
      <MyButton name = "로그인" type="submit" className = "submit"/>
      <MyButton name = "취소" type="reset" className = "reset"/>
      <hr/>
      <Menu href={menu.href} title={menu.title} color={menu.color} bg={menu.bg}/>
      <Menu2 data={menu}/>
      <hr/>
      <MenuList menus={menus}/>
      <AvatarImage imgurl="/images/people1.webp"/>
      <AvatarImage imgurl="/images/people2.webp"/>
      <AvatarImage imgurl="/images/people3.webp"/>
    </>
  );
}