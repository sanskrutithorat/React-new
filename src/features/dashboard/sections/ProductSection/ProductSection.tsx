import styles from "./ProductSection.module.scss";
import { Button } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$129",
    image: "https://picsum.photos/300/300?1",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$249",
    image: "https://picsum.photos/300/300?2",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "$89",
    image: "https://picsum.photos/300/300?3",
  },
  {
    id: 4,
    name: "Backpack",
    price: "$59",
    image: "https://picsum.photos/300/300?4",
  },
];

const ProductSection = ({ title }) => {
  return (
    <section className={styles.productSection}>
      <div className="container">
        <div className={styles.header}>
          <h2>{title}</h2>

          <Button variant="link">
            View All
          </Button>
        </div>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <div
              key={product.id}
              className={styles.productCard}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className={styles.content}>
                <h6>{product.name}</h6>

                <div className={styles.bottom}>
                  <span>{product.price}</span>

                  <Button
                    size="sm"
                    variant="primary"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;