import AchivementImage from "../../../assets/Achievement/d01.jpg";
import AchivementRate from "../../../assets/Achievement/achivementrate.png";
import Chart from "../Chart";
import ChartImage from "../../../assets/Chart/main_graph.png";
import { motion } from "framer-motion";

import "./achievement.scss";

const Achievement = () => {
  return (
    <div className='achievement'>
      <div className='achievement-rate'>
        <motion.img
          src={AchivementImage}
          alt='Achivement'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={AchivementRate}
          alt='Achivement-rate'
        />
      </div>

      <div className='achievement-chart'>
        <Chart src={ChartImage} />
      </div>
    </div>
  );
};

export default Achievement;
