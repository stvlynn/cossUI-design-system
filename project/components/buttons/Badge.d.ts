import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * `default`/`secondary`/`outline` are neutral; the tinted set
   * (`info`/`success`/`warning`/`error`) renders at 8% fill with a colored
   * label, matching coss alert semantics. `destructive` is solid.
   */
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "error"
    | "info"
    | "success"
    | "warning";
  /** Compact pill sizing. */
  size?: "default" | "sm" | "lg";
}

/**
 * Small status / metadata pill. Used for the "Upcoming" and "New" product
 * markers across coss.com. Rounded-sm, medium weight, optional leading icon.
 */
export function Badge(props: BadgeProps): React.ReactElement;
