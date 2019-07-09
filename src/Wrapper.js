const Wrapper = () => {
  const wrap = (string, columnNumber) => {
    let wrapped = string.substring(0, columnNumber).trim()
    if (string.length > columnNumber)
      wrapped = wrapped.concat("\n").concat(string.substring(columnNumber).trim())
    return wrapped
  }

  return {
    wrap: wrap,
  }
}

module.exports = { Wrapper }