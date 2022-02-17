
document.getElementById('total-calc').addEventListener('click', function(){

    const foodInput = document.getElementById('foot-input').value
    const foodAmount = parseFloat(foodInput);
    const rentInput = document.getElementById('rent-input').value
    const rentAmount = parseFloat(rentInput)
    const othersInput = document.getElementById('others-input').value
    const othersAmount = parseFloat(othersInput)
    const totalCost = foodAmount + rentAmount + othersAmount
   const expensiveTotal = document.getElementById('total-expensive')
   expensiveTotal.innerText = totalCost

   const input = document.getElementById('total-income').value
   const balanceTotal = document.getElementById('balance-total')
   balanceTotal.innerText = input - totalCost
    

})

// document.getElementById('save-button').addEventListener('click', function(){
//     const saveInput = document.getElementById('save-input').value
//     const saveParcentage = document.getElementById('saving-parcentage')
//     saveParcentage.innerText =  saveInput/ 10
// })