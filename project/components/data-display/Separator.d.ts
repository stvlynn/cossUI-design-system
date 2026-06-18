import * as React from "react";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

/** Hairline divider in the brand border tone. Horizontal by default. */
export function Separator(props: SeparatorProps): React.ReactElement;
