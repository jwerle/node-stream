node-stream
======

DOM Nodes as streams

## install

```sh
$ component install jwerle/node-stream
```

## usage

```html
<div id="element">
</div>
```

```js
var NodeStream = require('node-stream')
var node = document.getElementById('element');
var stream = NodeStream(node);

stream.on('data', function (chunk) {
  console.log(chunk); // 'beep'
});

stream.write('beep');
console.log(node.innerHTML); // 'beep'
```

## license

MIT
