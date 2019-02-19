# Questions (Segment 1)

1) What will be the output of the code below?
  ```js
    var y = 1;
    if (function f(){}) {
      y += typeof f;
    }
    console.log(y);
  ```
  Ans: `1undefined`

2) Assuming obj is an “empty” object in scope, say:
  ```js
    var obj = {};
    
    // What is accomplished using the following code?

    ['JS', 'C++'].forEach(function(k) {
      obj[k] = undefined;
    });
  ```
  Ans. `obj` will have the properties `JS` and `C++` set to `undefined`.

3) What will the code below output to the console and why?
  ```js
    (function() {
      var a = b = 3;
    })();

    console.log("a defined? " + (typeof a !== 'undefined'));
    console.log("b defined? " + (typeof b !== 'undefined'));
  ```
  Ans: `false` and `true`. Because `b` is global but `a` is local to function.

4) What will the following code output and why?
  ```js
    var b = 1;
    function outer() {
      var b = 2
      function inner() {
        b++;
        var b = 3;
        console.log(b)
      }
      inner();
    }
    outer();
  ```
Ans: b = 3. var = 3 overrides everything.

5) What will the following code output and why?
  ```js
    console.log(typeof typeof 1);
  ```
Ans: `typeof 1` is 'number' and typeof 'number' is string
