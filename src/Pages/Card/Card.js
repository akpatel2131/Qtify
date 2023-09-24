import styles from "./Card.module.css";

export default function Card({ data, inFilter }) {
  
    return (
      <div className={styles.container} key={data.id}>
        <div className={styles.card}>
          <img src={data.image} alt="song" className={styles.image}/>
          <div className={styles.follow}>{inFilter ? `${data.likes} Likes` : `${data.follows} Follows`}</div>
        </div>
        <div className={styles.title}>{data.title}</div>
      </div>
    );
  }