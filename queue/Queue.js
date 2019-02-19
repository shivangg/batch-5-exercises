class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    this.data = [...this.data, element];
  }

  dequeue() {
    const top = this.data[0] || null;
    this.data = this.data.filter((value, index) => index !== 0);
    return top;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toString(fn) {
    let stringData = this.data;
    if (fn) {
      stringData = this.data.map(fn);
    }
    return stringData.join(',');
  }

  peek() {
    const queueLength = this.data.length;
    if (queueLength === 0) {
      return null;
    }
    return this.data[0];
  }
}

export {
  Queue,
};
