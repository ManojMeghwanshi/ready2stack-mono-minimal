import { useState, useEffect, useCallback } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export const useCustomCursor = () => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
  }, []);

  useEffect(() => {
    if (isActive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isActive, handleMouseMove]);

  return {
    isActive,
    position,
    handleMouseEnter,
    handleMouseLeave,
  };
};
