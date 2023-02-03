import { motion } from "framer-motion";

import "./diary.scss";

const Diary = () => {
  const listData = new Array([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div className='my-diary' id='mydiary'>
      <p>MY DIARY</p>
      <div className='list-diary'>
        {listData[0].map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>2021.05.21</p>
            <p>23:25</p>
            <p>
              私の日記の記録が一部表示されま
              <br />
              す。
              <br />
              テキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキスト…
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
