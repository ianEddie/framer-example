import { useRef } from 'react';
import bg from '../assets/hero-background.jpg';
import image from '../assets/hero-image.webp';
import { motion, useScroll, useTransform } from 'framer-motion';
import Title from './Title';
import Text from './Text';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '300%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-200%']);
  return (
    <section
      ref={ref}
      className='relative h-screen w-full overflow-hidden'
    >
      <Title titleY={titleY} />
      <Text textY={textY} />
      <motion.div
        className='absolute top-0 inset-0 z-0'
        style={{
          y: backgroundY,
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center ',
          backgroundSize: 'cover'
        }}
      />
      <div
        className='absolute bottom-0 inset-0 z-10'
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center ',
          backgroundSize: 'cover'
        }}
      />
    </section>
  );
}
