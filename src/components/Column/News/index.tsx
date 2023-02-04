import { NEWS_LIST } from "../../../constant";
import MealHistory from "../../MyPage/MealHistory";

import "./news.scss";

const News = () => {
  return (
    <div className='news'>
      <MealHistory ListData={NEWS_LIST}/>
    </div>
  );
};

export default News;
