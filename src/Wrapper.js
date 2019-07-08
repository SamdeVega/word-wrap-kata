const Wrapper = () => {
  const wrap = (string, columnNumber) => {
    let wrapped = string.substring(0, columnNumber)
    if (string.length > columnNumber)
      wrapped = wrapped.concat("\n").concat(string.substring(columnNumber))
    return wrapped
  }

  return {
    wrap: wrap,
  }
}

module.exports = { Wrapper }