Get value of array between steps of map, filter, flat...

```bash
npm i array-tap
```

```javascript
import initTap from 'array-tap';
initTap();

["alice", "in", "wonderland"]
  .map(str => str.length)
  .tap(arr => console.log(arr))
  .filter(n => n > 5);
```

## Name option
By default `initTap()` will extend Array prototype with "tap" method.

It's possible to choose different name, like: `initTap("myTap")`.
In combination with Javascript Symbol this can prevent name collisions.

```javascript
const tap = Symbol("tap");
initTap(tap);

["alice", "in", "wonderland"]
  .map(str => str.length)
  [tap](arr => console.log(arr))
  .filter(n => n > 3);
```
