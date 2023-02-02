import "./navigation.scss";
import Logo from "../../assets/Navigation/logo-navigation.png";
import IconMemo from "../../assets/Navigation/icon_memo.png";
import IconChallenge from "../../assets/Navigation/icon_challenge.png";
import IconInfo from "../../assets/Navigation/icon_info.png";
import IconInfoCount from "../../assets/Navigation/info_count.png";
import IconMenu from "../../assets/Navigation/icon_menu.png";

const Navigation = () => {
  return (
    <div className='navigation'>
      <img src={Logo} alt='logo' />
      <ul>
        <li>
          <img src={IconMemo} alt='icon-memo' /> <span>自分の記録</span>
        </li>
        <li>
          <img src={IconChallenge} alt='icon-challenge' />
          <span>チャレンジ</span>
        </li>
        <li>
          <div className="iconContent">
            <img src={IconInfo} alt='icon-meminfoo' />
            <img className="subIcon" src={IconInfoCount} alt='icon-infocount' />
          </div>
          <span>お知らせ</span>
        </li>
        <li>
          <img src={IconMenu} alt='icon-menu' />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
