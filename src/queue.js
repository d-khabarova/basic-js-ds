const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.queue= [];
  }

  createObj(i){
    let obj={};    
    obj.value=this.queue[i];
    if(i<this.queue.length-1){
      i++;
      obj.next=this.createObj(i);     
    }
    else{
      obj.next=null;
    }
    
    return obj;
  }

  getUnderlyingList() {
    let qLenght=this.queue.length;
    let result={}
    let i=0;
      result=this.createObj(i);
    
    return result;
  }

  enqueue( value ) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = {
  Queue
};
