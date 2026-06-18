coss form primitives — text field, label, checkbox and switch. All sit on the brand's hairline border + quiet shadow language.

```jsx
<Label htmlFor="email">Work email</Label>
<Input id="email" type="email" placeholder="you@company.com" />

<Label><Checkbox defaultChecked /> Subscribe to updates</Label>
<Label><Switch defaultChecked /> Production mode</Label>
```

`Input` owns its focus ring through the wrapping control. `Checkbox`/`Switch` are controllable (`checked` + `onCheckedChange`) or uncontrolled (`defaultChecked`). Both fill with the near-black primary in their on state.
