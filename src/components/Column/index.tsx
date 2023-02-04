import Recommended from "./Recommended";
import News from "./News";
import Button from "../Button";

import "./column.scss";

const Column = () => {
  return (
    <div className='column-page'>
      <Recommended />
      <News />
      <Button text='コラムをもっと見る' />
    </div>
  );
};

export default Column;
