"use client";

import type { PropsWithChildren } from "react";
import { Rnd } from "react-rnd";
import type { DesktopPosition } from "@/hooks/useDesktopLayout";

export function DraggableDesktopItem({ position, onMove, onSelect, children }: PropsWithChildren<{ position: DesktopPosition; onMove: (position: DesktopPosition) => void; onSelect: () => void }>) {
  return <Rnd
    bounds="parent"
    position={position}
    size={{ width: 110, height: 100 }}
    enableResizing={false}
    dragGrid={[8, 8]}
    onDragStart={onSelect}
    onDragStop={(_, data) => onMove({ x: data.x, y: data.y })}
  >
    {children}
  </Rnd>;
}
