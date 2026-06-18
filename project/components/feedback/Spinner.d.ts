import * as React from "react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Pixel size of the spinner. Default 16. */
  size?: number;
}

/** Indeterminate loading indicator. Inherits `currentColor`, so it tints to its context. */
export function Spinner(props: SpinnerProps): React.ReactElement;
