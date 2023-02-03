import "./mealhistory.scss";
import { MEAL_HISTORY_CONTENT } from "../../../constant";
import { motion } from "framer-motion";

const MealHistory = () => {
  return (
    <div className='mealhistory'>
      {MEAL_HISTORY_CONTENT.map((item, index) => (
        <motion.div
          className='meal-content'
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, zIndex: 100 }}
        >
          <motion.img src={item.image} alt='meal' />
          <p>{item.desciption}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MealHistory;
