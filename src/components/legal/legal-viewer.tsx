export type LegalInfo = {
  title: string;
  parts: { title: string; content: string }[];
};

type Props = {
  info: LegalInfo;
};

export default function LegalViewer({ info: { title, parts } }: Props) {
  return (
    <div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <ol>
        {parts.map((part, i) => (
          <Item key={i} index={i + 1} item={part} />
        ))}
      </ol>
    </div>
  );
}

const Item = ({
  item: { title, content },
  index,
}: {
  item: LegalInfo["parts"][number];
  index: number;
}) => (
  <li className="mt-2">
    <h2 className="font-bold text-lg">
      {index}. {title}
    </h2>
    <p className="text-justify">{content}</p>
  </li>
);
