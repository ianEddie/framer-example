import styles from '../styles/about.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <span>colcl</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='M12 2c-.89 2.18-1.43 3.61-2.42 5.73c.61.64 1.35 1.39 2.56 2.24c-1.3-.54-2.19-1.07-2.85-1.63C8 11 6.03 14.75 2 22c3.17-1.83 5.63-2.96 7.92-3.39c-.1-.42-.16-.88-.15-1.36v-.1c.05-2.03 1.11-3.59 2.36-3.48c1.25.1 2.22 1.83 2.17 3.87c-.01.38-.05.75-.12 1.09c2.26.44 4.69 1.56 7.82 3.37c-.62-1.14-1.17-2.16-1.69-3.13c-.81-.64-1.7-1.48-3.46-2.37c1.21.3 2.08.66 2.76 1.07C14.26 7.62 13.83 6.3 12 2'
        ></path>
      </svg>
    </div>
  );
}
