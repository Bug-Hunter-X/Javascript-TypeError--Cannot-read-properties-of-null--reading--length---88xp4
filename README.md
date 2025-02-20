# Javascript TypeError: Cannot read properties of null (reading 'length')
This repository demonstrates a common yet easily overlooked error in Javascript: attempting to access the 'length' property of a variable that is null or undefined, or that doesn't have a 'length' property.  The error is a TypeError: Cannot read properties of null (reading 'length').

The `bug.js` file contains the problematic code.  `bugSolution.js` provides a solution illustrating how to handle these situations.

This is a subtle error because the code might work correctly for some inputs but fail for others, leading to unexpected behavior and making debugging challenging.