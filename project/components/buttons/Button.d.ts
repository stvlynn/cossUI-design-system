import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style. `default` is the near-black primary action; use `outline`
   * or `secondary` for lower emphasis, `ghost`/`link` for the quietest.
   */
  variant?:
    | "default"
    | "destructive"
    | "destructive-outline"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  /** Control height. Icon-only buttons use the square `icon*` sizes. */
  size?: "default" | "sm" | "lg" | "xl" | "xs" | "icon" | "icon-sm" | "icon-lg";
}

/**
 * The primary coss.com action control. Monochrome-forward: the default is a
 * near-black filled button with a subtle top inner-light. Pairs an SVG icon
 * (Lucide) with a label via `gap`.
 *
 * @startingPoint section="Buttons" subtitle="Primary action control with 7 variants" viewport="700x140"
 */
export function Button(props: ButtonProps): React.ReactElement;
