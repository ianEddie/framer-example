import { motion, useInView } from 'framer-motion';
import image from '../assets/image.jpg';
import { CARDS_DATA } from '../data/cards-data';
import Card from './Card';
import { useRef } from 'react';

export default function SecondarySection() {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { amount: 0.5 });
  const cardAnimation = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };
  const imageAnimation = {
    hidden: {
      opacity: 0,
      x: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };
  return (
    <article className='w-full h-[70dvh] flex gap-3'>
      <motion.div
        ref={targetRef}
        variants={cardAnimation}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 1 }}
        className='w-[40%] flex flex-col justify-center gap-3 '
      >
        {CARDS_DATA.map((item) => (
          <Card data={item} />
        ))}
      </motion.div>
      <motion.picture
        ref={targetRef}
        variants={imageAnimation}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 1 }}
        className='w-[60%] h-full flex'
      >
        <img
          src={image.src}
          alt='Image'
          width={image.width}
          height={image.height}
          className='object-cover rounded-xl '
        />
      </motion.picture>
    </article>
  );
}
