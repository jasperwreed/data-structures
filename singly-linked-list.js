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

  // need to work this out
  sort() {
    let currentNode = this.head
    let nextNode = currentNode.next

    while(currentNode) {
      if(currentNode.data > nextNode.data) {
        console.log('greater')
        nextNode = currentNode
      } else {
        console.log('less than')
        currentNode = nextNode
      }
    }
  }

  length() {
    let len = 0

    while(this.head) {
      this.head = this.head.next
      len++
    }
    
    console.log(len)
  }

  isPalindrome() {
    let results = []
    
    while(this.head) {
        results.push(this.head.data)
        this.head = this.head.next
    }

    console.log(results.join('') === results.reverse().join(''))
};

  display() {
    while(this.head) {
      console.log(this.head.data)
      this.head = this.head.next
    }
  }

}

let list = new LinkedList()

list.insertAtEnd(1)
list.insertAtEnd(2)
list.insertAtEnd(3)
list.insertAtEnd(4)
list.insertAtEnd(5)
list.insertAtBeginning(3)
list.insertAtBeginning(5)
list.insertAtBeginning(10)

// list.sort()

list.length()

// list.isPalindrome()

// list.display()
