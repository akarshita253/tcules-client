interface SeparatorProps {
  color?: string | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  thickness?: number | null;
}

export default function Separator({
}: SeparatorProps) {

  return (
    <div
      className="w-full my-8 md:my-12"
    >
      <div
        className={`w-full bg-neutral-100`}
        style={{
          height: `1px`,
        }}
      />
    </div>
  );
}