import * as React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
}

/** Form field label — medium weight, pairs with Input/Checkbox/Switch via gap. */
export function Label(props: LabelProps): React.ReactElement;
