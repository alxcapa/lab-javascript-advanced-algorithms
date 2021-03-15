class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // can i push some content ?
    // If more than 10, no

    if (this.stackControl.length >= this.MAX_SIZE) {
      return false
    } else {
      return true
    }


  }

  display() {
    return this.stackControl;

  }

  isEmpty() {


    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }

  }

  push(item) {

    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;

    } else {
      return 'Stack Overflow'
    }

  }

  pop() {

    if (this.isEmpty() === false) {
      this.stackControl.pop()
    } else {
      return 'Stack Underflow'
    }
  }
}