import * as React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tinted semantic styling — 4% fill + 32% border + colored icon. */
  variant?: "default" | "error" | "info" | "success" | "warning";
  /** Leading icon (Lucide), laid out in the icon column. */
  icon?: React.ReactNode;
}

/**
 * Inline message banner. Optional leading icon; compose `AlertTitle` and
 * `AlertDescription`. Semantic variants use a quiet 4% fill so they read as
 * informative, not alarming.
 */
export function Alert(props: AlertProps): React.ReactElement;
export function AlertTitle(props: React.HTMLAttributes<HTMLDivElement>): React.ReactElement;
export function AlertDescription(props: React.HTMLAttributes<HTMLDivElement>): React.ReactElement;
