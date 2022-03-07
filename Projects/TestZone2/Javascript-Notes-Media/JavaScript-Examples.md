# Javascript Examples

## Link JavaScript file in HTML

```HTML
<body>
  <h1>Content</h1>
  <script src="/Projects/TestZone1/main.js"></script>
</body>
```

---

## Console & Alert



```Javascript
 console.log('Hello World!');
 console.error('This is an error!');
 console.warn('This is a warning!');
 ```



![Developer Console Example 1](/Projects/TestZone1/Javascript-Notes-Media/DevConsole1.PNG =200x)

[MDN DOCS: Console](https://developer.mozilla.org/en-US/docs/Web/API/console)

``` Javascript
alert('Hello World!')
```

![Developer Console Example 1-1](/Projects/TestZone1/Javascript-Notes-Media/DevConsole1-1.PNG =300x)
---

let is a general purpose declaration. It can be initialized without a value and later assigned a value, or it can be initialized with a value

``` Javascript
let score;
score = 22;

OR

let score = 22;
```

const is a read-only variable that cannot be changed by reassignment. const must be assigned a value at initialization

:white_check_mark: **Valid Initialization:**
  
``` Javascript
const age = 27;.
```

:x:**Invalid Initialization:**

``` Javascript
const age;
```

* Note: *If a const is an object or an array, its properties and items can be modified, but the entire object or array can not be redeclared / reassigned*.

***

## Primative Data Types

1. Strings
2. Numbers
3. Boolean
4. Null
5. Undefined

  *Other primative data types*

6. BigInt
7. Symbol

[MDN DOCS: JavaScript Types # Primative values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types)

Want to explicitly assign the type? Use [TypeScript](https://www.typescriptlang.org/)
  
1. Strings

``` Javascript
const name = 'John';
```

2. Numbers

``` Javascript
const age = 27;

const GPA = 3.5;
```

3. Boolean

``` Javascript
const isNameJohn = true;
```

4. Null

``` Javascript
const x = null;
```

5. Undefined

``` Javascript
const y = undefined;

let z;   (Initializing a variable without setting a value)
```

***

## Combining Console.log and Variables

```JavaScript
const name = 'John';
const age = 27;
const GPA = 3.5;
const isNameJohn = true;
const x = null;
const y = undefined;
let z;

console.log(name);
console.log(age);
console.log(GPA);
console.log(isNameJohn);
console.log(x);
console.log(y);
console.log(z);
```

*Output:*

![Developer Console Example 2](/Projects/TestZone1/Javascript-Notes-Media/DevConsole2.PNG =100x)

You can find the data type of a variable by using the `typeof` method.

```Javascript
const name = 'John';
console.log(typeof name);
```

*Output:*

![Developer Console Example 2-1](/Projects/TestZone1/Javascript-Notes-Media/DevConsole2-1.PNG =75x)

***

## Concatenation and Template Strings

Concatenation & Template Strings are tools used to connect multiple datum into a single string.

Concatenation:

```Javascript
const name = 'John';
const age = 27;

console.log('Hello! My name is ' + name + ' and I am ' + age + ' years old.');
```

**NOTE: The phrase is required to be surrounded in Quotation marks.  ` ' ' ` or ` " " `**

![Developer Console Example 2-2](/Projects/TestZone1/Javascript-Notes-Media/DevConsole2-2.PNG =400x)

Template Strings:

```Javascript
const name = 'John';
const age = 27;

console.log(`Hello! My name is ${name} and I am ${age} years old.`);
```

**NOTE: The phrase is required to be surrounded in Back Ticks.  `` ` ` ``.**

![Developer Console Example 2-2](/Projects/TestZone1/Javascript-Notes-Media/DevConsole2-2.PNG =400x)

### Another Example

```JavaScript
const name = 'John';
const age = 27;

const hello = `Hello! My name is ${name} and I am ${age} years old.`;
console.log(hello);
```

![Developer Console Example 2-2](/Projects/TestZone1/Javascript-Notes-Media/DevConsole2-2.PNG =400x)

***

## String Properties and Methods

Properties do not have a () on the tail end, while Methods() do have a () on the tail end.


```JavaScript
  const x = 'Hello World';
  console.log(x.length);

  const y = 'Yee haw, Howdy World';
  console.log(y.length);
```

Methods:

* toUpperCase()
* toLowerCase()
* substring(X , Y) (Splits a string between the provided indices of X and Y)

```JavaScript
  const x = 'Hello World';
  console.log(x.toUpperCase());
  console.log(x.toLowerCase());
  console.log(x.substring(0, 5));
```

![Developer Console Example 2-4](/Projects/TestZone1/Javascript-Notes-Media/DevConsole2-4.PNG =150x)

Methods and properties can be tacked onto each other in a chain.

```JavaScript
  const x = 'Hello World';
  console.log(x.substring(0, 5).toUpperCase());
```

![Developer Console Example 2-5](/Projects/TestZone1/Javascript-Notes-Media/DevConsole2-5.PNG =75x)

***

## Object Data Type

1. Object literals
2. Arrays

[MDN DOCS: JavaScript Types # Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects)
