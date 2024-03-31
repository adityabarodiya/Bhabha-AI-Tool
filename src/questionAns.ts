const programmingQuestions = [
    {
      question: "What is programming?",
      ans: "Programming is the process of designing and creating an executable computer program to accomplish a specific task.",
      isLiked: false
    },
    {
      question: "What is a programming language?",
      ans: "A programming language is a formal language comprising a set of instructions that produce various kinds of output when executed by a computer.",
      isLiked: false
    },
    {
      question: "What is the difference between a compiler and an interpreter?",
      ans: "A compiler translates the entire source code into machine code before execution, while an interpreter translates and executes the source code line by line.",
      isLiked: false
    },
    {
      question: "What is the purpose of comments in a program?",
      ans: "Comments are used to explain the code and make it easier for other programmers to understand. They are ignored by the compiler or interpreter.",
      isLiked: false
    },
    {
      question: "What is a variable?",
      ans: "A variable is a named storage location in memory that holds a value that can be changed during the program's execution.",
      isLiked: false
    },
    {
      question: "What is the difference between `==` and `===` in JavaScript?",
      ans: "The `==` operator checks for equality after converting operands to a common type, while `===` checks for strict equality without type conversion.",
      isLiked: false
    },
    {
      question: "What is the purpose of the `this` keyword in JavaScript?",
      ans: "The `this` keyword refers to the current object in which the code is being executed.",
      isLiked: false
    },
    {
      question: "What is the difference between `let`, `const`, and `var` in JavaScript?",
      ans: "`let` and `const` are block-scoped, while `var` is function-scoped. `const` variables cannot be reassigned, while `let` and `var` can.",
      isLiked: false
    },
    {
      question: "What is a function in programming?",
      ans: "A function is a block of code that performs a specific task. It can be called from other parts of the program.",
      isLiked: false
    },
    {
      question: "What is recursion?",
      ans: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.",
      isLiked: false
    },
    {
      question: "What is the difference between a parameter and an argument?",
      ans: "A parameter is a variable in a function definition, while an argument is the actual value passed to the function when it is called.",
      isLiked: false
    },
    {
      question: "What is an array?",
      ans: "An array is a data structure that stores a collection of elements, each identified by an index or key.",
      isLiked: false
    },
    {
      question: "What is a loop?",
      ans: "A loop is a programming construct that repeats a set of instructions until a specified condition is met.",
      isLiked: false
    },
    {
      question: "What is the difference between `for` and `while` loops?",
      ans: "A `for` loop is used when the number of iterations is known, while a `while` loop is used when the number of iterations is not known in advance.",
      isLiked: false
    },
    {
      question: "What is the purpose of conditional statements in programming?",
      ans: "Conditional statements are used to execute certain code blocks based on specified conditions.",
      isLiked: false
    },
    {
      question: "What is a class in object-oriented programming (OOP)?",
      ans: "A class is a blueprint for creating objects that defines their properties and behaviors.",
      isLiked: false
    },
    {
      question: "What is inheritance in OOP?",
      ans: "Inheritance is a mechanism where a new class derives attributes and methods from an existing class.",
      isLiked: false
    },
    {
      question: "What is polymorphism in OOP?",
      ans: "Polymorphism allows objects of different classes to be treated as objects of a common superclass.",
      isLiked: false
    },
    {
      question: "What is encapsulation in OOP?",
      ans: "Encapsulation is the bundling of data with the methods that operate on that data, or the restriction of direct access to some of an object's components.",
      isLiked: false
    },
    {
      question: "What is a constructor in OOP?",
      ans: "A constructor is a special method used to initialize objects of a class.",
      isLiked: false
    },
    {
      question: "What is a method in OOP?",
      ans: "A method is a function defined within a class that performs a specific task.",
      isLiked: false
    },
    {
      question: "What is the difference between a class method and an instance method in OOP?",
      ans: "A class method is a method that is called on the class itself, while an instance method is called on an instance of the class.",
      isLiked: false
    },
    {
      question: "What is a static method in OOP?",
      ans: "A static method is a method that belongs to the class itself and not to its instances.",
      isLiked: false
    },
    {
      question: "What is an interface in OOP?",
      ans: "An interface defines a contract for what methods a class must implement, without specifying how they are implemented.",
      isLiked: false
    },
    {
      question: "What is an abstract class in OOP?",
      ans: "An abstract class is a class that cannot be instantiated and is typically used as a base class for other classes.",
      isLiked: false
    },
    {
      question: "What is a package in Java?",
      ans: "A package is a namespace that organizes a set of related classes and interfaces.",
      isLiked: false
    },
    {
      question: "What is an exception in programming?",
      ans: "An exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions.",
      isLiked: false
    },
    {
      question: "What is exception handling?",
      ans: "Exception handling is the process of responding to exceptions and recovering from them.",
      isLiked: false
    },
    {
      question: "What is the purpose of the `try`, `catch`, and `finally` blocks in exception handling?",
      ans: "The `try` block contains the code that might throw an exception, the `catch` block handles the exception, and the `finally` block is always executed after the `try` block, whether an exception is thrown or not.",
      isLiked: false
    },
    {
      question: "What is a callback function?",
      ans: "A callback function is a function that is passed as an argument to another function and is executed after some event has occurred.",
      isLiked: false
    },
    {
      question: "What is a promise in JavaScript?",
      ans: "A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.",
      isLiked: false
    },
    {
      question: "What is asynchronous programming?",
      ans: "Asynchronous programming is a programming paradigm that allows multiple tasks to be performed concurrently.",
      isLiked: false
    },
    {
      question: "What is the event loop in JavaScript?",
      ans: "The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded.",
      isLiked: false
    },
    {
      question: "What is a module in Node.js?",
      ans: "A module in Node.js is a reusable block of code whose existence does not affect other parts of the code.",
      isLiked: false
    },
    {
      question: "What is the purpose of the `exports` keyword in Node.js?",
      ans: "The `exports` keyword is used to expose functions, objects, or variables from a module to be used in other modules.",
      isLiked: false
    },
    {
      question: "What is the difference between synchronous and asynchronous code execution?",
      ans: "Synchronous code is executed sequentially, blocking further execution until the current operation is completed, while asynchronous code allows other operations to be performed while waiting for the current operation to complete.",
      isLiked: false
    },
    {
      question: "What is the difference between a stack and a queue?",
      ans: "A stack is a data structure that follows the Last In, First Out (LIFO) principle, while a queue follows the First In, First Out (FIFO) principle.",
      isLiked: false
    },
    {
      question: "What is a linked list?",
      ans: "A linked list is a data structure that consists of a sequence of elements, where each element points to the next element in the sequence.",
      isLiked: false
    },
    {
      question: "What is a hash table?",
      ans: "A hash table is a data structure that stores key-value pairs, where each key is mapped to a unique index in an array.",
      isLiked: false
    },
    {
      question: "What is a binary tree?",
      ans: "A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.",
      isLiked: false
    },
    {
      question: "What is the difference between a shallow copy and a deep copy?",
      ans: "A shallow copy creates a new object and copies the references of the original object's properties, while a deep copy creates a new object and recursively copies the values of the original object's properties.",
      isLiked: false
    },
    {
      question: "What is a callback hell?",
      ans: "Callback hell is a situation in asynchronous programming where callbacks are nested within other callbacks, making the code difficult to read and maintain.",
      isLiked: false
    },
    {
      question: "What is a closure in JavaScript?",
      ans: "A closure is a function that retains access to variables from its lexical scope even after the scope has closed.",
      isLiked: false
    },
    {
      question: "What is memoization?",
      ans: "Memoization is an optimization technique used to store the results of expensive function calls and return the cached result when the same inputs occur again.",
      isLiked: false
    },
    {
      question: "What is a design pattern?",
      ans: "A design pattern is a general reusable solution to a commonly occurring problem in software design.",
      isLiked: false
    },
    {
      question: "What is the difference between the `let` and `var` keywords in JavaScript?",
      ans: "The `let` keyword declares a block-scoped variable, while the `var` keyword declares a variable with function scope.",
      isLiked: false
    },
    {
      question: "What is the event-driven programming paradigm?",
      ans: "Event-driven programming is a programming paradigm where the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs.",
      isLiked: false
    },
    {
      question: "What is the difference between synchronous and asynchronous I/O?",
      ans: "Synchronous I/O blocks the execution of the program until the I/O operation is complete, while asynchronous I/O allows the program to continue executing other tasks while waiting for the I/O operation to complete.",
      isLiked: false
    },
    {
      question: "What is a web API?",
      ans: "A web API (Application Programming Interface) is an interface that allows different software applications to communicate with each other over the web.",
      isLiked: false
    },
    {
      question: "What is the purpose of the `fetch` API in JavaScript?",
      ans: "The `fetch` API is used to make asynchronous HTTP requests in JavaScript, allowing you to fetch resources from a server.",
      isLiked: false
    }
  ];


  
  export default programmingQuestions;
  