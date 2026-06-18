import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Container surface — rounded-2xl, hairline border, whisper shadow plus an
 * inner top-light. Compose with `CardHeader`, `CardTitle`, `CardDescription`,
 * `CardContent` and `CardFooter`.
 *
 * @startingPoint section="Cards" subtitle="Rounded-2xl surface with header/content/footer" viewport="700x260"
 */
export function Card(props: CardProps): React.ReactElement;
export function CardHeader(props: CardProps): React.ReactElement;
export function CardTitle(props: CardProps): React.ReactElement;
export function CardDescription(props: CardProps): React.ReactElement;
export function CardContent(props: CardProps): React.ReactElement;
export function CardFooter(props: CardProps): React.ReactElement;
