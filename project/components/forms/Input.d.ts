import * as React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Control height. */
  size?: "default" | "sm" | "lg";
}

/**
 * Single-line text field, wrapped in a bordered control surface that owns the
 * focus ring and the hairline top-light. Set `aria-invalid` for the error
 * state. Compose inside a Field with a Label.
 */
export function Input(props: InputProps): React.ReactElement;
