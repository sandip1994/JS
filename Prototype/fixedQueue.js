Array.prototype.enqueue = function(val){
    if(this.length === this.queueLengthIs){
        this.shift()
        this.push(val)
    }else{
        this.push(val)
    }
    return this
}
Array.prototype.setQueueLength = function(val){
    this.queueLengthIs = val
}

let queue = new Array()
queue.setQueueLength(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
console.log(queue)
