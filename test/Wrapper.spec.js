const { Wrapper } = require("../src/Wrapper")
const wrapper = Wrapper()

describe('Wrapper should not wrap', () => {
  it('a sentence with an invalid content', () => {
    expect(wrapper.wrap(null, 5)).toBe(null)
  })

  it('a sentence with an invalid column width', () => {
    expect(wrapper.wrap("hello", null)).toBe("hello")
    expect(wrapper.wrap("hello", 0)).toBe("hello")
  })

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
    expect(wrapper.wrap("hello world!", 7)).toBe("hello\nworld!")
  })

  it('a word in a sentence when it does not fit', () => {
    expect(wrapper.wrap("hello world! amazing!", 6)).toBe("hello\nworld!\namazin\ng!")
  })
  
  it('a sentence with multiple spaces together', () => {
    expect(wrapper.wrap("hello    world!", 5)).toBe("hello\nworld\n!")
  })

  it('a sentence with a word that does not fit before an space', () => {
    expect(wrapper.wrap("hellofoooo world!", 5)).toBe("hello\nfoooo\nworld\n!")
  })
})
