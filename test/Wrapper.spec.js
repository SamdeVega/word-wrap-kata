const { Wrapper } = require("../src/Wrapper")
const wrapper = Wrapper()

describe('Wrapper should not wrap', () => {
  it('a word when it fits', () => {
    expect(wrapper.wrap("hello", 5)).toBe("hello")
  })

  it('a sentence when it fits', () => {
    expect(wrapper.wrap("hello world!", 12)).toBe("hello world!")
  })
})

describe('Wrapper should wrap', () => {
  it('a word when it does not fit', () => {
    expect(wrapper.wrap("hello", 3)).toBe("hel\nlo")
  })

  it('a sentence when it does not fit', () => {
    expect(wrapper.wrap("hello world!", 6)).toBe("hello\nworld!")
  })

  it('a word in a sentence when it does not fit', () => {
    expect(wrapper.wrap("hello world! amazing!", 6)).toBe("hello\nworld!\namazin\ng!")
  })
})