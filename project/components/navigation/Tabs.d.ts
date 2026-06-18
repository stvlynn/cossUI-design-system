import * as React from "react";

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Controlled active tab value. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

/**
 * Segmented tab control. The active trigger lifts onto the background surface
 * with a quiet shadow + top-light, sitting in a muted track. Compose
 * `TabsList` + `TabsTrigger` and matching `TabsContent` panels.
 *
 * @startingPoint section="Navigation" subtitle="Segmented tabs with raised active state" viewport="700x150"
 */
export function Tabs(props: TabsProps): React.ReactElement;
export function TabsList(props: React.HTMLAttributes<HTMLDivElement>): React.ReactElement;
export function TabsTrigger(props: TabsTriggerProps): React.ReactElement;
export function TabsContent(props: TabsContentProps): React.ReactElement;
