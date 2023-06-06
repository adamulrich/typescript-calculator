# typescript calculator overview

This a a portfolio project for building an html based calculator.

My intent for this project was to learn typescript.

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

- VS Code
- Node JS

This project uses html, css, and typescript, with node and webpack for transpiling the typescript to javascript.

# Useful Websites

- [Tsegen's Blog - set up a vanilla typescript project](https://tsegsxaviers.hashnode.dev/setting-up-a-vanilla-typescript-project-the-right-way)
- [Typescript Docs](https://www.typescriptlang.org/docs/)


# Design
A calculator requires two operands and an operator to compute a result. In infix notation you enter digits, decimal point and a negative sign. After
you enter digits, then you enter an operator, followed by more digits, then another operator or equals.

In this implementation, I've chosen a state based model to understand where we are at in the process. 
1. Entering the first operand
2. Selected an operator
3. Entering the second operand
4. Selecting equals or another operator. 


# User Experience
If you choose another operator instead of equals, or after equals, you will go back to state 2. 

If you select clear it will clear the current operand back to zero, but you should remain in the same state.
When you do a clear operation while in state 2 and state 4, it will be a no-op.

If you select clear all, it will clear all operands and the result and operator, and set you back to state 1.

# event model
We will hook up events from the UI buttons and keystrokes to 3 entry point methods

* inputButtonPressed(btn) - will handle 0-9, decimal, and plus/minus.
* operatorPressed(btn) - will handle plus, minus , multiply, divide, and equals.
* clearPressed(btn) - will handle clear, all_clear, and backspace.

Each of these entry points will evaluate the current state, and then decide based on the keystroke if the request was valid. If valid it will proceed to update the calculator object state store, and then request a UI update. 

# Implementation
We will store state of the calculator in a calculator state object.
The rest of the implementation will be functional in a single javascript file. This is not too complicated such that we need more objects here. 

# UI
The UI will have a standard calculator 0 to 9, decimal and plus/minus key pad button set with plus, minus, divide and multiply options, as well as clear , all clear, backspace and equals.

There will be a display for the current input step. As we move through the steps, we will fill out the display with operand_1, operator, operand_2 and result values.
The display will be truncated to a maximum of 12 characters, plus a sign.

In addition to the UI, will will map the keyboard events to allow for keyboard input. 
Enter will be equivalent to Equals.
Escape will be Clear.
Pressing Escape a second time will be All Clear.
Because there is no plus/minus key, we will map the backslash \ key to that function.

# Future Work

- add square and square root
- add x ^ y
- add support for exponential notation
- fix truncation of result to max size
