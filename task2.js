const suitcase = {
    color: 'red',
  }
  const str = 'color'
  function checkProperty(str, suitcase){
    if(str in suitcase){
      console.log('true')
    }
    else
      console.log('false')
  }
  checkProperty(str, suitcase)