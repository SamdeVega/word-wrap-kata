const { Wrapper } = require("../src/Wrapper")
const wrapper = Wrapper()

describe('Wrapper should not wrap', () => {
  it('a word when it fits', () => {
    expect(wrapper.wrap("hello", 5)).toBe("hello")
  })
})
