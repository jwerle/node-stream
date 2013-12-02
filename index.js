
/**
 * Module dependencies
 */

var through = require('through')

/**
 * Creates a stream where the
 * source is a dom node
 *
 * @api public
 * @param {Node} node
 * @param {Object} opts - optional
 */

module.exports = NodeStream;
function NodeStream (node, opts) {
  if (!(node instanceof Node)) {
    throw new TypeError("expecting instance of `Node'");
  }

  var stream = through(write, end);

  function write (chunk) {
    if (true == this.paused) {
      this.queue(chunk);
    } else if (null == chunk) {
      this.queue(null);
    } else {
      this.emit('data', chunk);
    }
  }

  function end () {
    if (true == this.paused) {
      this.queue(null);
    } else {
      this.emit('end');
    }
  }

  stream.on('data', function (chunk) {
    if (null != chunk) {
      node.innerHTML += String(chunk);
    }
  });

  return stream;
}
