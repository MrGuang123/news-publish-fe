export const throttle = (fn, delay) => {
  var prev = Date.now()

  return function() {
    var now = Date.now()
    if(now - prev > delay) {
      fn()
      prev = now
    }
  }
}