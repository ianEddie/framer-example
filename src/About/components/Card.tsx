import styles from '../styles/about.module.css';
export default function Card({ data }: any) {
  return (
    <div
      key={data.id}
      className={styles.card}
    >
      <span>
        <data.icon />
      </span>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </div>
  );
}
