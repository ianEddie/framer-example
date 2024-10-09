import { useRef } from 'react';
import Info from './Info';
import Logo from './Logo';
import Title from './Title';
import { motion, useInView } from 'framer-motion';
import styles from '../styles/about.module.css';

export default function MainSection() {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { amount: 0.4 });
  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };
  return (
    <motion.article
      ref={targetRef}
      variants={cardAnimation}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 1 }}
      className={styles.mainSection}
    >
      <Logo />
      <Title />
      <Info />
    </motion.article>
  );
}
