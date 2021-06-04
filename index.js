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
    if(this.top = 0) {
      return true;
    }
  }

  pop() {
    this.top - 1;
    this.data.pop();
    return this
  }

  print() {
    console.log(this.data)
  }

}

let numbers = new Stack();

numbers.push(55)
numbers.push(45)
numbers.push(15).print()
numbers.pop().print()