import { motion } from "framer-motion";

type Props = {
  src?: string;
};

const Chart = ({ src }: Props) => {
  return (
    <div className='chart'>
      <motion.img
        src={src}
        alt='Achivement-rate'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Chart;
