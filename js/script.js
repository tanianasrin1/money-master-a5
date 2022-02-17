document.getElementById('total-calc').addEventListener('click', function(){
    
   

    //    monthly income cost
    const foodInput = document.getElementById('foot-input').value
    const foodAmount = parseFloat(foodInput);
    const rentInput = document.getElementById('rent-input').value
    const rentAmount = parseFloat(rentInput)
    const othersInput = document.getElementById('others-input').value
    const othersAmount = parseFloat(othersInput)
    const totalCost = foodAmount + rentAmount + othersAmount
   const expensiveTotal = document.getElementById('total-expensive')
   expensiveTotal.innerText = totalCost

//    monthly income input
   const inputincome = document.getElementById('total-income').value
   const balanceTotal = document.getElementById('balance-total')
   balanceTotal.innerText = inputincome - totalCost


   

//    error handling negative value
   if(foodInput <0 ){
       alert('please enter the valid number')
   }
   if(rentInput <0 ){
       alert('please enter the valid number')
   }
   if(othersInput <0 ){
       alert('please enter the valid number')
   }

   if(inputincome <0 ){
       alert('please enter the valid number')
   }

//   empty string error
   if(foodInput == ''){
       alert('please enter the valid number')
   }
   if(rentInput == ''){
       alert('please enter the valid number')
   }
   if(othersInput == ''){
       alert('please enter the valid number')
   }

   if(inputincome == ''){
       alert('please enter the valid number')
   }

//  error handling by string
   
   if(isNaN(inputincome)){
       alert('please enter the valid input')
   }
   if(isNaN(foodInput)){
       alert('please enter the valid input')
   }
   if(isNaN(rentInput)){
       alert('please enter the valid input')
   }
   if(isNaN(othersInput)){
       alert('please enter the valid input')
   }


   //    extra part error
 if(  inputincome <= totalCost){
    alert('please enter right input')
 }

 
})

//  saving part
document.getElementById('save-button').addEventListener('click', function(){

    // saving Amount part
    const incomeInput = document.getElementById('total-income').value
    const incomeAmount = parseFloat(incomeInput)
    const savingInput = document.getElementById('save-input').value
    const savingAmount = parseFloat(savingInput)
    const percentageTotal = (incomeAmount/100)* savingAmount
    const savingParcentageTotal = document.getElementById('saving-parcentage')
    
    savingParcentageTotal.innerText = percentageTotal

  
    
    
 
})