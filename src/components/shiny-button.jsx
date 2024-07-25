// shiny-button.jsx
import { motion } from 'framer-motion';

const animationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

const ShinyButton = ({ children }) => (
  <motion.button {...animationProps} className="shiny-button bg-buttonRed text-white">
    {children}
  </motion.button>
);

export default ShinyButton;
