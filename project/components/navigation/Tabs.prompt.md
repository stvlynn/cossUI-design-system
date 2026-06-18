Segmented tab navigation. The active trigger lifts onto the background surface with a quiet shadow; inactive triggers sit muted in the track.

```jsx
<Tabs defaultValue="cli">
  <TabsList>
    <TabsTrigger value="cli">CLI</TabsTrigger>
    <TabsTrigger value="manual">Manual</TabsTrigger>
  </TabsList>
  <TabsContent value="cli">npx coss add button</TabsContent>
  <TabsContent value="manual">Copy the source into your project.</TabsContent>
</Tabs>
```

Controllable via `value` + `onValueChange`, or uncontrolled via `defaultValue`.
