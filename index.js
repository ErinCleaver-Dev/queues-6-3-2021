class Queue {
    // Array is used to implement a queue of
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
        return this;
    }

    dequeue() { 

        if(this.isEmpty()) {
            return console.log("Underflow")
        }
        return this.items.shift()
    }

    isEmpty() {
        if(this.items.length === 0) {
            return true;
        }
    }

    length() {
        return this.items.length
    }

    getFront() {
        return this.items[0]
    }

    getLast() {
        return this.items[this.items.length - 1];
    }

    print() { 
        console.log(this.items);
    }

}

numbers = new Queue();

numbers.enqueue(45)
numbers.enqueue(25)
numbers.enqueue(12).print()
numbers.dequeue()
numbers.print()
numbers.dequeue()
numbers.dequeue()
numbers.dequeue()
numbers.enqueue(45)
numbers.enqueue(25)
console.log(numbers.getFront())
console.log(numbers.getLast())
