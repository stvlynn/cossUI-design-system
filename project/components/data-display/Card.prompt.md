Container surface for grouped content. Rounded-2xl with a hairline border, a whisper-quiet shadow and an inner top-light.

```jsx
<Card>
  <CardHeader>
    <CardTitle>calendar</CardTitle>
    <CardDescription>open source scheduling infrastructure.</CardDescription>
  </CardHeader>
  <CardContent>npm install @coss/calendar</CardContent>
  <CardFooter><Button>Read the docs</Button></CardFooter>
</Card>
```

Subparts: `CardHeader`, `CardTitle` (Cal Sans heading), `CardDescription`, `CardContent`, `CardFooter`. Padding is handled for you — header→content and content→footer gaps collapse automatically.
