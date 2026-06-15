import styles from "./NewsletterSection.module.scss";
import { Button, Form } from "react-bootstrap";

const NewsletterSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <h2>Subscribe To Newsletter</h2>

          <p>
            Get updates on new products and offers.
          </p>

          <div className={styles.form}>
            <Form.Control
              type="email"
              placeholder="Enter Email"
            />

            <Button variant="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;