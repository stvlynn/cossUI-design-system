import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to `fallback`/children (e.g. initials) on error. */
  src?: string;
  alt?: string;
  /** Shown when no image (initials or icon). */
  fallback?: React.ReactNode;
}

/** Circular avatar (~32px). Crops an image to cover, else shows initials on the muted tone. */
export function Avatar(props: AvatarProps): React.ReactElement;
