"use client";

import { MenuItems } from "@/types/components/header/menu/menu-item.type";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";

type Props = {
  isOpen?: boolean;
  menuItems: MenuItems;
} & Pick<ReturnType<typeof useDisclosure>, "onOpenChange">;

export default function MobileMenu({ isOpen, onOpenChange }: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="h-screen absolute left-0">
        {() => (
          <ModalBody>
            <p>...</p>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
