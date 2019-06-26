# Word Wrap Kata
This kata is from Robert Martin, also know as Uncle Bob.
It is an excelent exercise for practicing [Transformation Priority Premise](https://en.wikipedia.org/wiki/Transformation_Priority_Premise).

## Problem Description
You write a class called Wrapper, that has a single static function named wrap that takes two arguments, a string, and a column number. The function returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the column number. You try to break lines at word boundaries.

Like a word processor, break the line by replacing the last space in a line with a newline.

## Output Examples
```javascript
Wrapper.wrap("hello", 5) // "hello"
Wrapper.wrap("hello", 3) // "hel\nlo"
Wrapper.wrap("hello world!", 7) // "hello\nworld!"
```

## Requirements
* Use [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) (TDD).
* Implement at least two solutions.
* Have fun! :)