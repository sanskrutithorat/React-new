import styles from "./TestimonialsSection.module.scss";

const testimonials = [
  {
    name: "John",
    review: "Amazing shopping experience.",
  },
  {
    name: "Sarah",
    review: "Fast delivery and great quality.",
  },
  {
    name: "David",
    review: "Highly recommended.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>What Customers Say</h2>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <p>{item.review}</p>

              <h6>{item.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;