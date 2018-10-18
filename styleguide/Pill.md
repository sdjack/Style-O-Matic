Pill
================
Pill: ver.0.0.0 
---
**Typical render usage:**

```js
const PillExample = () => [
  <Pill id="pill1" onAction={() => {}}>
    Action
  </Pill>,
  <Pill id="pill2" onRemove={() => {}}>
    Closable
  </Pill>,
  <Pill id="pill3" onAction={() => {}} onRemove={() => {}}>
    Both
  </Pill>,
  <Pill id="pill4" onAction={() => {}} onRemove={() => {}} disabled>
    Disabled
  </Pill>
];

export default PillExample;
```

## License
Copyright (c) 2018 Steven Jackson

Licensed under the MIT license.
