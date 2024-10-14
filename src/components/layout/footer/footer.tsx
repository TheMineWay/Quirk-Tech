import clsx from "clsx";
type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  return <footer className={clsx("bg-red-200 h-8", className)}></footer>;
}
