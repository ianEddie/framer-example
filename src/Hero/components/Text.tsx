import { motion, MotionValue } from 'framer-motion';

interface Props {
  textY: MotionValue<string>;
}

export default function Text({ textY }: Props) {
  return (
    <motion.p
      style={{ y: textY }}
      className='absolute top-[45%] left-5 font-medium uppercase text-[1rem] z-10 max-w-[50%]'
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
      possimus eveniet porro, incidunt expedita numquam, ab cupiditate ratione,
      rerum ipsa sequi eos magnam quae deleniti consectetur cum esse voluptatem
      nihil.
    </motion.p>
  );
}
