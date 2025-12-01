// components/Separator.tsx
interface SeparatorProps {
  color?: string | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  thickness?: number | null;
}

const colorMap: Record<string, string> = {
  gray: "bg-gray-300",
  green: "bg-green-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  purple: "bg-purple-500",
  black: "bg-black",
  white: "bg-white",
  // add more as needed
};

export default function Separator({
  color = "gray",
  marginTop = 4,
  marginBottom = 4,
  thickness = 1,
}: SeparatorProps) {
  const bgColor = colorMap[color?.toLowerCase() || "gray"] || colorMap.gray;

  return (
    <div
      className="w-full"
      style={{
        marginTop: `${marginTop}rem`,
        marginBottom: `${marginBottom}rem`,
      }}
    >
      <div
        className={`w-full ${bgColor}`}
        style={{
          height: `${thickness}px`,
        }}
      />
    </div>
  );
}