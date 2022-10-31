<a name="HashTable"></a>

# Hash Table

The hash table is a data structure that stores items by running a key through a [*hashing function*](https://en.wikipedia.org/wiki/Hash_function) and uses this hashed key as the index of an associative array. By doing so, a hash table is able to achieve a constant/O(1) lookup time. The effectiveness of a hash table depends primarily on the hashing function used. 


## Handling Collisions

In some cases, inserting data may result in a collision, which happens when two keys run through a hashing function result in the same hash/index. Hash tables can be implemented in a few ways to deal with this. 

### Separate Chaining

[Separate Chaining](https://en.wikipedia.org/wiki/Hash_table#Separate_chaining) is a method in which the colliding key:value pairs are placed into buckets based on the hashed key. These buckets are typically implemented using a linked list, but can be built using arrays as well, as I have done in this implementation.

### Open Addressing

[Open Addressing](https://en.wikipedia.org/wiki/Hash_table#Open_addressing) is a method that involves "probing" the hash table in the case of a collision. For example, if the hash of a key is `5` and another key with that same hash already exists, we can probe the hash table for a new hash until we find one that is open. In linear probing, the probe happens in a fixed manner, typically incrementing the hash by 1. Double hashing involves running the colliding hash through another hash function, or by computing the interval of the probe using a secondary hash function.

## API

### HashTable
A hash table implementation that uses separate chaining for collisions.
When a bucket index is used to set a key:value pair, it creates an array to store the key:value pairs as objects.

**Kind**: global class  

- [Hash Table](#hash-table)
  - [Handling Collisions](#handling-collisions)
    - [Separate Chaining](#separate-chaining)
    - [Open Addressing](#open-addressing)
  - [API](#api)
    - [HashTable](#hashtable)
      - [hashTable.set(key, value)](#hashtablesetkey-value)
      - [hashTable.get(key) ⇒](#hashtablegetkey-)
      - [hashTable.bucketHasItems(key) ⇒ <code>boolean</code>](#hashtablebuckethasitemskey--boolean)
      - [hashTable.getSize() ⇒](#hashtablegetsize-)
      - [hashTable.getHashedKeys() ⇒](#hashtablegethashedkeys-)
      - [hashTable.getRawKeys() ⇒](#hashtablegetrawkeys-)
    - [asciiHash(key) ⇒ <code>number</code>](#asciihashkey--number)

<a name="HashTable+set"></a>

#### hashTable.set(key, value)
**Kind**: instance method of [<code>HashTable</code>](#HashTable)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>\*</code> | A key to be hashed and used as the unique key. If the key is found in a bucket, the value of the existing key is replaced. |
| value | <code>\*</code> | The value to associate with the key. |

<a name="HashTable+get"></a>

#### hashTable.get(key) ⇒
**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: The value of an item in the hash table corresponding to the unique key. Returns null if the key does not exist.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>\*</code> | A unique key to look up in the hash table |

<a name="HashTable+bucketHasItems"></a>

#### hashTable.bucketHasItems(key) ⇒ <code>boolean</code>
Returns true if the key hashes to a bucket that already contains items. Returns false if the bucket is empty.

**Kind**: instance method of [<code>HashTable</code>](#HashTable)  

| Param | Type |
| --- | --- |
| key | <code>\*</code> | 

<a name="HashTable+getSize"></a>

#### hashTable.getSize() ⇒
**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: The number of unique items in the hash table.  
<a name="HashTable+getHashedKeys"></a>

#### hashTable.getHashedKeys() ⇒
**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: An array of all bucket indexes that contain items.  
<a name="HashTable+getRawKeys"></a>

#### hashTable.getRawKeys() ⇒
**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: An array of all unique keys in the hash table.  

<a name="asciiHash"></a>

### asciiHash(key) ⇒ <code>number</code>
Takes in a key, stringifies it using a template literal, and uses ASCII codes to create a numeric hash.
Note, because of its stringifying behavior, this hashing function is *not* type-safe.
For example, the keys '1234' and 1234 will both return the same hash.

**Kind**: global function  
**Returns**: <code>number</code> - An integer representing the hashed key.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>\*</code> | A key to be hashed. |

