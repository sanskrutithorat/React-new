import styles from "./FeaturesSection.module.scss";

const features = [
  {
    icon: "🚚",
    title: "Fast Delivery",
  },
  {
    icon: "🔒",
    title: "Secure Payment",
  },
  {
    icon: "↩️",
    title: "Easy Returns",
  },
  {
    icon: "📞",
    title: "24/7 Support",
  },
];

const FeaturesSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.icon}>
                {feature.icon}
              </div>

              <h5>{feature.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;