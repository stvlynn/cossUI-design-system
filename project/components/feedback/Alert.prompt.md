Inline message banner with an optional leading icon and four quiet semantic variants.

```jsx
<Alert variant="info" icon={<InfoIcon />}>
  <AlertTitle>Upcoming product</AlertTitle>
  <AlertDescription>coss calendar is in early access. Join the waitlist.</AlertDescription>
</Alert>
```

Variants render at a 4% fill / 32% border so they inform rather than alarm. Use `error` for failures, `success` for confirmations, `warning` for caution, `info` for neutral notices.
