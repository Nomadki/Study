function checkThreeAndTwo(array) {
    let necessaryQuantity = 3
    let aCounter = 0
    let bCounter = 0 
    let cCounter = 0
    for(let i = 0; i <= array[i]; i++){
      if(array[i] === "a"){
        aCounter++
      }
      if(array[i] === "b"){
        bCounter++
      }
      if(array[i] === "c"){
        cCounter++
      }
    }
    if(aCounter || bCounter || cCounter >= necessaryQuantity){
      console.log('true')
    } else{
      console.log('false')
    }
  }