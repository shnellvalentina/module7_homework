const person = {
    city: 'Moscow',
  }
  const student = Object.create(person);
  student.age = 22;
  student.course = 5;
  
  function showOwnProperty(student){
      for(let key in student){
        if (student.hasOwnProperty(key)){
          console.log(key + ':' + student[key]);
      }
  }
  }
  showOwnProperty(student);