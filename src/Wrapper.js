const Wrapper = () => {
  const wrap = (string, columnNumber) => {
    return string.substring(0, columnNumber)
  }

  return {
    wrap: wrap,
  }
}

module.exports = { Wrapper }