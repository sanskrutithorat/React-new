import { useUIStore } from "@/store/uiStore";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const isSidebarOpen = useUIStore((s) => s.isSidebarOpen);

  const closeSidebar = useUIStore((s) => s.closeSidebar);

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`${styles.overlay} ${isSidebarOpen ? styles.showOverlay : ""}`}
        onClick={closeSidebar}
      />

      {/* SIDEBAR */}
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.showSidebar : ""}`}>
        <div className={styles.top}>
          <h2>Menu</h2>
        </div>

        <nav className={styles.nav}>
          <button>Dashboard</button>
          <button>Settings</button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
