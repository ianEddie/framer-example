import { motion, MotionValue } from 'framer-motion';

interface Props {
  titleY: MotionValue<string>;
}

export default function Title({ titleY }: Props) {
  return (
    <motion.h1
      style={{ y: titleY }}
      className='absolute top-10 left-5 font-bold uppercase text-[10rem] z-10'
    >
      Arch Studio
    </motion.h1>
  );
}
