<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>let greeting;: This line declares a variable named greeting using the let keyword. However, it doesn't assign a value to it at this point. So, greeting is declared but remains uninitialized, and its value is undefined by default.

greeting = {};: This line assigns an empty object {} to the greeting variable. Now, greeting holds a reference to an empty object in memory.

console.log(greeting);: This line logs the value of the greeting variable to the console using console.log(). At this point, greeting contains an empty object, so the output will be the empty object itself.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>You have a JavaScript function named sum that takes two parameters, a and b.

Inside the sum function, you use the + operator to add the values of a and b together.

You call the sum function with the arguments 1 and "2". Here, 1 is a number, and "2" is a string.

JavaScript performs automatic type conversion, also known as type coercion, when you use the + operator with different types. In this case, it converts the number 1 to a string to match the data type of "2".

After the type conversion, you effectively have "1" (a string) and "2" (a string), and when you use the + operator with strings, it concatenates them.

So, the result of sum(1, "2") is the string "12", where "1" and "2" are concatenated together.

That's why the correct answer is:

C: "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>An array named food is defined with four emoji elements: ["🍕", "🍫", "🥑", "🍔"].

An object named info is created with a property favoriteFood that initially holds the first element of the food array, which is "🍕".

The line info.favoriteFood = "🍝"; updates the favoriteFood property of the info object to "🍝". However, this change does not affect the food array because the favoriteFood property is separate from the food array.

Finally, console.log(food); logs the food array to the console. Since there were no modifications made to the food array, it remains unchanged, and the output is:A</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>The sayHi function expects one parameter, name, which is used to construct the greeting message.
When you call sayHi() without passing any argument, the name parameter inside the function becomes undefined.
The function still executes, but undefined is used as the value for name in the string interpolation.
Therefore, the result is "Hi there, undefined" because it's greeting with an undefined name.
So, the correct answer is B: Hi there, undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: 2

<i>The code initializes a variable count with a value of 0 and an array nums containing four numbers: [0, 1, 2, 3].

It then uses the forEach method to iterate over each element in the nums array. The arrow function (num) => { ... } is used as the callback function for each iteration.

Inside the callback function, there's a conditional statement if (num) count += 1;. This statement checks if the current num is truthy (non-zero). If it is, it increments the count by 1.

The forEach loop goes through all elements in the nums array. In this case, 1 and 2 are truthy values, so the count is incremented for each of them.

After the loop, console.log(count); prints the final value of count, which is 2 because there are two truthy elements in the array (1 and 2).

So, the correct answer is B: 2.</i>

</p>
</details>
