# Stack/Queue Implementation
<!-- Description of the challenge -->

## Challenge

Implement both a `Stack` and a `Queue` using a `Linked List` as the underlying data structure.

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
The Node, Stack, and Queue are implemented using ES6 Classes.

The implementation of the stack and queue are similar, with a key difference - the stack has a single pointer to its top node, and the queue has a pointer to both its front node *and* its back node.

I won't get into the pros/cons of each, since there are already [too many search results to count](https://www.google.com/search?q=stack+vs+queue) on the subject. Suffice it to say, building a simple implementation of these structures was really interesting, and there's a lot to be learned from them.

Each structure has an insertion and a deletion method. If you think of both in terms of a horizontal structure, they both delete from the front. The stack inserts at the front. The queue inserts at the back. It's typical that a stack is visualized as a vertical structure, though.

(Note, it may be easier to say that stacks insert at the back and delete from the back... Either way, just keep in mind that stacks only have a single point of entry/exit!)

In terms of efficiency, every operation on these structures happens in O(1) time. Granted, this has its limitations. We can't see through to the bottom of a stack. We can see both ends of a queue, but we can't remove whatever is at the back of it without first removing every item from the front... And even then there's no guarantee that the thing that was at the back when you *started* to remove items is still at the back... Maybe. It depends on a lot of factors. If you're interested in the theory of some of this stuff, go ahead and check out [this Wikipedia page on abstract data types](https://en.wikipedia.org/wiki/Abstract_data_type), which stacks and queues are a part of.

## Classes

<dl>
<dt><a href="#Node">Node</a></dt>
<dd><p>Class represting a node.</p>
</dd>
<dt><a href="#Stack">Stack</a></dt>
<dd><p>Class representing a stack. It is aware of its <code>top</code> property, even when empty.</p>
</dd>
<dt><a href="#Queue">Queue</a></dt>
<dd><p>Class representing a queue. It is aware of its <code>front</code> and <code>back</code> properties, even when empty.</p>
</dd>
<dt><a href="#NullableStack">NullableStack</a> ⇐ <code><a href="#Stack">Stack</a></code></dt>
<dd><p>A class reprenting a stack which can return a null value from its peek() method.</p>
</dd>
<dt><a href="#PseudoQueue">PseudoQueue</a></dt>
<dd><p>Class representing a &quot;pseudo-queue&quot;. Implemented using two simultaneous instances of <a href="#NullableStack">NullableStack</a>.</p>
</dd>
</dl>

<a name="Node"></a>

## Node
Class represting a node.

**Kind**: global class  
<a name="new_Node_new"></a>

### new Node(data, next)
Create a node.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | Contains data for the node. |
| next | [<code>Node</code>](#Node) | A pointer to the next node. |

<a name="Stack"></a>

## Stack
Class representing a stack. It is aware of its `top` property, even when empty.

**Kind**: global class  

* [Stack](#Stack)
    * [new Stack()](#new_Stack_new)
    * [.push(data)](#Stack+push)
    * [.pop()](#Stack+pop) ⇒
    * [.peek()](#Stack+peek) ⇒
    * [.isEmpty()](#Stack+isEmpty) ⇒ <code>boolean</code>

<a name="new_Stack_new"></a>

### new Stack()
Create a stack. The stack is empty when instantiated.

<a name="Stack+push"></a>

### stack.push(data)
Push a new [Node](#Node).

**Kind**: instance method of [<code>Stack</code>](#Stack)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | Data for the new [Node](#Node) to contain. |

<a name="Stack+pop"></a>

### stack.pop() ⇒
Removes the node that exists at the top of the stack.

**Kind**: instance method of [<code>Stack</code>](#Stack)  
**Returns**: data from the popped [Node](#Node).  
**Throws**:

- Will throw an error if the stack is empty.

<a name="Stack+peek"></a>

### stack.peek() ⇒
Returns the data from the top node of the stack.

**Kind**: instance method of [<code>Stack</code>](#Stack)  
**Returns**: data from the node at the top of the stack.  
**Throws**:

- Will throw an error if the stack is empty.

<a name="Stack+isEmpty"></a>

### stack.isEmpty() ⇒ <code>boolean</code>
Checks to see if the stack is empty by checking its top property.

**Kind**: instance method of [<code>Stack</code>](#Stack)  
**Returns**: <code>boolean</code> - If the stack is empty, return true. If the stack contains any nodes, return false.  
<a name="Queue"></a>

## Queue
Class representing a queue. It is aware of its `front` and `back` properties, even when empty.

**Kind**: global class  

* [Queue](#Queue)
    * [new Queue()](#new_Queue_new)
    * [.enqueue(data)](#Queue+enqueue)
    * [.dequeue()](#Queue+dequeue) ⇒
    * [.peek()](#Queue+peek) ⇒
    * [.isEmpty()](#Queue+isEmpty) ⇒ <code>boolean</code>

<a name="new_Queue_new"></a>

### new Queue()
Create a queue. The queue is empty when instantiated.

<a name="Queue+enqueue"></a>

### queue.enqueue(data)
create a new [Node](#Node) at the back of the queue.

**Kind**: instance method of [<code>Queue</code>](#Queue)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | Data for the new [Node](#Node) to contain. |

<a name="Queue+dequeue"></a>

### queue.dequeue() ⇒
Removes the node that exists at the front of the queue.

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: data from the dequeued [Node](#Node).  
**Throws**:

- Will throw an error if the stack is empty.

<a name="Queue+peek"></a>

### queue.peek() ⇒
Returns the data from the front node of the queue.

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: data from the node at the front of the queue.  
**Throws**:

- Will throw an error if the queue is empty.

<a name="Queue+isEmpty"></a>

### queue.isEmpty() ⇒ <code>boolean</code>
Checks to see if the queue is empty by checking its front property.

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: <code>boolean</code> - If the queue is empty, return true. If the queue contains any nodes, return false.  
<a name="NullableStack"></a>

## NullableStack ⇐ [<code>Stack</code>](#Stack)
A class reprenting a stack which can return a null value from its peek() method.

**Kind**: global class  
**Extends**: [<code>Stack</code>](#Stack)  

* [NullableStack](#NullableStack) ⇐ [<code>Stack</code>](#Stack)
    * [.push(data)](#Stack+push)
    * [.pop()](#Stack+pop) ⇒
    * [.peek()](#Stack+peek) ⇒
    * [.isEmpty()](#Stack+isEmpty) ⇒ <code>boolean</code>

<a name="Stack+push"></a>

### nullableStack.push(data)
Push a new [Node](#Node).

**Kind**: instance method of [<code>NullableStack</code>](#NullableStack)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | Data for the new [Node](#Node) to contain. |

<a name="Stack+pop"></a>

### nullableStack.pop() ⇒
Removes the node that exists at the top of the stack.

**Kind**: instance method of [<code>NullableStack</code>](#NullableStack)  
**Returns**: data from the popped [Node](#Node).  
**Throws**:

- Will throw an error if the stack is empty.

<a name="Stack+peek"></a>

### nullableStack.peek() ⇒
Returns the data from the top node of the stack.

**Kind**: instance method of [<code>NullableStack</code>](#NullableStack)  
**Overrides**: [<code>peek</code>](#Stack+peek)  
**Returns**: data from the node at the top of the stack.  
**Throws**:

- Will throw an error if the stack is empty.

<a name="Stack+isEmpty"></a>

### nullableStack.isEmpty() ⇒ <code>boolean</code>
Checks to see if the stack is empty by checking its top property.

**Kind**: instance method of [<code>NullableStack</code>](#NullableStack)  
**Returns**: <code>boolean</code> - If the stack is empty, return true. If the stack contains any nodes, return false.  
<a name="PseudoQueue"></a>

## PseudoQueue
Class representing a "pseudo-queue". Implemented using two simultaneous instances of [NullableStack](#NullableStack).

**Kind**: global class  

* [PseudoQueue](#PseudoQueue)
    * [new PseudoQueue()](#new_PseudoQueue_new)
    * [.enqueue(data)](#PseudoQueue+enqueue)
    * [.dequeue()](#PseudoQueue+dequeue) ⇒
    * [.peek()](#PseudoQueue+peek) ⇒
    * [.isEmpty()](#PseudoQueue+isEmpty) ⇒ <code>boolean</code>

<a name="new_PseudoQueue_new"></a>

### new PseudoQueue()
Create a pseudo-queue. The queue contains two empty instances of [NullableStack](#NullableStack) when instantiated

<a name="PseudoQueue+enqueue"></a>

### pseudoQueue.enqueue(data)
create a new [Node](#Node) at the back of the queue.

**Kind**: instance method of [<code>PseudoQueue</code>](#PseudoQueue)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | Data for the new [Node](#Node) to contain. |

<a name="PseudoQueue+dequeue"></a>

### pseudoQueue.dequeue() ⇒
Removes the node that exists at the front of the queue.

**Kind**: instance method of [<code>PseudoQueue</code>](#PseudoQueue)  
**Returns**: data from the dequeued [Node](#Node).  
**Throws**:

- Will throw an error if the stack is empty.

<a name="PseudoQueue+peek"></a>

### pseudoQueue.peek() ⇒
Returns the data from the front node of the queue.

**Kind**: instance method of [<code>PseudoQueue</code>](#PseudoQueue)  
**Returns**: data from the node at the front of the queue.  
**Throws**:

- Will throw an error if the queue is empty.

<a name="PseudoQueue+isEmpty"></a>

### pseudoQueue.isEmpty() ⇒ <code>boolean</code>
Checks to see if the queue is empty by checking its front property.

**Kind**: instance method of [<code>PseudoQueue</code>](#PseudoQueue)  
**Returns**: <code>boolean</code> - If the queue is empty, return true. If the queue contains any nodes, return false.  
