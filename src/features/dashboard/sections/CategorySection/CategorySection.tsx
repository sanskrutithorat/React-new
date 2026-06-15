import styles from "./CategorySection.module.scss";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: "📱",
  },
  {
    id: 2,
    name: "Fashion",
    icon: "👕",
  },
  {
    id: 3,
    name: "Home",
    icon: "🏠",
  },
  {
    id: 4,
    name: "Beauty",
    icon: "💄",
  },
  {
    id: 5,
    name: "Sports",
    icon: "⚽",
  },
  {
    id: 6,
    name: "Books",
    icon: "📚",
  },
];

const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      <div className="container">
        <div className={styles.header}>
          <h2>Shop By Category</h2>
        </div>

        <div className={styles.categoryList}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={styles.categoryCard}
            >
              <div className={styles.icon}>
                {category.icon}
              </div>

              <h6>{category.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;