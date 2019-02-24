# ES6 questions

1. What is the value of `p3` here?

  ```js
    let phonetic = ['sierra', 'charlie'];
    let [p1, p2, p3] = phonetic;
  ```
  Ans: `undefined`

  How do you think you could _default_ `p3` to a suitable value? Try it.  
  Ans: `let [p1, p2, p3='defaultValue'] = phonetic;`

2. Given this array:

  ```js
    let arr2 = ['one', 'two', ['three', ['four', ['five', 'six', 'seven']], 'eight']];
  ```

  Create a destructuring pattern to give this result:

  ```js
    console.log(m, n, o);       // two six eight
  ```
Ans: 
```js
let [, m, [, [, [, n]], o]] = ['one', 'two', ['three', ['four', ['five', 'six', 'seven']], 'eight']];
```  

3. Assume you have this object:

      ```js
        let stats = {
          packetForwarded: 5345,
          redirectSent: 427,
          forwardCacheHit: 4821,
          forwardCacheMiss: 524,
        };
      ```

  1. Use destructuring to assign variables such that:

      ```js
        console.log(hits);            // 4821
        console.log(misses);          // 524
      ```
  Ans: 
  ```js
  const {
    forwardCacheHit: hits,
    forwardCacheMiss: misses,
  } = stats;
  ```  


1. What happens when this line is executed? Why, and how would you fix it?

      ```js
        { forwardCacheHit: myhits, forwardCacheMiss: mymisses } = stats;
      ```

Ans: `{` is taken as the opening of a block statement. To solve this issue, wrap the statement in `()`.
  
  `({ forwardCacheHit: myhits, forwardCacheMiss: mymisses } = stats);`


1. What will happen when this code is executed? Why?

  ```js
    {
      console.log(i);
      let i = 5;
    }
  ```
Ans: `undefined` will be logged. This is because assignments are not hoisted.

5. What will this code output?

  ```js
    let invoiceId = 647;
      for (let invoiceId = 0; invoiceId < 5; invoiceId++) {
      }
    console.log(invoiceId);
  ```
Ans. `647`


6. What will be the output of this code snippet?

    ```js
      const N_PROC;
      console.log(N_PROC);
      N_PROC = 4;
      console.log(N_PROC);
    ```

Ans: `SyntaxError`. `const` declaration needs assignment.

7. Can default parameter expressions be computed? Is this function valid? Try it.

    ```js
      function getTotalPrice(price, tax = price * 0.2) {
        return price + tax;
      }
    ```

    1. Does the order of the parameters matter?  
    Ans: Yes, the order will matter if the default vales are to be used. If the named param is used before, its default cannot be used.

    2. Could the `0.2` be replaced by another variable or function call?  
    Ans: Yes.
    ```js
    function percentage(){
        return 0.2;
          }

    function getTotalPrice(price, tax = price * percentage()) {
      return price + tax;
    }

    console.log(getTotalPrice(50));
    ```