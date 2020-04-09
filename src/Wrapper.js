const Wrapper = () => {
  const wrapIndex = (text, columnWidth) => {
    const hasSpaceInsideColumnWidth = text.substring(0, columnWidth).includes(" ")
    const spaceIndex = text.substring(0, columnWidth).lastIndexOf(" ")

    return hasSpaceInsideColumnWidth ? spaceIndex : columnWidth
  }

  const wrap = (text, columnWidth) => {
    const hasValidColumnWidth = columnWidth > 0
    const hasValidText =  text && text.length > columnWidth

    if (hasValidColumnWidth && hasValidText) {
      const line = text.substring(0, wrapIndex(text, columnWidth)).trim()
      const unwrappedText = text.substring(wrapIndex(text, columnWidth)).trim()
      const remainderLines = wrap(unwrappedText, columnWidth)

      return [line, remainderLines].join("\n")
    }

    return text
  }

  return {
    wrap: wrap,
  }
}

module.exports = { Wrapper }
