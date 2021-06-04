class Stack {
  constructor(){
    this.data = []
    this.top = 0;
  }

  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1
    return this
  }

  length() {
    return this.top;
  }

  peek() {
    return this.data[this.top-1]
  }
  isEmpty() {
    if(this.data.length == 0) {
      return true;
    }
  }

  pop() {
    if(this.isEmpty()) {
      return "Empty"
    }
    this.top - 1;
    this.data.pop();
    return this
  }

  print() {
    console.log(`%c [ ${this.data} ]`, 'color: white')
  }

}

let numbers = new Stack();

numbers.push(55)
numbers.push(45)
numbers.push(15).print()
console.log(`%c ${numbers.peek()}`, 'color: lightblue')
numbers.pop().print()
numbers.pop().print()
numbers.pop().print()
console.log(`%c ${numbers.pop()}`, 'color: lightblue')