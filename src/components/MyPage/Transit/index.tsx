import DetailTransit from "./detail";
import { TRANSIT_CONTENT } from "../../../constant";
import { motion } from "framer-motion";

import "./transit.scss";

const TransitComponent = () => {
  return (
    <motion.div
      className='transit'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {TRANSIT_CONTENT.map((item, index) => (
        <div key={index}>
          <DetailTransit transitLogo={item.icon} description={item.content} />
        </div>
      ))}
    </motion.div>
  );
};

export default TransitComponent;
