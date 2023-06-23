class OrderedStream {
  constructor(n) {
    this.pointer = 0
    this.list = []
  }
    
  insert(id, value) {
      
      let chunk = []
      this.list[id - 1] = value // override
      
      while(this.list[this.pointer] !== undefined) {
          chunk.push(this.list[this.pointer])
          this.pointer++
    }
      
    return chunk
  }
}

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */