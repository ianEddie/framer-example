import { useRef, useState } from 'react';
import { HEADER_DATA } from './header-data';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.header
      variants={{
        hidden: {
          y: '-85%'
        },
        visible: {
          y: '0%'
        }
      }}
      whileHover='visible'
      onFocusCapture={() => setIsHidden(false)}
      transition={{ duration: 0.2 }}
      animate={isHidden ? 'hidden' : 'visible'}
      className='fixed top-0 flex gap-x-10 py-3 px-10 rounded-b-3xl bg-white border border-stone-300 z-30'
    >
      {HEADER_DATA.map(({ name }) => (
        <a
          key={name}
          href='/'
          className='rounded-lg border border-neutral-300 px-4 py-px uppercase text-sm font-medium'
        >
          {name}
        </a>
      ))}
    </motion.header>
  );
}
