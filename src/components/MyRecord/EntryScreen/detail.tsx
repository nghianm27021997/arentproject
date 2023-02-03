import { motion } from "framer-motion";

import "./detail.scss";

type Props = {
  item: ItemBody;
};

type ItemBody = {
  image: string;
  description: string;
  content: string;
  link: string;
};

const DetailEntryScreen = ({ item }: Props) => {
  return (
    <motion.div
      className='detail-entry-screen'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={item.image} alt='detail'></img>
      <div>
        <p>{item.description}</p>
        <motion.p whileHover={{ scale: 1.2 }}>
          <a href={item.link}>{item.content}</a>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default DetailEntryScreen;
