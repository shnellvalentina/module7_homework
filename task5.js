class ElectricAppliances{
    constructor (name, color){
    this.name = name;
    this.color = color;
    this.isPlugged = true;  
  }
    switchOn (isPlugged) {
      this.isPlugged = true;
      console.log(`${this.name} is switch on!`);
  }    
    switchOff(isPlugged){
      this.isPlugged = false;
      console.log(`${this.name} is switch off!`);
  }
  }
  
  class Lamp extends ElectricAppliances {
    constructor (name, color, brand, voltage, colorTemp){
      super(name, color);
      this.brand = brand;
      this.voltage = voltage;
      this.colorTemp = colorTemp;
    }
    getMode(){
    this.colorTemp >= 5500;
    console.log(`${this.name} in daylight mode`);
  }
    getVoltage(){
    this.isPlugged === true;
    return this.voltage;
  } 
}
class Laptop extends ElectricAppliances {
    constructor (name, color, brand, voltage, type){
      super(name, color);
      this.brand = brand;
      this.voltage = voltage;
      this.type = type;
    }
    getVoltage(){
    this.isPlugged === true;
    return this.voltage;
  } 
}
let lamp = new Lamp ('myLamp', 'blue', 'xiaomi', 50, 5500);
let laptop = new Laptop ('myLap', 'black', 'acer', 0, 'for work');
function sumVoltage(arr){
  
  let sum=arr.reduce(function(sum,item,index,arroy){
  return sum+item.getVoltage();
  },0);
  console.log(`Voltage for all switched on devices is ${sum} watt`);
  }
  let arrDevice= [lamp, laptop];
    
    console.log(lamp);
    lamp.switchOn(true);
    lamp.getMode();
    console.log(laptop);
    laptop.switchOff(false);
    sumVoltage(arrDevice);