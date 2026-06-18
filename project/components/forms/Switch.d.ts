import * as React from "react";

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Pill toggle with a sliding thumb. Track fills near-black primary when on.
 * Use for instant on/off settings (no Save needed).
 */
export function Switch(props: SwitchProps): React.ReactElement;
