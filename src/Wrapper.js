const Wrapper = () => {
  const separationIndex = (string, columnNumber) => (string.substring(0, columnNumber).includes(" ")) ? string.substring(0, columnNumber).lastIndexOf(" ") : columnNumber
  const separate = (string, columnNumber) => [
    string.substring(0, separationIndex(string, columnNumber)).trim(),
    string.substring(separationIndex(string, columnNumber)).trim()
  ].map(string => (string.length > columnNumber) ? wrap(string, columnNumber) : string)
  const wrap = (string, columnNumber) => (string.length > columnNumber) ? separate(string, columnNumber).join("\n") : string

  return {
    wrap: wrap,
  }
}

module.exports = { Wrapper }