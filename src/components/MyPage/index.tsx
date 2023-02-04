import Achievement from "./Achievement";
import Transit from "./Transit";
import MealHistory from "./MealHistory";
import Button from "../Button";

import { MEAL_HISTORY_CONTENT } from "../../constant";

import "./mypage.scss";

const MyPage = () => {
  return (
    <div className='my-page'>
      <Achievement />
      <Transit />
      <div className="meal-history-box">
        <MealHistory ListData={MEAL_HISTORY_CONTENT} />
      </div>
      <Button text='記録をもっと見る' />
    </div>
  );
};

export default MyPage;
