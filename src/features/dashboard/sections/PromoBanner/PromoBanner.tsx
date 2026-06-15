import styles from "./PromoBanner.module.scss";

const PromoBanner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.content}>
          <h2>Summer Sale</h2>
          <p>Up to 70% Off On Selected Products</p>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;