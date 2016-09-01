// Task01 - Create a simple object cat and return it from function.
//
// Object should have next attributes:
// color with value "white"
// age with value 3
// name - Lucky

function Cat(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
    return this;
    
}

var Lucky = new Cat ('Lucky', 3,'white');

console.log(Lucky);