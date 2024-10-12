import React from "react";
import { Modal, ModalProps, useModal } from "@nextui-org/modal";
import clsx from "clsx";

import styles from "./drawer.module.css";

type Props = Omit<
  ModalProps,
  "className" | "fullScreen" | "closeButton" | "animated" | "blur"
> & { open?: boolean };

const Drawer: React.FC<Props> = ({ children, ...props }) => {
  const { open } = props;

  return (
    <Modal
      className={clsx(styles.drawer, styles["drawer-animated"], {
        [styles["drawer-animated-slide-in"]]: open,
      })}
      closeButton
      animated={false}
      {...props}
    >
      {children}
    </Modal>
  );
};

export const useDrawer = useModal;

export default Drawer;
