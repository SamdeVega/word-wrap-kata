const Wrapper = () => {
  const wrap = (string, columnNumber) => {
    let wrappedLeft = string.substring(0, columnNumber).trim()
    let wrappedRight = string.substring(columnNumber).trim()
    if (string.length > columnNumber) {
      wrappedLeft = wrap(wrappedLeft, columnNumber)
      wrappedRight = wrap(wrappedRight, columnNumber)
      wrappedLeft = wrappedLeft.concat("\n").concat(wrappedRight)
    }
    return wrappedLeft
  }

  return {
    wrap: wrap,
  }
}

module.exports = { Wrapper }