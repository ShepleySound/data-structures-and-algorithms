# Repeated Word

## Challenge

Write a function that takes in two hash tables and performs an operation similar to a left join. That is, any key:value pairs should be present in a newly created structure, and any matching keys in the second table should have its value appended to the join table "row".

For this challenge, I have used a custom [hash table implementation](./README.md) and the following functions.

By slightly modifying a function in the hash table implementation to perform a callback on each key rather than return a fully formed array of keys, the challenge implementation can be kept very short.

The function itself takes in two hash tables. We'll call them `left` and `right`.

First, we create a new hash table (Let's call it `join`). Then, we use the aforementioned .rawKeysCallback(callback) method of `left`. The callback function takes in a key, which in this case will be every unique key that exists in `left`.

Inside the definition of the callback, we use the .set() method of `join` and pass in our current key, along with an array. The first element of this array is the return of .get(key) on `left`, and the second element element is the return of .get(key) on `right`. If that second element is undefined, we'll set it to `null` for the sake of simplicity.

After our .rawKeysCallback() method ends, just return `join`! Now we have a new hash table with a tuple-like value associated with each key from the `left` table.
