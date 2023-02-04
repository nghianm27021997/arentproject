import { motion } from "framer-motion";

import "./mealhistory.scss";

type Content = {
  image: string;
  desciption: string;
  title?: string;
  hashtag?: string[];
};

type Props = {
  ListData: Content[];
};

const MealHistory = ({ ListData }: Props) => {
  return (
    <div className='mealhistory'>
      {ListData.map((item: Content, index) => (
        <motion.div
          className='meal-content'
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, zIndex: 100 }}
        >
          <motion.img src={item.image} alt='meal' />
          <p className='desciption'>{item.desciption}</p>
          {item.title ? <p className='title'>{item.title}</p> : ""}

          {item.hashtag && item.hashtag?.length > 0 ? (
            <div className="hashtag-box">
              {item.hashtag?.map((item, index) => (
                <p className='hashtag' key={index}>{item}</p>
              ))}
            </div>
          ) : (
            ""
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MealHistory;
