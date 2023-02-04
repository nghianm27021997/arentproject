import Logo from "../../assets/Navigation/logo-navigation.png";
import IconMemo from "../../assets/Navigation/icon_memo.png";
import IconChallenge from "../../assets/Navigation/icon_challenge.png";
import IconInfo from "../../assets/Navigation/icon_info.png";
import IconInfoCount from "../../assets/Navigation/info_count.png";
import IconMenu from "../../assets/Navigation/icon_menu.png";
import IconClose from "../../assets/Navigation/icon_close.png";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./navigation.scss";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;
  const [displaySubMenu, setDisplaySubmenu] = useState(false);

  const redirectPage = (value: string) => {
    navigate(value);
    setDisplaySubmenu(false);
  };

  return (
    <div className='navigation'>
      <img className="logo" src={Logo} alt='logo' onClick={() => redirectPage("/")} />
      <ul>
        <li onClick={() => redirectPage("myrecord")}>
          <img src={IconMemo} alt='icon-memo' />{" "}
          <span className={pathName.includes("myrecord") ? "active" : ""}>
            自分の記録
          </span>
        </li>
        <li>
          <img src={IconChallenge} alt='icon-challenge' />
          <span>チャレンジ</span>
        </li>
        <li>
          <div className='iconContent'>
            <img src={IconInfo} alt='icon-meminfoo' />
            <img className='subIcon' src={IconInfoCount} alt='icon-infocount' />
          </div>
          <span>お知らせ</span>
        </li>
        <li>
          {!displaySubMenu ? (
            <img
              src={IconMenu}
              alt='icon-menu'
              onClick={() => setDisplaySubmenu(!displaySubMenu)}
            />
          ) : (
            <img
              src={IconClose}
              alt='icon-close'
              onClick={() => setDisplaySubmenu(!displaySubMenu)}
            />
          )}
          <ul className={displaySubMenu ? "display" : "none"}>
            <li onClick={() => redirectPage("myrecord")}>自分の記録</li>
            <li>体重グラフ</li>
            <li>目標</li>
            <li>選択中のコース</li>
            <li onClick={() => redirectPage("column")}>コラム一覧</li>
            <li>設定</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
