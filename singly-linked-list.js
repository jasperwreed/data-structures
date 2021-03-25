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
}