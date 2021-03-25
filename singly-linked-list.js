class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertAtBeginning(data) {
    let newNode = new Node(data)

    newNode.next = this.head

    this.head = newNode

    return this.head
  }

  insertAtEnd(data) {
    let newNode = new Node(data)

    if(!this.head) {
      this.head = newNode
      return this.head
    }

    let current = this.head
    while(current.next !== null) {
      current = current.next
    }

    current.next = newNode
    return this.head
  }

  display() {
    let node = this.head
    while(node) {
      console.log(node)
      node = node.next
    }
  }
}

let list = new LinkedList()

list.insertAtEnd(1)
list.insertAtEnd(2)
list.insertAtEnd(3)
list.insertAtEnd(4)
list.insertAtEnd(5)

list.display()