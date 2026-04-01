function showMessage() {
    alert("This is a message from the showMessage function!");
}

showMessage();

function sum(nr1, nr2) {
    return nr1 + nr2;
}

console.log(sum(5, 10));

function toCelsius (f){
    return (5/9) * (f-32);
}

console.log("54 degrees Fahrenheit is equal to " + toCelsius(54) + " degrees Celsius.");

function dsfunction(){
    var localvar = "This is a local variable.";
    alert(localvar);
}

dsfunction();

function toSeconds(m){
    return m * 60;
}

console.log("5 minutes is equal to " + toSeconds(5) + " seconds."); 

var car = {name:"Mercedes",
            color:"black",
            year:2020, 
            kilometers:0,
            startEngine : function(){
                alert("Vrooom!!!")
            },
            get getKilometers(){
                return this.kilometers;
            },
            set setKilometers(km){
                this.kilometers = km;
            }
        };


alert(car.name);
car.startEngine();


console.log(car.getKilometers);
car.setKilometers = 100;
console.log(car.getKilometers);

var computer = new Object();


computer.name = "Lenovo";
computer.CPU = "Intel core i7";
computer.RAM = "16GB";
computer.GPU = "GeForce GT730 2GB Dual DP HP";


computer.type = function(){
    return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU;
};


alert(computer.GPU);
alert(computer.type());
delete computer.GPU;
alert(computer.GPU);

function Computer(name, CPU, RAM, GPU){
    this.name=name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}


var computer1 = new Computer("MacBook Pro", "M1 8core", "8GB", "5600M GPU");
var computer2 = new Computer("Acer", "Intel core i3", "4GB", "Integrated");
