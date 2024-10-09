import MainSection from './MainSection';
import SecondarySection from './SecondarySection';
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <section className={styles.section}>
      <MainSection />
      <SecondarySection />
    </section>
  );
}
