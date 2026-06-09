import { HiOutlineBars3 } from "react-icons/hi2";

import { useUIStore } from "@/store/uiStore";

import styles from "./Header.module.scss";

const Header = () => {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <button className={styles.menuBtn} onClick={toggleSidebar}>
            <HiOutlineBars3 />
          </button>

          <div className={styles.logo}>Datta Ghee</div>
        </div>

        {/* CENTER */}
        {/* <div className={styles.center}>
          <input type="text" placeholder="Search..." className={styles.search} />
        </div> */}

        {/* RIGHT */}
        <div className={styles.right}>
          <button className={styles.actionBtn}>Dashboard</button>
          <button className={styles.actionBtn}>Products</button>


          <button className={styles.actionBtn}>Setting</button>

          <div className={styles.avatar}>A</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
