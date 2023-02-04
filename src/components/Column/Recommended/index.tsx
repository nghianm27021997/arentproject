import { motion } from "framer-motion";
import { LIST_RECOMMENDED } from "../../../constant";

import "./recommended.scss";

const Recommended = () => {
  return (
    <div className='recommended'>
      {LIST_RECOMMENDED.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>{item.name}</p>
          <hr />
          <p>{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Recommended;
