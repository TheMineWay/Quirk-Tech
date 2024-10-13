import { ReactNode } from "react";
import clsx from "clsx";
import { Close } from "@mui/icons-material";

import styles from "./drawer.module.css";

type DrawerSize = "md" | "lg" | "xl";

type DrawerProps = {
  isOpen?: boolean;
  toggleDrawer?: () => void;
  size?: DrawerSize;
  children?: ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen = false,
  toggleDrawer,
  size = "md",
  children,
}) => {
  return (
    <>
      <div
        className={clsx(styles.overlay, { [styles.open]: isOpen })}
        onClick={toggleDrawer}
      />

      <div
        className={clsx(
          styles.drawer,
          { [styles.open]: isOpen },
          styles[`drawer-${size}`]
        )}
      >
        <button className={styles["close-btn"]} onClick={toggleDrawer}>
          <Close />
        </button>
        <div className={styles["drawer-content"]}>{children}</div>
      </div>
    </>
  );
};

export default Drawer;
