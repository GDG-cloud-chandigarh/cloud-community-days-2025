import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/** Native sizes of the isometric shapes in public/elements, one file per colour. */
const SHAPES = {
  blocks: { width: 486, height: 299 },
  cloud: { width: 425, height: 392 },
  star: { width: 328, height: 372 },
} as const;

type Shape = keyof typeof SHAPES;
type Colour = "white" | "blue" | "yellow" | "red" | "green";

interface StickerProps {
  shape: Shape;
  colour: Colour;
  /** Position, height and visibility, e.g. "absolute left-[4%] top-8 h-16 hidden lg:block". */
  className: string;
  rotate?: number;
  /** Seconds into the float cycle, so neighbours don't bob in step. */
  delay?: number;
}

/**
 * A decorative shape. Placed only in empty space, and hidden by the caller
 * where a screen has none to spare. The float is transform-only (.sticker in
 * index.css), so it never moves layout.
 */
export function Sticker({ shape, colour, className, rotate = 0, delay = 0 }: StickerProps) {
  const { width, height } = SHAPES[shape];
  return (
    <img
      src={`/elements/${shape}_${colour}.svg`}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      loading="lazy"
      className={cn("sticker pointer-events-none select-none w-auto", className)}
      style={{ "--r": `${rotate}deg`, animationDelay: `${-delay}s` } as CSSProperties}
    />
  );
}
