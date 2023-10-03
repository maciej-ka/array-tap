# Get value of array between chained calls
Tap can be placed in chains between filter and map.
It expects a callback function that will get a value of array.

### How to use
Import array-tap once in your project.
It will extend Array with a `tap` method.

```javascript
import 'array-tap';

["Alice", "in", "wonderland"]
  .map(str => str.length)
  .tap(arr => console.log(arr)) // prints: [5, 2, 10]
  .filter(n => n > 5);
```

