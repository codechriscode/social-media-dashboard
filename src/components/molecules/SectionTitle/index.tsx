import Typography from "../../atoms/Typography";

type SectionTitleProps = { content: string };

export default function SectionTitle(props: SectionTitleProps) {
  const { content } = props;
  return (
    <div style={{ width: "100%" }}>
      <Typography variant="title2">{content}</Typography>
    </div>
  );
}
