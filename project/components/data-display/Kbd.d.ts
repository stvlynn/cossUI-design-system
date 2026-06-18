import * as React from "react";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

/** Keyboard key hint on the muted tone — e.g. ⌘ K. Use inside menus, command palettes, tooltips. */
export function Kbd(props: KbdProps): React.ReactElement;
