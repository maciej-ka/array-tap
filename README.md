# Get value of array between chained calls
```javascript
import { initArrayTap } from 'array-tap';
initArrayTap();

["alice", "in", "wonderland"]
  .map(str => str.length)
  .tap(arr => console.log(arr)) // prints: [5, 2, 10]
  .filter(n => n > 5);
```

### name option
By default `initArrayTap()` will extend Array prototype with a "tap" method.

It's possible to choose different name: `initArrayTap("myTap")`.
In combination with a Javascript Symbol this will prevent name collisions.

```javascript
import { initArrayTap } from 'array-tap';
const tap = Symbol("tap");
initArrayTap(tap);

["alice", "in", "wonderland"]
  .map(str => str.length)
  [tap](arr => console.log(arr))
  .filter(n => n > 3);
```
