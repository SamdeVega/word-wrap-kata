const { Wrapper } = require("../src/Wrapper")
const wrapper = Wrapper()

describe('Wrapper should not wrap', () => {
  it('a word when it fits', () => {
    expect(wrapper.wrap("hello", 5)).toBe("hello")
  })
})

describe('Wrapper should wrap', () => {
  it('a word when it does not fit', () => {
    expect(wrapper.wrap("hello", 3)).toBe("hel\nlo")
  })
})