<a name="HashTable"></a>

## HashTable
A hash table implementation that uses separate chaining for collisions.
When a bucket index is used to set a key:value pair, it creates an array to store the key:value pairs as objects.

**Kind**: global class  

* [HashTable](#HashTable)
    * [.set(key, value)](#HashTable+set)
    * [.get(key)](#HashTable+get) ⇒
    * [.bucketHasItems(key)](#HashTable+bucketHasItems) ⇒ <code>boolean</code>
    * [.getSize()](#HashTable+getSize) ⇒
    * [.getHashedKeys()](#HashTable+getHashedKeys) ⇒
    * [.getRawKeys()](#HashTable+getRawKeys) ⇒

<a name="HashTable+set"></a>

### hashTable.set(key, value)
**Kind**: instance method of [<code>HashTable</code>](#HashTable)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>\*</code> | A key to be hashed and used as the unique key. If the key is found in a bucket, the value of the existing key is replaced. |
| value | <code>\*</code> | The value to associate with the key. |

<a name="HashTable+get"></a>

### hashTable.get(key) ⇒
**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: The value of an item in the hash table corresponding to the unique key. Returns null if the key does not exist.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>\*</code> | A unique key to look up in the hash table |

<a name="HashTable+bucketHasItems"></a>

### hashTable.bucketHasItems(key) ⇒ <code>boolean</code>
Returns true if the key hashes to a bucket that already contains items. Returns false if the bucket is empty.

**Kind**: instance method of [<code>HashTable</code>](#HashTable)  

| Param | Type |
| --- | --- |
| key | <code>\*</code> | 

<a name="HashTable+getSize"></a>

### hashTable.getSize() ⇒
**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: The number of unique items in the hash table.  
<a name="HashTable+getHashedKeys"></a>

### hashTable.getHashedKeys() ⇒
**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: An array of all bucket indexes that contain items.  
<a name="HashTable+getRawKeys"></a>

### hashTable.getRawKeys() ⇒
**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: An array of all unique keys in the hash table.  
