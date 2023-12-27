import styles from "./IndexImage.module.css";

const IndexImage = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src="indexImage.png"
        alt="image description"
      />
    </div>
  );
};

export default IndexImage;
