'use strict';

class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 19);

console.log(square.calcArea());