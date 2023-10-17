import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities</p>
    </div>
  );
};

export default SideBar;
