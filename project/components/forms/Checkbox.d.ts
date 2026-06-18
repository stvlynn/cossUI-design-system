import * as React from "react";

export interface CheckboxProps {
  /** Controlled checked state. Omit to use `defaultChecked`. */
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Square checkbox (~16px, .25rem radius) with the coss check glyph. Fills with
 * the near-black primary when checked. Pair with a Label.
 */
export function Checkbox(props: CheckboxProps): React.ReactElement;
