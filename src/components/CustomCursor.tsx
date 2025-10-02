import { ArrowRight } from "lucide-react";

interface CustomCursorProps {
  isActive: boolean;
  x: number;
  y: number;
}

const CustomCursor = ({ isActive, x, y }: CustomCursorProps) => {
  return (
    <div
      className={`custom-cursor ${isActive ? 'custom-cursor-active' : ''}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <ArrowRight className="w-5 h-5" />
    </div>
  );
};

export default CustomCursor;
