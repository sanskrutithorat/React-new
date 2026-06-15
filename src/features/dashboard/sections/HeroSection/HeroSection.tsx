import styles from "./HeroSection.module.scss";
import { Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6">
            <div className={styles.content}>
              <span className={styles.badge}>
                New Collection 2026
              </span>

              <h1>
                Discover Amazing
                <br />
                Products
              </h1>

              <p>
                Shop the latest trends and exclusive deals.
                Find everything you need in one place.
              </p>

              <Button variant="primary">
                Shop Now
              </Button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Hero Product"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;