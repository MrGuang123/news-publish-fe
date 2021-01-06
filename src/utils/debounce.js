export const debounce = (fn, delay) => {
  var timer = null
  return () => {
    if(timer) clearTimeout(timer)

    timer = setTimeout(function() {
      fn()
    }, delay)
  }
}