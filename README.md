# Get value of an array between calls
```javascript
import { initTap } from 'array-tap';
initTap();

["alice", "in", "wonderland"]
  .map(str => str.length)
  .tap(arr => console.log(arr))
  .filter(n => n > 5);
```

### name option
By default `initTap()` will extend Array prototype with "tap" method.

It's possible to choose different name, like: `initTap("myTap")`.
In combination with Javascript Symbol it will prevent name collisions.

```javascript
const tap = Symbol("tap");
initTap(tap);

["alice", "in", "wonderland"]
  .map(str => str.length)
  [tap](arr => console.log(arr))
  .filter(n => n > 3);
```
