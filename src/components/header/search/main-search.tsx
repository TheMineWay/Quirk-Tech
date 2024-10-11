type Props = {
  className?: string;
};

export default function MainSearch({ className }: Props) {
  return (
    <div className={className}>
      <input placeholder="Search" className="h-full" />
    </div>
  );
}
