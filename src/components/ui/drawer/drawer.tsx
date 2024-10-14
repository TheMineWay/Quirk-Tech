import { ReactNode } from "react";
import clsx from "clsx";
import { Close } from "@mui/icons-material";

import styles from "./drawer.module.css";

type DrawerSize = "sm" | "md" | "lg" | "xl";
type DrawerPosition = "left" | "right";

type DrawerProps = {
  isOpen?: boolean;
  toggleDrawer?: () => void;
  size?: DrawerSize;
  position?: DrawerPosition;
  title?: string;
  showHeader?: boolean;
  children?: ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen = false,
  toggleDrawer,
  size = "md",
  position = "left",
  title,
  showHeader = true,
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
          styles[position],
          { [styles.open]: isOpen },
          styles[`drawer-${size}`]
        )}
      >
        {showHeader && (
          <div className={styles.header}>
            {title && <h1 className={styles.title}>{title}</h1>}
            <button className={styles["close-btn"]} onClick={toggleDrawer}>
              <Close />
            </button>
          </div>
        )}
        <div className={styles["drawer-content"]}>{children}</div>
      </div>
    </>
  );
};

export default Drawer;
