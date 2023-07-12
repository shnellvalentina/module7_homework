//родительская функция конструктор
function ElectricAppliances(name,color) {
    this.name = name,
    this.color = color,
    this.isPlugged = true    
  }
  //метод включения
  ElectricAppliances.prototype.switchOn = function(){
    if(this.isPlugged === true){
    console.log(`${this.name} is switch on!`);
  }
  }
  //метод выключения
  ElectricAppliances.prototype.switchOff = function(){
    if(this.isPlugged === false){
    console.log(`${this.name} is switch off!`);
  }
  }
  //функция конструктор для лампы  
  function Lamp(name, brand, voltage, color, colorTemp){
    this.name = name,
    this.brand = brand,
    this.voltage = voltage,
    this.color = color,
    this.colorTemp = colorTemp,
    this.isPlugged = true
  }
  Lamp.prototype = new ElectricAppliances();
  //метод получения напряжения
  Lamp.prototype.getVoltage = function(){
    if(this.isPlugged === true){
    return this.voltage;
  } else {return 0};
  }
  //метод получения режима работы
  Lamp.prototype.getMode = function(){
    if(this.colorTemp >= 5500){
    console.log(`${this.name} in daylight mode`);
  }else if(this.colorTemp <= 1500){
    console.log(`${this.name} in nightlight mode`);
  }
  }
  //функция конструктор для ноутбука
  function Laptop(name, brand, voltage, color, type) {
    this.name = name,
    this.brand = brand,
    this.voltage = voltage,
    this.color =color,
    this.type = type,
    this.isPlugged = false
  }
  //метод получение напряжения
  Laptop.prototype = new ElectricAppliances();
  Laptop.prototype.getVoltage = function(){
    if(this.isPlugged === true){
    return this.voltage;
  } else {return 0};
  }
  //создание экземпляров приборов
  const tableLamp = new Lamp("Lamp", "Xiaomi", 50, "white", 1500);
  const myLaptop = new Laptop("Laptop", "Acer", 0, "black", "for work");
  //считаем общую мощность подключенных приборов
  function sumVoltage(arr){
  
  let sum=arr.reduce(function(sum,item,index,arroy){
  return sum+item.getVoltage();
  },0);
  console.log(`Voltage for all switched on devices is ${sum} watt`);
  }
  let arrDevice= [tableLamp, myLaptop];

  //напряжение всех включенных приборов
  sumVoltage(arrDevice);
  //выключение компьютера
  myLaptop.switchOff();
  //включение лампы
  tableLamp.switchOn();
  //режим лампы
  tableLamp.getMode();
  // зезультат
  console.log(myLaptop);
  console.log(tableLamp);