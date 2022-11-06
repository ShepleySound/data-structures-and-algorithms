# Linked List Implementation

JavaScript implementation of a Linked List data structure.

## Classes

<dl>
<dt><a href="#Node">Node</a></dt>
<dd><p>A class representing a node in a linked list.</p>
</dd>
<dt><a href="#LinkedList">LinkedList</a></dt>
<dd><p>A class representing a singly linked list.</p>
</dd>
</dl>

<a name="Node"></a>

## Node

A class representing a node in a linked list.

**Kind**: global class  
<a name="LinkedList"></a>

## LinkedList

A class representing a singly linked list.

**Kind**: global class

- [Linked List Implementation](#linked-list-implementation)
  - [Classes](#classes)
  - [Node](#node)
  - [LinkedList](#linkedlist)
    - [new LinkedList()](#new-linkedlist)
    - [linkedList.traverseToEnd() ⇒ <code>Node</code>](#linkedlisttraversetoend--node)
    - [linkedList.getNode(data) ⇒ <code>Node</code> \| <code>null</code>](#linkedlistgetnodedata--node--null)
    - [linkedList.getNodeBefore(data) ⇒ <code>Node</code> \| <code>null</code>](#linkedlistgetnodebeforedata--node--null)
    - [linkedList.insertBefore(searchValue, data) ⇒ <code>Node</code> \| <code>null</code>](#linkedlistinsertbeforesearchvalue-data--node--null)
    - [linkedList.insertAfter(searchValue, data) ⇒ <code>Node</code> \| <code>null</code>](#linkedlistinsertaftersearchvalue-data--node--null)
    - [linkedList.insertAtFront(data)](#linkedlistinsertatfrontdata)
    - [linkedList.insertAtBack(data)](#linkedlistinsertatbackdata)
    - [linkedList.includes(data) ⇒ <code>boolean</code>](#linkedlistincludesdata--boolean)

<a name="new_LinkedList_new"></a>

### new LinkedList()

Constructs a linked list with the head set to null.

<a name="LinkedList+traverseToEnd"></a>

### linkedList.traverseToEnd() ⇒ [<code>Node</code>](#Node)

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: [<code>Node</code>](#Node) - The final node in the linked list  
<a name="LinkedList+getNode"></a>

### linkedList.getNode(data) ⇒ [<code>Node</code>](#Node) \| <code>null</code>

Retrieves a node from the linked list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: [<code>Node</code>](#Node) \| <code>null</code> - The first node that matches [data](data)
OR null if the data is not found inside of any of the linked list's nodes.

| Param | Type            | Description                                          |
| ----- | --------------- | ---------------------------------------------------- |
| data  | <code>\*</code> | Matches the data property of a [Node](#Node) object. |

<a name="LinkedList+getNodeBefore"></a>

### linkedList.getNodeBefore(data) ⇒ [<code>Node</code>](#Node) \| <code>null</code>

Retrieves a node from the linked list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: [<code>Node</code>](#Node) \| <code>null</code> - The node before the node that matches [data](data). Returns null if the found node does not have a node preceding it, or if the node is not found at all.

| Param | Type            | Description                                          |
| ----- | --------------- | ---------------------------------------------------- |
| data  | <code>\*</code> | Matches the data property of a [Node](#Node) object. |

<a name="LinkedList+insertBefore"></a>

### linkedList.insertBefore(searchValue, data) ⇒ [<code>Node</code>](#Node) \| <code>null</code>

Inserts a new node before the first node that contains the search value.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: [<code>Node</code>](#Node) \| <code>null</code> - the newly created node OR null if the node parameter is falsy.

| Param       | Type            | Description                                                                                   |
| ----------- | --------------- | --------------------------------------------------------------------------------------------- |
| searchValue | <code>\*</code> | The value to search for within the linked list. The new node will be placed before this node. |
| data        | <code>\*</code> | Defines the data to be placed within the inserted node.                                       |

<a name="LinkedList+insertAfter"></a>

### linkedList.insertAfter(searchValue, data) ⇒ [<code>Node</code>](#Node) \| <code>null</code>

Inserts a new node after the first node that contains the search value.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: [<code>Node</code>](#Node) \| <code>null</code> - the newly created node OR null if the node parameter is falsy.

| Param       | Type            | Description                                                                                  |
| ----------- | --------------- | -------------------------------------------------------------------------------------------- |
| searchValue | <code>\*</code> | The value to search for within the linked list. The new node will be placed after this node. |
| data        | <code>\*</code> | Defines the data to be placed within the inserted node.                                      |

<a name="LinkedList+insertAtFront"></a>

### linkedList.insertAtFront(data)

Inserts a new node at the front of the linked list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)

| Param | Type            | Description                                             |
| ----- | --------------- | ------------------------------------------------------- |
| data  | <code>\*</code> | Defines the data to be placed within the inserted node. |

<a name="LinkedList+insertAtBack"></a>

### linkedList.insertAtBack(data)

Inserts a new node at the back of the linked list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)

| Param | Type            | Description                                             |
| ----- | --------------- | ------------------------------------------------------- |
| data  | <code>\*</code> | Defines the data to be placed within the inserted node. |

<a name="LinkedList+includes"></a>

### linkedList.includes(data) ⇒ <code>boolean</code>

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>boolean</code> - true if the value is found within the link list, false if the value is not found.

| Param | Type            | Description                                          |
| ----- | --------------- | ---------------------------------------------------- |
| data  | <code>\*</code> | The data value of a [Node](#Node) to be searched for |
