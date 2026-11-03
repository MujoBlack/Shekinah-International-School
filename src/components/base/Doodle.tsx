interface DoodleProps {
  icon: string;
  className?: string;
  tone?: "green" | "red";
  size?: string;
}

export default function Doodle({ icon, className = "", tone = "green", size = "text-2xl" }: DoodleProps) {
  const color = tone === "red" ? "text-accent-500" : "text-primary-400";
  return (
    <span className={`pointer-events-none flex items-center justify-center ${color} ${size} ${className}`} aria-hidden="true">
      <i className={`${icon} leading-none`} />
    </span>
  );
}