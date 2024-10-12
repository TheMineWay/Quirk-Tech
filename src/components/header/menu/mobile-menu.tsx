import Drawer from "@/components/ui/drawer/drawer";

type Props = {
  open?: boolean;
  close: () => void;
};

export default function MobileMenu({ open, close }: Props) {
  return (
    <Drawer open={open} onClose={close}>
      <h1>Hello</h1>
    </Drawer>
  );
}
