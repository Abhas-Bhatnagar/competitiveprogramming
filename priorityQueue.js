class priorityQueue {
    constructor(pqueueType) {
        this.pqueue = [];
        this.size = -1;    
        this.pqueueType = pqueueType ? pqueueType : "max";
    }
    parent(index){
        return parseInt((index - 1) / 2);
    }
    leftChild(index){
        return parseInt((2 * index) + 1);
    }
    rightChild(index){
    	return parseInt((2 * index) + 2);
    }
    shiftUp(index){
        if (this.pqueueType == "max") {
            while (index > 0 && this.pqueue[this.parent(index)].key < this.pqueue[index].key) {
                // Swap parent and current node
                this.swap(this.parent(index), index);
                // Update i to parent of i
                index = this.parent(index);
            }    
        } else {
            while (index > 0 && this.pqueue[this.parent(index)].key > this.pqueue[index].key) {
                // Swap parent and current node
                this.swap(this.parent(index), index);
                // Update i to parent of i
                index = this.parent(index);
            }
        }
        
    }
    swap(index1, index2){
        let temp = this.pqueue[index1];
        this.pqueue[index1] = this.pqueue[index2];
        this.pqueue[index2] = temp;
    }
    shiftDown(index){
        let maxOrMinIndex = index;
        if (this.pqueueType == "max") {
            // Left Child
            let l = this.leftChild(index);
            if (l <= this.size && this.pqueue[l].key > this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = l;
            }
            // Right Child
            let r = this.rightChild(index);
            if (r <= this.size && this.pqueue[r].key > this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = r;
            } 
        } else {
            // Left Child
            let l = this.leftChild(index);
            if (l <= this.size && this.pqueue[l].key < this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = l;
            }
            // Right Child
            let r = this.rightChild(index);
            if (r <= this.size && this.pqueue[r].key < this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = r;
            }
        }
        
        if (index != maxOrMinIndex) {
            this.swap(index, maxOrMinIndex);
            this.shiftDown(maxOrMinIndex);
        }
    }
    insert(p){
        this.size = this.size + 1;
        this.pqueue[this.size] = p;
        // Shift Up to maintain heap property
        this.shiftUp(this.size);
    }
    extractElement(){
        let result = this.pqueue[0];
        // Replace the value at the root
        // with the last leaf
        this.pqueue[0] = this.pqueue[this.size];
        this.size = this.size - 1;
        // Shift down the replaced element
        // to maintain the heap property
        this.shiftDown(0);
        return result;
    }
    changePriority(index, p){
        let oldp = this.pqueue[index];
        this.pqueue[index] = p;
        if (p > oldp) {
            this.shiftUp(index);
        }
        else {
            this.shiftDown(index);
        }
    }
    getTopElement(){
        return this.pqueue[0];
    }
    getSize() {
        return this.size+1;
    }
}

/**
(function main() {
    let pqueue = new priorityQueue("min");
    pqueue.insert({key :45 , data : null});
    pqueue.insert({key :20 , data : null});
    pqueue.insert({key :14 , data : null});
    pqueue.insert({key :12 , data : null});
    pqueue.insert({key :31 , data : null});
    pqueue.insert({key :7 , data : null});
    pqueue.insert({key :11 , data : null});
    pqueue.insert({key :13 , data : null});
    pqueue.insert({key :7 , data : null});
    console.log(pqueue)
})();
 */

/*
        45
        /	 \
    31	 14
    / \ / \
	13 20 7 11
    / \
    12 7
Create a priority queue shown in
example in a binary max heap form.
Queue will be represented in the
form of array as:
45 31 14 13 20 7 11 12 7 */
// Insert the element to the
// priority queue

module.exports = {
    priorityQueue
};




/** 
function priorityQueue(pqueueType) {
    this.pqueue = [];
    this.size = -1;    
    this.pqueueType = pqueueType ? pqueueType : "max";
    this.parent = (index)=>{
        return parseInt((index - 1) / 2);
    };
    this.leftChild= (index)=> {
        return parseInt((2 * index) + 1);
    }
    this.rightChild= (index)=> {
    	return parseInt((2 * index) + 2);
    }
    this.shiftUp= (index)=>{
        if (this.pqueueType == "max") {
            while (index > 0 && this.pqueue[this.parent(index)].key < this.pqueue[index].key) {
                // Swap parent and current node
                this.swap(this.parent(index), index);
                // Update i to parent of i
                index = this.parent(index);
            }    
        } else {
            while (index > 0 && this.pqueue[this.parent(index)].key > this.pqueue[index].key) {
                // Swap parent and current node
                this.swap(this.parent(index), index);
                // Update i to parent of i
                index = this.parent(index);
            }
        }
        
    }
    this.swap= (index1, index2)=> {
        let temp = this.pqueue[index1];
        this.pqueue[index1] = this.pqueue[index2];
        this.pqueue[index2] = temp;
    }
    this.shiftDown= (index)=>{
        let maxOrMinIndex = index;
        if (this.pqueueType == "max") {
            // Left Child
            let l = this.leftChild(index);
            if (l <= this.size && this.pqueue[l].key > this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = l;
            }
            // Right Child
            let r = this.rightChild(index);
            if (r <= this.size && this.pqueue[r].key > this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = r;
            } 
        } else {
            // Left Child
            let l = this.leftChild(index);
            if (l <= this.size && this.pqueue[l].key < this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = l;
            }
            // Right Child
            let r = this.rightChild(index);
            if (r <= this.size && this.pqueue[r].key < this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = r;
            }
        }
        
        if (index != maxOrMinIndex) {
            this.swap(index, maxOrMinIndex);
            this.shiftDown(maxOrMinIndex);
        }
    }
    this.insert = (p)=>{
        this.size = this.size + 1;
        this.pqueue[this.size] = p;
        // Shift Up to maintain heap property
        this.shiftUp(this.size);
    }
    this.extractElement = ()=>{
        let result = this.pqueue[0];
        // Replace the value at the root
        // with the last leaf
        this.pqueue[0] = this.pqueue[this.size];
        this.size = this.size - 1;
        // Shift down the replaced element
        // to maintain the heap property
        this.shiftDown(0);
        return result;
    }
    this.changePriority = (index, p)=>{
        let oldp = this.pqueue[index];
        this.pqueue[index] = p;
        if (p > oldp) {
            this.shiftUp(index);
        }
        else {
            this.shiftDown(index);
        }
    }
    this.getTopElement = ()=>{
        return this.pqueue[0];
    }
    
}
*/
