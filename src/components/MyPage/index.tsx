import Achievement from "./Achievement";
import Transit from "./Transit";
import MealHistory from "./MealHistory";
import Button from "../Button";

import "./mypage.scss";

const MyPage = () => {
  return (
    <div className='my-page'>
      <Achievement />
      <Transit />
      <MealHistory />
      <Button text="記録をもっと見る" />
    </div>
  );
};

export default MyPage;
